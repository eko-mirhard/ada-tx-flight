import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { iconButton } from '../../../styles/js/reusable/icon-button';

const ReusableIconButton = React.memo(({
  title,
  onClick,
  icon,
  classes,
}) => (
  <Tooltip title={title}>
    <IconButton classes={{ root: classes.iconButton }} onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
));

ReusableIconButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element.isRequired,
  classes: PropTypes.shape({
    iconButton: PropTypes.string.isRequired,
  }).isRequired,
};

ReusableIconButton.defaultProps = {
  onClick: null,
};

export default withStyles(iconButton)(ReusableIconButton);
