const userRouter = require("express").Router();
const { getUsers, addUser } = require("../service/user-service");

userRouter.get("/login", (req, res) => {});

userRouter.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});
userRouter.post("/signup", async (req, res) => {
  const newUserData = req.body;
  const result = await addUser(newUserData);
  res.json(result);
});
userRouter.post("/adduser");

module.exports = userRouter;
