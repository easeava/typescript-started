# typescript-started

```
  "scripts": {
    "build": "yarn clean && babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored --source-maps inline",
    "dev": "yarn start:dev",
    "start": "yarn build && node dist/bin/server.js",
    "start:dev": "ts-node-dev -r tsconfig-paths/register --files --respawn --ignore-watch node_modules ./src/index.ts",
    "clean": "rimraf dist",
    "lint": "eslint . --ext .ts,.js",
    "lint:fix": "yarn lint --fix",
    "format": "prettier --write --loglevel silent \"./src/**/*.{json,js,ts}\"",
    "test": "jest",
    "prepare": "husky install"
  },
```
