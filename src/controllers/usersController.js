const getAllUser = (req, res) => {
  const data = {
    id: "1",
    name: "abdurrahman",
    email: "abdurr@gmail.com",
    adrress: "kampar",
  };
  res.json({
    message: "Berhasil Mengambil Data User",
    data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Berhasil Menambahkan Data Baru",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  res.json({
    message: "Berhasil Memperbaharui data User",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Berhasil Menghapus data User",
    data: {
      id: id,
      name: "abd",
      email: "abd@mail.com",
      address: "kampar",
    },
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
