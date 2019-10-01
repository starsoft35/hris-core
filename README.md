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
![](https://lh3.googleusercontent.com/N1Jjje-4F68QY-n8DCII9MbC4dr9usDtpZf1SWA1WTa7n8SXocUfWlt3q9ZLJJVpTEOdStkNtXnQzFVQC8SLgzxF8TSuj6xIutIcHCkBD8mYg9iotSi__nMDSOzbhynFumy0ZlA6cgXxeqGjvzOJgAf8QL8SvCMUTSUvodQknq5-27-FZIYVXnSV-yvRLsyUD81__2AKZHT_KXOUOa5pzsYuA8UregUQGT5L9D9y8VDX3S2TeQzt6qv2KX4cMHcURIamrpsRxOXahVXb_KLBuZojCB0o_tWpEWQHE9TZyJJw6Sy3ocDZY5Rlkmghy3BTmAm39CkGemf5M7ZPZXeipLXWp2Xf-uzPL5saP7Q3LncBCncwttL8p0GKeWIdT7EbWy0sezDoDjw68kv8_sqgw6gljxYpLLftZ_CKBZ0vCXttTquc-7VjHzPUQEg2Oq5uspCFgGzO73S01l055e_2j68xmjJWLje9s9wSVYsqcaj2DxFAbzqVmVFHXHFCMA2bzg8eqyG9teHdu6bsx2LPWv2g6JjzYRdI_P7Ttk6k9td5DEFyC6iAdx0d7xh2APjxHTsFcDJeLSPAcQ4Jmp6SYvxM2MWZYbNkPqEle_k2idmtGC03qyXXRHHKaQ=w1853-h949)

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
![](https://lh3.googleusercontent.com/N1Jjje-4F68QY-n8DCII9MbC4dr9usDtpZf1SWA1WTa7n8SXocUfWlt3q9ZLJJVpTEOdStkNtXnQzFVQC8SLgzxF8TSuj6xIutIcHCkBD8mYg9iotSi__nMDSOzbhynFumy0ZlA6cgXxeqGjvzOJgAf8QL8SvCMUTSUvodQknq5-27-FZIYVXnSV-yvRLsyUD81__2AKZHT_KXOUOa5pzsYuA8UregUQGT5L9D9y8VDX3S2TeQzt6qv2KX4cMHcURIamrpsRxOXahVXb_KLBuZojCB0o_tWpEWQHE9TZyJJw6Sy3ocDZY5Rlkmghy3BTmAm39CkGemf5M7ZPZXeipLXWp2Xf-uzPL5saP7Q3LncBCncwttL8p0GKeWIdT7EbWy0sezDoDjw68kv8_sqgw6gljxYpLLftZ_CKBZ0vCXttTquc-7VjHzPUQEg2Oq5uspCFgGzO73S01l055e_2j68xmjJWLje9s9wSVYsqcaj2DxFAbzqVmVFHXHFCMA2bzg8eqyG9teHdu6bsx2LPWv2g6JjzYRdI_P7Ttk6k9td5DEFyC6iAdx0d7xh2APjxHTsFcDJeLSPAcQ4Jmp6SYvxM2MWZYbNkPqEle_k2idmtGC03qyXXRHHKaQ=w1853-h949)

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
* [User Module](https://github.com/hisptz/hris-restful-api/v1/blob/master/docs/USER_MODULE.md)
* [Dashboard Module](https://github.com/hisptz/hris-restful-api/v1/blob/master/docs/USER_MODULE.md)
* [Maintenance Module](https://github.com/hisptz/hris-restful-api/v1/blob/master/docs/USER_MODULE.md)


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


