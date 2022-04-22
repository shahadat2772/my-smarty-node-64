const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Shabana ",
    email: "shabana@gmail.com",
    number: "01788888888",
  },
  {
    id: 2,
    name: "Purnima ",
    email: "purnima@gmail.com",
    number: "01788888888",
  },
  {
    id: 3,
    name: "Shabnoor ",
    email: "shabnoor@gmail.com",
    number: "01788888888",
  },
  {
    id: 4,
    name: "Shuchorita ",
    email: "shuchorita@gmail.com",
    number: "01788888888",
  },
  {
    id: 5,
    name: "Mehrima ",
    email: "mehrima@gmail.com",
    number: "01788888888",
  },
  {
    id: 6,
    name: "Aronno Kanon ",
    email: "aronno Kanon@gmail.com",
    number: "01788888888",
  },
  { id: 7, name: "Kanon", email: "kanon@gmail.com", number: "01788888888" },
];

app.get("/", (req, res) => {
  res.send("Never get sucked ");
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    const searchedText = req.query.name.toLowerCase();
    const searchedUser = users.filter((user) =>
      user.name.toLowerCase().includes(searchedText)
    );
    res.send(searchedUser);
  } else {
    console.log("Query", req.query);
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
