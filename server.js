const express = require("express");
const { HBInit } = require("haxball.js");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Haxball Room is running on Render!");
});

// --- Haxball Room Setup ---
const room = HBInit({
  roomName: "⚽ Render Test Room",
  maxPlayers: 12,
  public: true,
  noPlayer: true,
  token: process.env.HAXBALL_TOKEN // ќе го додадеш во Render settings
});

room.onRoomLink = (link) => console.log("Room link:", link);

room.onPlayerJoin = (player) => {
  room.sendChat(`👋 Добредојде, ${player.name}!`);
};

app.listen(port, () => console.log(`Server running on port ${port}`));
