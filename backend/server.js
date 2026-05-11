const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9001;

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Node.js Docker App Running 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});