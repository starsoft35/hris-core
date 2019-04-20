import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AuthService } from '../../../../src/modules/user/services/auth.service';

describe('Authentication Service (e2e)', () => {
    it('encoding password', () => {
      let service = new AuthService(null);
        expect(
          service.encodePassword(
            'minde2016',
            'g9d9n6o0b74skssgo00gggow4gs8w8w',
          ),
        ).toEqual(
          'oALyvI47kLNwCtxIMuET3u4fJ+TyD15ymCUq9G8+tupyany7qeLuIt0NGcSot73K7hDYgpoXElSWY+njCXoF8Q==',
        );
    });
});
