const logRequest = (req, res, next) => {
  //   console.log("Terjadi Request ke PATH:", req.path);
  console.log(`Ada Permintaan Data ke path: ${req.path}`);
  next();
};

module.exports = logRequest;
