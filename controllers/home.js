exports.index = function (req, res) {
    // res.send('Welcome to the GDI Node Workshop!');
    res.render('index');
};

exports.about = function (req, res) {
    // var path = require('path');
    // res.sendFile(path.join(__dirname, '../public', 'templates', 'index.html'));
    // res.sendFile(path.join(__dirname, '../public', 'css', 'styles.css'));
    res.render('about');
};

exports.error404 = function (req, res) {
    // res.send('<h1> Error! 404! </h1>');
    res.render('404');
};
