# Human Resource Information System v4 API
### A software for collection, collation, storage of Human resource for health Information.

[![CircleCI](https://circleci.com/gh/hisptz/hris-restful-api-v1.svg?style=svg)](https://circleci.com/gh/hisptz/hris-restful-api-v1)
[![Build Status](https://travis-ci.org/hisptz/hris-restful-api-v1.svg?branch=master)](https://travis-ci.org/hisptz/hris-restful-api-v1)
[![Maintainability](https://api.codeclimate.com/v1/badges/43300df82d8d93167ff1/maintainability)](https://codeclimate.com/github/hisptz/hris-restful-api-v4/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/43300df82d8d93167ff1/test_coverage)](https://codeclimate.com/github/hisptz/hris-restful-api-v4/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
![GitHub](https://img.shields.io/github/license/hisptz/hris-restful-api-v1?color=%234CB80A&label=licence&logoColor=%23ffffff)

## Introduction

The Ministry of Health and Social Welfare (MOHSW) has initiated development of Human Resource for Health Information System([HRHIS](http://hrhis.moh.go.tz/login)) with the essence of establishing a national database, to address and strengthen existing information system through coordinating and networking of existing human resource data collection systems. MoHSW consulted a team of experts from Department of Computer Science and Engineering([CoICT](https://www.coict.udsm.ac.tz/)) of [University of Dar es Salaam(UDSM)](https://www.udsm.ac.tz/), to take the responsibility of developing, implementing and maintaining [HRHIS](http://hrhis.moh.go.tz/login) system in Tanzania Mainland. As for any big system development the process is not an overnight thing. [HRHIS](http://hrhis.moh.go.tz/login) is evolving, though with a remarkable speed, the inputs of stakeholders are all‐time required. 

## Table of Contents
* [About the Project](#about-the-project)
  * [Technologies](#built-with)
  * [Architecture](#architecture)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project
[HRHIS](http://hrhis.moh.go.tz/login) Restful API is API that will expose all data and metadata for development of HRIS system software for collection, collation, storage of Human resource for health Information.


### Technologies
[HRHIS](http://hrhis.moh.go.tz/login) Restful API was developed ontop of the following technologies
* Framework - [NestJS](https://nestjs.com/)
* ORM - [Typeorm](https://typeorm.io/#/)
* DATABASE - [PostgresSQL Database](https://www.postgresql.org/)

### Architecture
![](https://lh3.googleusercontent.com/vP2vpXmIm_KknRIiEDrsluLPkEeJbERqKrAgI-KIcx2l2eI2bwRrt-wgbidC9CRPWdu9MSQTbxipBqjLq_o4LNcowjKHXwVFgTcBg4jkSzXmdo_Y1r99Tg51FfcaJzYfm_3e-c1i1RcEsP0GnMCdfApcTvPoY1P1v5sS3E1BzuHotJRsz_1yNn2uE9yc9mclfluAcQutz3UkqDWlBUWY4dqFee684-2tg6xxu8yPuYBzADGcf2br-2yoWNUfeXjCOC-aB9Ry8NxKukuOl2bZS8xo0m49L28a3FSC9NpnnT_aPh1SJkyjM-JkQTnQDJsNct0eHtzS8TKCwmBP39v5TjF17RodOsyOioJj2o9rBJJf-35E1j5z3UoxIED_g9qsQgVGlTA6MYl1tbvTQGqDHRGfhEE4WT6uv858QSAgL1M7V0Sqs_osx7u9RIYFeMmc-lcr-81u7j0gfzeNlRqpSoMF9E1bYV2GLV7zXfgSKsgONlhoLXuN-b_PxDTrww-V9NN0DyslWEOQEUcgIHRvfcrXXnTR30ih-r_E5zeHJMBUf5tee9wRiDWQ2cA84e4pJ30pYX9G12U58iGNaMX-zdokDoWku3LxiHMtxw8gUJUIOypyaNMzKjd0bg=w1853-h949)


## Getting Started
### Prerequisites

### Installation
To setup the environment for the [HRHIS](http://hrhis.moh.go.tz/login) Restful API export the folder with [HRHIS](http://hrhis.moh.go.tz/login) configurations withing the server environment where the API is going to be installed, then run the following commands
```bash
1. export HRIS_HOME=/opt/hris
2. npm install
3. npm run start
```

#### Development and Production Environment
```bash
#Development MODE
npm run start:dev

#Production MODE
npm run start:prod
```

#### Running Test
```bash
# Runnung Tests
$ npm run test

# End To End Test(e2e Test)
$ npm run test:e2e

# Test Coverage
$ npm run test:cov
```

## Usage
* **`USER`**
    * [**`User Module`**](https://github.com/hisptz/hris-restful-api-v1/blob/master/documents/USERMODULE.md)
    * [**`User Group Module`**](https://github.com/hisptz/hris-restful-api-v1/blob/master/documents/USERGROUPMODULE.md)
    * [**`User Role Module`**](https://github.com/hisptz/hris-restful-api-v1/blob/master/documents/USERROLEMODULE.md)
    * [**`User Authority Module`**](https://github.com/hisptz/hris-restful-api-v1/blob/master/documents/USERAUTHORITYMODULE.md)
    * [**`Updating Entities Normal Properties and Relationships`**](https://github.com/hisptz/hris-restful-api-v1/blob/master/documents/UPDATEENTITYMODULE.md)


## Roadmap
See the [open issues](https://github.com/hisptz/hris-restful-api-v1/issues) for a list of proposed features (and known issues).

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the LGPL-3.0 License. See `LICENSE` for more information.

![GitHub](https://img.shields.io/github/license/hisptz/hris-restful-api-v1?style=for-the-badge)

## Contact
Project Link: [https://github.com/hisptz/hris-restful-api-v1/projects/1](https://github.com/hisptz/hris-restful-api-v1/projects/1)

## Acknowledgements
* [NestJS Development Team](https://nestjs.com/)
* [TypeORM Development Team](https://typeorm.io/#/)
* [PostgresSQL Development Team](https://www.postgresql.org/)


