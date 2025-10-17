const express = require('express');
const axios = require('axios');
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
    console.error('Cat Fact API Error:', error.message);
    res.status(200).json({
      status: 'success',
      user: {
        email: 'bayodeoluwatosin06@gmail.com',
        name: 'Oluwatosin Bayode',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(),
      fact: 'I really hate cats.',
    });
  }
});

module.exports = router;
