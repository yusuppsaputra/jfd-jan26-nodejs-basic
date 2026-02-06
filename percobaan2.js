const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/') {
        res.end(
            `Hello, Nama saya Yusuf Saputra <hr>
             Saya sedang belajar Node.js`
        );
    } 
    else if (req.url === '/about') {
        res.end(
            `Halo, saya Yusuf Saputra. Saya seorang developer web yang sedang belajar Node.js.`
        );
    }
    else if (req.url === '/contact') {
        res.end(
            `Anda dapat menghubungi saya di email:
            yusuf.saputra@example.com`
        )
    }
    else {
        res.write(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 - Page Not Found</h1>');
    }
}).listen(8043, () => {
    console.log('Server nyala di port 8043');
});