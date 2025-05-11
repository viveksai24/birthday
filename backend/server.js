const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const birthday = new Date("2002-10-24T13:02:24+05:30"); // YYYY-MM-DDTHH:mm:ss+HH:mm
const birthYear = 2002;

app.get("/api/birthday", (req, res) => {
    const now = new Date();
    let nextBirthday = new Date(birthday);
    nextBirthday.setFullYear(now.getFullYear());
    if (now > nextBirthday) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    const age = nextBirthday.getFullYear() - birthYear;

    const diff = nextBirthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    res.json({
        countdown: `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`,
        age
    });
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));