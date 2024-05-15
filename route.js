const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
    res.status(200).json('Muhammad Owais Khan\nLab 12 SDA');
});
module.exports = router;