## Introduction

A sample project showcasing the WebSocket service from [`soshen.io`](https://soshen.io) to listen to latest transactions in the Cardano mainnet.

Each incoming transactions are rendered as airplanes flying across the screen, with the transaction size/amount determines the airplane model (ie. larger transactions are rendered with bigger or more modern model).

TODO: Optimize rendering for mobile browsers. Don't open this on your phone, yet!

## How to run

- Run `npm install` to setup dependencies.
- Go to `src/util/constants.js`, and replace the `apiId` and `projectName` to your own project API credentials (you can view it in the main dashboard on [`dashboard.soshen.io`](http://dashboard.soshen.io)).
- In the project root, run `npm start` to start the app in `debug` mode.
