const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    }));
    if (results.includes(undefined)) throw new ExpressError("Not found!", 404);
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } catch (err) {
    return next(err);
  }
});

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message;

  return res.status(status).json({
    error: {message, status}
  });
});
app.listen(3000);
