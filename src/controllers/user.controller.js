const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAll = async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.status(200).json({
    users: allUsers,
  });
};

module.exports = {
  findAll,
};
