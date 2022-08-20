const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

fastify.get("/suggestions", async (req, res) => {
  const q = req.query.q;
  const families = await getFamilies();
  const result = {};
  for (let key in families) {
    if (key.toLowerCase().includes(q.toLowerCase()))
      result[key] = families[key];
  }
  return result;
});

const getFamilies = () => {
  return new Promise((resolve, reject) => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        res
          .json()
          .then((data) => {
            const result = { ...data.message };
            for (let key in data.message) {
              result[key] = { 0: key.charAt(0).toUpperCase() + key.slice(1) };
            }
            resolve(result);
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

const start = async () => {
  try {
    await fastify.register(cors, {
      origin: true,
    });
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
