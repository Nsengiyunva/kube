const express = require('express');

const app = express();
const PORT = process.env.PORT || 9001;

app.get('/', (req, res) => {
  res.json({
    message: 'Node.js Docker App Running 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});