const Waiters = require("./models/waiters.model");
const Cooks = require("./models/cooks.model");

const getWaiters = async (request, reply) => {
  const waiters = await Waiters.find();
  return waiters;
};

const getCooks = async (request, reply) => {
  const cooks = await Cooks.find();
  return cooks
}

module.exports = {
  getWaiters,
  getCooks
};
