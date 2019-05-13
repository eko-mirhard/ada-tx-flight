const planeSprite1 = require('../assets/images/planes/plane-1.png');
const planeSprite2 = require('../assets/images/planes/plane-2.png');
const planeSprite3 = require('../assets/images/planes/plane-3.png');
const planeSprite4 = require('../assets/images/planes/plane-4.png');
const planeSprite5 = require('../assets/images/planes/plane-5.png');
const planeSprite6 = require('../assets/images/planes/plane-6.png');

module.exports = {
  apiId: 'YOUR_PROJECT_API_ID',
  projectName: 'YOUR_PROJECT_NAME',
  webSocketUrl: 'wss://nodes.soshen.io',
  explorerUrl: 'https://cardanoexplorer.com/tx/',
  planeSprites: [
    planeSprite1,
    planeSprite2,
    planeSprite3,
    planeSprite4,
    planeSprite5,
    planeSprite6,
  ],
  startingPoints: [{
    x: '-60vw',
    y: '60vh',
  }, {
    x: '-50vw',
    y: '50vh',
  }, {
    x: '-10vw',
    y: '10vh',
  }],
  endingPoints: [{
    x: '1000px',
    y: '-1000px',
  }, {
    x: '1010px',
    y: '-990px',
  }, {
    x: '1200px',
    y: '-1200px',
  }],
  transactionSizes: {
    MICRO: {
      label: 'Micro',
      minAmount: 0,
      maxAmount: 1000,
      assetIndex: 0,
    },
    TINY: {
      label: 'Tiny',
      minAmount: 1001,
      maxAmount: 10000,
      assetIndex: 1,
    },
    SMALL: {
      label: 'Small',
      minAmount: 10001,
      maxAmount: 100000,
      assetIndex: 2,
    },
    MEDIUM: {
      label: 'Medium',
      minAmount: 100001,
      maxAmount: 1000000,
      assetIndex: 3,
    },
    LARGE: {
      label: 'Large',
      minAmount: 1000001,
      maxAmount: 5000000,
      assetIndex: 4,
    },
    COLOSSAL: {
      label: 'Colossal',
      minAmount: 5000000,
      maxAmount: -1,
      assetIndex: 5,
    },
  },
};
