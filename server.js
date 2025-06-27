const express = require('express');
const app = express();
app.use(express.json());

app.post('/calculator/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = b !== 0 ? a / b : 'Error: Division by zero';
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(3000, () => console.log('Calculator API running on http://localhost:3000'));
