const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Punktelogik hinzufügen
const chestPoints = {
  "Common": {
    "5": 5,
    "10": 10,
    "15": 15,
    "20": 20,
    "25": 25
  },
  "Rare": {
    "10": 20,
    "15": 25,
    "20": 30,
    "25": 35,
    "30": 40
  },
  "Epic": {
    "15": 30,
    "20": 35,
    "25": 40,
    "30": 45,
    "35": 50
  },
  "Arena": {
    "Any": 5
  },
  "Citadel": {
    "Any": 30
  }
};

app.use(express.static('public'));

// Route /data gibt die Daten zurück (z.B. aus data.json)
app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
