module.exports = {
  // Modifies the Material-UI IconButton's root class styling
  iconButton: theme => ({
    iconButton: {
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
    },
  }),
};
