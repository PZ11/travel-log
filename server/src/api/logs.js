const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = new Router();

router.get('/', async (req, res) => {
  const entris = await LogEntry.find();
  res.json(entris);
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    // console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});


module.exports = router;
