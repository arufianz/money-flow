const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

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

app.listen(port, () => {
  console.log(`Money App listening on port ${port}`)
})