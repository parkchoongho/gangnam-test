function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const checkBlank = (req, res, next) => {
  if (isEmpty(req.body) && isEmpty(req.query)) {
    res.status(404).end();
  }
  next();
};
