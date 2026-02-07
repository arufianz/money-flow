const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/add", (req, res) => {
  const { item } = req.body;

  console.log("Dari client:", item);

  res.json({
    success: true,
    data: item
  });
});

app.listen(PORT, () => {
  console.log(`Money App listening on port ${PORT}`)
})