const staffControllers = require("../controller.js")

const route = {
  url: "/GetCooks",
  method: "GET",
  handler: staffControllers.getCooks
}

module.exports = route;
