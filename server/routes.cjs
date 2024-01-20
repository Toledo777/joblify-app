const express = require("express");
const router = express.Router()
const run = require("./chatbot.cjs");

router.get("/test", async (req, res) => {
    res.send("test api working");
});

// fixed by gpt
router.get("/chatting", async (req, res) => {
    try {
        let response = await run({
            messages: [
              {
                role: "system",
                content: "You are a friendly assistant that helps write stories",
              },
              {
                role: "user",
                content:
                  "Write a short story about a llama that goes on a journey to find an orange cloud",
              },
            ],
        });
        let temp = JSON.stringify(response);
        console.log(temp);
        res.send(temp);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


module.exports = router;