const router = require('express').Router();

router.get('/signin', (req, res) => {
    res.render('signin')
})

router.get('/form/home', (req, res) => {
    res.render('home');
})

module.exports = router;