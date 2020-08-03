module.exports = (err, req, res, next) => {
  console.log(e);
  res.status(500).send({ error: err.message });
};
