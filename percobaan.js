const http = require('http')

http.createServer((req, res) => {
    // console.log('tes nyalain server');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Hello, Nama saya Yusuf Saputra <hr> Saya sedang belajar Node.js`);
}).listen(8000, () => {
    console.log('Server nyala di port 8000');
});

