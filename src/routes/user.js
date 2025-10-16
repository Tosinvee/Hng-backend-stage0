const express = require('express');

const { default: axios } = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000,
    });
    const fact = response.data.fact;

    const data = {
      status: 'success',
      user: {
        email: 'bayodeoluwatosin06@gmail.com',
        name: 'Oluwatosin Bayode',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(),
      fact,
    };
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch cat fact' });
  }
});
module.exports = router;
