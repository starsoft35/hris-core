# Human Resource Information System v4 API
### A software for collection, collation, storage of Human resource for health Information.

[![Build Status](https://travis-ci.org/hisptz/hris-restful-api-v4.svg?branch=master)](https://travis-ci.org/hisptz/hris-restful-api-v4)
[![Greenkeeper badge](https://badges.greenkeeper.io/hisptz/hris-restful-api-v4.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/43300df82d8d93167ff1/maintainability)](https://codeclimate.com/github/hisptz/hris-restful-api-v4/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/43300df82d8d93167ff1/test_coverage)](https://codeclimate.com/github/hisptz/hris-restful-api-v4/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

## Introduction

The Ministry of Health and Social Welfare (MOHSW) has initiated development of Human Resource for Health Information System([HRHIS](http://hrhis.moh.go.tz/login)) with the essence of establishing a national database, to address and strengthen existing information system through coordinating and networking of existing human resource data collection systems. MoHSW consulted a team of experts from Department of Computer Science and Engineering([CoICT](https://www.coict.udsm.ac.tz/)) of [University of Dar es Salaam(UDSM)](https://www.udsm.ac.tz/), to take the responsibility of developing, implementing and maintaining [HRHIS](http://hrhis.moh.go.tz/login) system in Tanzania Mainland. As for any big system development the process is not an overnight thing. [HRHIS](http://hrhis.moh.go.tz/login) is evolving, though with a remarkable speed, the inputs of stakeholders are all‐time required. 

## Installation

Export the folder with hris configurations

```bash
$ export HRIS_HOME=/opt/hris
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Further help

- Website - [https://nestjs.com](https://nestjs.com/)
