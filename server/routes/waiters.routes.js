const staffControllers = require("../controller.js")

const route = {
  url: "/GetWaiters",
  method: "GET",
  handler: staffControllers.getWaiters
}

module.exports = route;
