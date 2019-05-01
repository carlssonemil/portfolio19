# Portfolio

Repository for my [portfolio website](https://emilcarlsson.se) built with [Vue](https://cli.vuejs.org/).

## Build Setup

```bash
# Install dependencies
$ npm install

# Compiles and hot-reloads for development
$ npm run serve

# Compiles and minifies for production
$ npm run build

# Builds and deploys to remote server (.env required)
$ npm run deploy
```

## Deployment

Deployment is handled using [ftp-deploy](https://github.com/simonh1000/ftp-deploy), see [`deploy.js`](https://github.com/carlssonemil/portfolio19/blob/master/deploy.js) for deployment code.

### Deployment Variables

```bash
# .env

FTP_USER = FTP Username
FTP_PASS = FTP Password
FTP_HOST = FTP Host
FTP_PORT = FTP Port
SITE_URL = The website URL (optional)
```

> See [`.env.example`](https://github.com/carlssonemil/portfolio19/blob/master/.env.example) for example.