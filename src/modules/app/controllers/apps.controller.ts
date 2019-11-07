import { BaseController } from '../../../core/controllers/base.contoller';
import { App } from '../entities/apps.entity';
import { AppsService } from '../services/apps.service';
import {
    Controller,
    Get,
    Post,
    Body,
    UseInterceptors,
    UploadedFile,
    Param,
    Res,
    Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { getConfiguration } from 'src/core/utilities/configuration';
import * as fs from 'fs';
import * as StreamZip from 'node-stream-zip';
import { ApiResult } from 'src/core/interfaces';
import { Request, Response } from 'express';

@Controller('api/' + App.plural)
export class AppsController extends BaseController<App> {
    constructor(private service: AppsService) {
        super(service, App);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: getConfiguration().temp,
                filename: (req, file, cb) => {
                    // Generating a 32 random chars long string
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    // Calling the callback passing the random name generated with the original extension name
                    cb(null, randomName + '.app.zip');
                },
            }),
        }),
    )
    async upload(
        @Req() req: Request,
        @Res() res: Response,
        @UploadedFile() file,
    ): Promise<ApiResult> {
        try {
            const result: any = await this.uploadFile(file);
            const apps: any[] = await this.service.findWhere({
                name: result.name,
            });
            if (apps.length === 0) {
                return super.create(req, res, result);
            } else {
                return this.service.updateByUID(apps[0].id, result);
            }
        } catch (e) {
            return e;
        }
    }

    /**
     *
     * @param file
     */
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const zip = new StreamZip({
                file: file.path,
                storeEntries: true,
            });
            zip.on('ready', () => {
                let found = false;
                Object.values(zip.entries()).forEach((entry: any) => {
                    if (entry.name === 'manifest.webapp') {
                        found = true;
                    }
                });
                if (!found) {
                    reject({
                        error: 'No Manifest File Found',
                    });
                    zip.close();
                } else {
                    zip.stream('manifest.webapp', (err, stream) => {
                        const chunks = [];
                        stream.on('data', chunk => {
                            chunks.push(chunk);
                        });
                        stream.on('end', () => {
                            try {
                                const manifest = JSON.parse(Buffer.concat(chunks).toString());
                                const destination =
                                    getConfiguration().apps +
                                    '/' +
                                    manifest.name
                                        .toLowerCase()
                                        .split(' ')
                                        .join('');
                                if (!fs.existsSync(destination)) {
                                    fs.mkdirSync(destination);
                                }
                                zip.extract(
                                    null,
                                    getConfiguration().apps +
                                    '/' +
                                    manifest.name
                                        .toLowerCase()
                                        .split(' ')
                                        .join(''),
                                    (err, count) => {
                                        zip.close();
                                        resolve({
                                            name: manifest.name,
                                            shortName: manifest.name,
                                            version: manifest.version,
                                            launchpath: manifest.launch_path,
                                            appicon:
                                                manifest.icons['16'] ||
                                                manifest.icons['48'] ||
                                                manifest.icons['128'],
                                        });
                                    },
                                );
                            } catch (e) {
                                if (
                                    e.message.indexOf('Unexpected string in JSON at position') >
                                    -1
                                ) {
                                    reject({
                                        error: 'Manifest File Invalid JSON',
                                    });
                                } else {
                                    reject({
                                        error: e.message,
                                    });
                                }
                            }
                        });
                    });
                }
            });
        });
    }

    /**
     *
     * @param params
     * @param res
     */
    @Get(':id/*')
    async loadFile(@Param() params, @Res() res) {
        // const result = await this.service.findOneByUid(params.id);
        res.sendFile(getConfiguration().apps + '/' + params.id + '/' + params['0']);
    }
}
