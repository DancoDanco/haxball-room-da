const express = require("express");
const { HBInit } = require("haxball.js"); // од GitHub headless API
const app = express();
const port = process.env.PORT || 3000;

// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Haxball Room is running on Render!");
});

// --- Haxball Room Setup ---
const room = HBInit({
  roomName: "⚽ Render Test Room",
  maxPlayers: 12,
  public: true,
  noPlayer: true,
  token: process.env.HAXBALL_TOKEN
});

// Log the room link
room.onRoomLink = (link) => console.log("Room link:", link);

// Welcome message for players
room.onPlayerJoin = (player) => room.sendChat(`👋 Добредојде, ${player.name}!`);

// Start Express server
app.listen(port, () => console.log(`Server running on port ${port}`));
