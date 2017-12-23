var express = require('express');
var app = express();
var porta = 3000;

// Ficheiros estaticos
app.use(express.static('public'));

// Usar PUG
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Alberta'
    })
});

app.listen(porta, () => {
    console.log('Alberta a funcionar em localhost:', porta)
})