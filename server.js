const express = require('express');

const Accounts = require('./data/accountsDb.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const accounts = await Accounts.get();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server didn't work =(" });
  }
});

server.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const account = await Accounts.getById(id);
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server didn't work =(" });
  }
});

server.post('/', async (req, res) => {
  try {
    const newAccount = req.body;
    const accountAdded = await Accounts.insert(newAccount);

    res.status(200).json(accountAdded);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server didn't work =(" });
  }
});

server.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const accountDeleted = await Accounts.remove(id);

    res.status(200).json(accountDeleted);
  } catch (err) {
    console.log("Server didn't like it.");
    res.status(500).json(err);
  }
});

server.put('/:id', async (req, res) => {
  try {
    const updateId = req.params.id;
    const accountChange = await req.body;
console.log(accountChange, "Account change")
    const updatedAccount = await Accounts.crudUpdate(updateId, accountChange);
console.log(updatedAccount,"updated account")
    res.status(200).json(updatedAccount);
  } catch (err) {
    console.log("Server didn't like it.");
    res.status(500).json(err);
  }
});

module.exports = server;
