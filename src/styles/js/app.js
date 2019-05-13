const mainBg = require('../../assets/images/background/main.png');

module.exports = {
  mainContainer: {
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${mainBg})`,
  },
  spriteStyles: [{
    position: 'absolute',
    top: '20vh',
  }, {
    position: 'absolute',
    top: '60vh',
  }, {
    position: 'absolute',
    top: '100vh',
  }],
  buttonPanel: {
    marginLeft: 20,
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 'auto',
    opacity: 0.4,
    borderRadius: 16,
  },
  button: {
    margin: 'auto',
  },
  drawer: {
    opacity: 0.5,
    maxWidth: '20vw',
  },
  list: {
    minWidth: '20vw',
    overflow: 'auto',
  },
  listTitle: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  listTitleContainer: {
    backgroundColor: '#DDDDDD',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  listItemText: {
    textAlign: 'right',
    paddingRight: 0,
  },
  listItemAvatar: {
    borderRadius: 0,
  },
  listItemPrimaryText: {
    fontWeight: 'bold',
  },
};
