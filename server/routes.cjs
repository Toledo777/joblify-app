const express = require("express");
const router = express.Router()
const run = require("./chatbot.cjs");

router.get("/test", async (req, res) => {
    res.send("test api working");
});

// fixed by gpt
router.get("/chatting/:userContent", async (req, res) => {
    try {
        let userContent = req.params.userContent;
        let response = await run({
            messages: [
              {
                role: "system",
                content: "You are a friendly assistant that helps write stories",
              },
              {
                role: "user",
                content: userContent,
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