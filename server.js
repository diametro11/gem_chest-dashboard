const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Punktelogik (falls noch gebraucht)
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

// URL vom Bot oder Datenquelle, die du abrufen willst
const DATA_URL = 'https://dein-bot-server/api/chestdata'; // Hier URL anpassen

app.use(express.static('public'));

// Route /data gibt Daten vom Bot dynamisch zurück
app.get('/data', async (req, res) => {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`Fehler beim Laden: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    res.status(500).json({ error: 'Daten konnten nicht geladen werden' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
