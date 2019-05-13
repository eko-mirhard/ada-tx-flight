const formatAmount = amount => `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

module.exports = {
  formatAmount,
};
