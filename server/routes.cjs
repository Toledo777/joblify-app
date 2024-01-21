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
                content: "You are a friendly assistant for helping people level up their job skills and may look to increase it. They have been provided a numerical score for their skills. Here is their resume, make some references to it if you can: Experience Web Developer Intern, Consultation SOS – Montreal, QC ● Developedandmaintainedafull-stackanimalshelterwebsiteusingJavaScriptandPHP,resultingin streamlined adoption processes and the introduction of a weekly system backup for safeguarding ● DecreasedCPUusagebyreducingbandwidthconsumptionby20%,accomplishedthroughimagecompression, query optimization using MySQL and the removal of redundant themes/plugins ● Improvedonlinevisibilitythrougha40%increaseinwebsitetraffic,achievedbyimplementingSEObest practices like file refactoring and keyword optimization Merchandising Store Associate, Walmart – Montreal, QC Jul. 2021 - Present ● Providedexceptionalcustomerserviceanddemonstratedeffectivenessinteamcollaboration Projects Inventory Management System ● Ledateamof5studentstodevelopane-commerceplatformforalocalbusiness,enablingthemtoefficiently manage orders and showcase products online ● AppliedAgileMethodologyandestablishedconsistentweeklyclientmeetingstoensureeffectiveproject management and communication ● Designedthefront-endutilizingJavaScriptandBootstrap,employedPHPandMySQLfortheback-end,and deployed using Apache Web Server Video Sharing API ● DevelopedanAPI,enablingregistereduserstoupload,searchandwatchvideosusingPHPandMySQL ● UtilizedPostmantobuildandtesttheAPIandimplementedvideostorageonAmazonS3 ● DevelopedclientauthenticationthroughJWTtokenintegration Smart Home System ● DesignedandsimulatedasmarthomeusingPython,aRaspberryPi,ArduinoandNodeMCU ● CreatedanIoTdashboardforsystemcontrolandmonitoring,utilizingNode-RedandMosquitto Android Music Player ● DevelopedanAndroidmusicplayerapplicationwithachattingsystemusingJava ● UtilizedFirebaseforsongmanagementandimplementedaloginandregisterfeaturewithFirebaseAuth. They are also pursing a bachelor in Computer Science",
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