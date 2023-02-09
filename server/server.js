const fastify = require("fastify")({ logger: true });

//Routes
const waitersRoute = require("./routes/waiters.routes")
const cooksRoute = require("./routes/cooks.routes")

require("./utils/mongoose")

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.route(waitersRoute);
fastify.route(cooksRoute);

const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
