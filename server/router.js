const express = require('express');
const redact = require('./redact');

const errorObj = Object.freeze({
  statusText: 'failure',
  message: 'You must enter a list of words or phrases to redact.',
});

const router = express.Router();

router.use((request, response, next) => {
  setTimeout(next, 500);
});

router.get('/', (_, response) => {
  response.json({ statusText: 'success' });
});

router.post('/', (request, response) => {
  const { file, body } = request;

  if (!file) {
    return response.status(400).json(errorObj);
  }
  if (!body.banText) {
    return response.status(400).json(errorObj);
  }

  const censoredDocument = redact(body.banText, file.path);

  response.json({ statusText: 'success', document: censoredDocument });
});

module.exports = router;
