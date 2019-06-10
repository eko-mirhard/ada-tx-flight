/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import BigInt from 'big-integer';
import App from '../presentational/App';
import Legend from '../presentational/Legend';
import {
  transactionSizes,
  webSocketUrl,
  apiId,
  projectName,
} from '../../util/constants';

const {
  MICRO,
  TINY,
  SMALL,
  MEDIUM,
  LARGE,
  COLOSSAL,
} = transactionSizes;

const backendUrl = `${webSocketUrl}/${projectName}/${apiId}/cardano`;

class AppContainer extends React.Component {
  state = {
    queue: [],
    transactions: [],
    planes: [],
    showLegend: false,
  };

  componentDidMount = () => {
    this.connectToBackend();
    this.scheduleQueue();
  }

  connectToBackend = () => {
    const ws = new WebSocket(backendUrl);

    ws.onopen = () => {
      // Send a message to subscribe to the transactionCreated event
      console.log('Connected to Server');
      ws.send('sub transactionCreated');
    };

    ws.onmessage = (message) => {
      const {
        event,
        data,
      } = JSON.parse(message.data);

      // Only process the 'transactionCreated' event
      if (event === 'transactionCreated') {
        this.onNewTransaction(data);
      }
    };

    ws.onclose = () => {
      // Automatically try to reconnect on connection loss every 3 seconds
      console.log('Disconnected from Server');
      setTimeout(this.connectToBackend, 3000);
    };

    ws.onerror = (err) => {
      console.log(`Connection error: ${err}`);
    };
  }

  scheduleQueue = () => setTimeout(this.processQueue, 500);

  // Process incoming transactions and slowly spawn planes one-by-one
  processQueue = () => {
    const {
      queue,
      planes,
      transactions,
    } = this.state;

    if (queue.length === 0) {
      this.scheduleQueue();
      return;
    }

    // Process the first in-queue item
    const [{
      plane: newPlane,
      transaction: newTransaction,
    }] = queue;

    newPlane.index = transactions.length;

    planes.unshift(newPlane);
    transactions.unshift(newTransaction);

    this.setState({
      transactions,
      planes,
    });

    // Remove from queue
    queue.shift();

    // Cleanup the plane sprite after animated
    setTimeout(() => {
      const { planes: planeList } = this.state;
      planeList.pop();
      this.setState({ planes: planeList });
    }, 6000);

    // Reschedule the queue processing
    this.scheduleQueue();
  }

  toggleLegend = () => {
    const { showLegend } = this.state;
    this.setState({ showLegend: !showLegend });
  }

  onNewTransaction = (transaction) => {
    const { queue } = this.state;

    const { outputs_amount } = transaction;

    let type;
    let totalAmount = BigInt(0);

    outputs_amount.forEach((amount) => {
      totalAmount = totalAmount.add(BigInt(amount));
    });

    const {
      quotient,
      remainder,
    } = totalAmount.divmod(1000000);
    const formattedAmount = `${`${quotient}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${remainder} ADA`;

    if (totalAmount.compare(BigInt(MICRO.maxAmount).multiply(1000000)) <= 0) {
      type = MICRO.assetIndex;
    } else if (totalAmount.compare(BigInt(TINY.maxAmount).multiply(1000000)) <= 0) {
      type = TINY.assetIndex;
    } else if (totalAmount.compare(BigInt(SMALL.maxAmount).multiply(1000000)) <= 0) {
      type = SMALL.assetIndex;
    } else if (totalAmount.compare(BigInt(MEDIUM.maxAmount).multiply(1000000)) <= 0) {
      type = MEDIUM.assetIndex;
    } else if (totalAmount.compare(BigInt(LARGE.maxAmount).multiply(1000000)) <= 0) {
      type = LARGE.assetIndex;
    } else {
      type = COLOSSAL.assetIndex;
    }

    const newPlane = {
      type,
      amount: formattedAmount,
    };

    const newTransaction = {
      ...transaction,
      ...newPlane,
    };

    queue.push({
      plane: newPlane,
      transaction: newTransaction,
    });
  };

  render = () => (
    <Fragment>
      <App
        transactions={this.state.transactions}
        planes={this.state.planes}
        onNewTransaction={this.onNewTransaction}
        toggleLegend={this.toggleLegend}
      />
      { this.state.showLegend && <Legend close={this.toggleLegend} /> }
    </Fragment>
  );
}

export default AppContainer;
