const names = require('./names');
// const os = require('os');
// const path = require('path');
// const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
// const fs = require('fs');

// const greetings = ", Welcome to the Arsenal where your email is "
// console.log(names.username + greetings.concat(names.email));

// console.log(os.uptime() + " " + os.userInfo().username);
// console.log(path.basename(__filename, 'content', 'javascriptRefresher', 'names.js'))
// const first = readFileSync('./first.txt', 'utf8');
// const second = writeFileSync('./handle.txt', 'Here is the new file' + {first});
// console.log(second);

    // const file = fs.unlink("./third.txt", (error, result)=>{
    //     error? console.log(error) : console.log('Deleted!');
    // })
    // console.log(file); 

    var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
// var q = url.parse(adr, true);

console.log(url.parse(adr, true))

