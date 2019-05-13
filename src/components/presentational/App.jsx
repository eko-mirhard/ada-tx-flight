/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  CssBaseline,
  IconButton,
  Paper,
  Drawer,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import {
  ListSharp,
  InfoSharp,
} from '@material-ui/icons';
import { Tween } from 'react-gsap';
import {
  mainContainer,
  spriteStyles,
  buttonPanel,
  drawer,
  list,
  listTitle,
  listTitleContainer,
  listItem,
  listItemText,
  listItemAvatar,
  listItemPrimaryText,
} from '../../styles/js/app';
import {
  explorerUrl,
  startingPoints,
  endingPoints,
  planeSprites,
} from '../../util/constants';

const PlaneTween = ({ type, index }) => (
  <Tween
    from={startingPoints[index % 3]}
    to={endingPoints[index % 3]}
    duration={5}
    ease="Linear.easeNone"
  >
    <div style={spriteStyles[index % 3]}>
      <img src={planeSprites[type]} alt={`plane-${type}`} />
    </div>
  </Tween>
);

PlaneTween.propTypes = {
  type: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength - 3)}...`;
};

const renderPlane = planes => (
  planes.map((row) => {
    const {
      index,
      type,
    } = row;

    return (
      <PlaneTween
        type={type}
        index={index}
        key={index}
      />
    );
  })
);

const displayTransactionList = transactions => (
  transactions.map((row) => {
    const {
      hash,
      type,
      amount,
    } = row;

    return (
      <ListItem
        button
        component="a"
        href={`${explorerUrl}${hash}`}
        target="_blank"
        key={hash}
        divider
        style={listItem}
      >
        <ListItemAvatar>
          <Avatar
            src={planeSprites[type]}
            alt={`plane-${type}`}
            style={listItemAvatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary={(
            <Typography
              variant="subtitle1"
              style={listItemPrimaryText}
            >
              {truncateText(hash, 20)}
            </Typography>
          )}
          secondary={(
            <Typography>
              {amount}
            </Typography>
          )}
          style={listItemText}
        />
      </ListItem>
    );
  })
);

class App extends React.Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    planes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    toggleLegend: PropTypes.func.isRequired,
  };

  state = {
    showListPanel: true,
  };

  toggleListPanel = () => {
    const { showListPanel } = this.state;
    this.setState({ showListPanel: !showListPanel });
  }

  render = () => (
    <Fragment>
      <CssBaseline />
      <Grid
        container
        style={mainContainer}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Paper style={buttonPanel}>
          <IconButton
            onClick={this.toggleListPanel}
            color="inherit"
            size="large"
            style={{ margin: 8 }}
          >
            <ListSharp style={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            onClick={this.props.toggleLegend}
            color="inherit"
            size="large"
            style={{ margin: 8 }}
          >
            <InfoSharp style={{ fontSize: 40 }} />
          </IconButton>
        </Paper>
        {renderPlane(this.props.planes)}
      </Grid>
      <Drawer
        variant="persistent"
        anchor="right"
        open={this.state.showListPanel}
        style={drawer}
      >
        <div style={listTitleContainer}>
          <Typography
            variant="subtitle1"
            style={listTitle}
          >
            RECENT TRANSACTIONS
          </Typography>
        </div>
        <List component="nav" style={list}>
          {displayTransactionList(this.props.transactions)}
        </List>
      </Drawer>
    </Fragment>
  )
}

export default App;
