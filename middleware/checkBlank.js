function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const checkBlank = (req, res, next) => {
  if (isEmpty(req.body) && isEmpty(req.query)) {
    res.status(404).send("비어있는 값을 입력하셨습니다.");
    return;
  }
  next();
};
