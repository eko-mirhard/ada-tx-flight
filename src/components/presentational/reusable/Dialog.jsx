import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import {
  dialogContent,
  dialogActions,
} from '../../../styles/js/reusable/dialog';

export default class ReusableDialog extends PureComponent {
  static propTypes = {
    maxWidth: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  }

  static defaultProps = {
    maxWidth: 'sm',
  }

  static Title = ({ children }) => (
    <DialogTitle>
      { children }
    </DialogTitle>
  )

  static Content = ({ children }) => (
    <DialogContent style={dialogContent}>
      <Grid container spacing={32}>
        {
          React.Children.map(children, child => (
            <Grid item xs={12} key={`dialog-content-child-${child.props.id}`}>
              { child }
            </Grid>
          ))
        }
      </Grid>
    </DialogContent>
  )

  static Actions = ({ children }) => (
    <DialogActions style={dialogActions}>
      { children }
    </DialogActions>
  )

  static CancelAction = ({ text, onClick, dataTestId }) => (
    <Button onClick={onClick} data-testid={dataTestId}>{text}</Button>
  )

  static ConfirmAction = ({ text, onClick, dataTestId }) => (
    <Button onClick={onClick} data-testid={dataTestId} color="primary">{text}</Button>
  )

  render = () => (
    <Dialog open fullWidth maxWidth={this.props.maxWidth} style={{ opacity: 0.7 }}>
      { this.props.children }
    </Dialog>
  )
}
