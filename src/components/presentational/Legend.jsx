import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Dialog from './reusable/Dialog';
import {
  transactionSizes,
  planeSprites,
} from '../../util/constants';
import {
  mainContainer,
  subContainer,
  planeIcon,
  planeCaption,
} from '../../styles/js/legend';
import { formatAmount } from '../../util/helpers';

const getRange = (min, max) => `${formatAmount(min)} ${max < 0 ? '+' : `- ${formatAmount(max)}`}`;

const {
  MICRO,
  TINY,
  SMALL,
  MEDIUM,
  LARGE,
  COLOSSAL,
} = transactionSizes;

const planeLegendTop = [{
  sprite: planeSprites[MICRO.assetIndex],
  label: MICRO.label,
  range: getRange(MICRO.minAmount, MICRO.maxAmount),
}, {
  sprite: planeSprites[TINY.assetIndex],
  label: TINY.label,
  range: getRange(TINY.minAmount, TINY.maxAmount),
}, {
  sprite: planeSprites[SMALL.assetIndex],
  label: SMALL.label,
  range: getRange(SMALL.minAmount, SMALL.maxAmount),
}];

const planeLegendBottom = [{
  sprite: planeSprites[MEDIUM.assetIndex],
  label: MEDIUM.label,
  range: getRange(MEDIUM.minAmount, MEDIUM.maxAmount),
}, {
  sprite: planeSprites[LARGE.assetIndex],
  label: LARGE.label,
  range: getRange(LARGE.minAmount, LARGE.maxAmount),
}, {
  sprite: planeSprites[COLOSSAL.assetIndex],
  label: COLOSSAL.label,
  range: getRange(COLOSSAL.minAmount, COLOSSAL.maxAmount),
}];

const LegendDialog = React.memo(({
  close,
}) => (
  <Dialog>
    <Dialog.Title>LEGEND</Dialog.Title>
    <Dialog.Content>
      <Grid container spacing={40} style={mainContainer}>
        <Grid container item xs={12} spacing={24} style={subContainer}>
          {planeLegendTop.map(plane => (
            <Grid
              key={plane.label}
              container
              item
              xs={4}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <img src={plane.sprite} alt={plane.label} style={planeIcon} />
              </Grid>
              <Grid item style={planeCaption}>
                {plane.range}
                <br />
                ADA
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} spacing={24} style={subContainer}>
          {planeLegendBottom.map(plane => (
            <Grid
              key={plane.label}
              container
              item
              xs={4}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <img src={plane.sprite} alt={plane.label} style={planeIcon} />
              </Grid>
              <Grid item style={planeCaption}>
                {plane.range}
                <br />
                ADA
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Dialog.Content>
    <Dialog.Actions>
      <Dialog.CancelAction text="Close" onClick={close} />
    </Dialog.Actions>
  </Dialog>
));

LegendDialog.propTypes = {
  close: PropTypes.func.isRequired,
};

export default LegendDialog;
