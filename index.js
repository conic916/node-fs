var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./chatton.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

// odczyt i zapis pliku modulu fs
var fs = require('fs');
var colors = require('colors');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.green);
    console.log(data);
    fs.appendFile('./text.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.rainbow)
            console.log(data);
        });
    });
});