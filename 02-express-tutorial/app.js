const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req.method)
    const url = req.url
    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write("<h1>Home Page</h1>")
        res.end() 
    }
    // about page
    else if(url ==='/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write("<h1>About Page</h1>")
        res.end()
    }
    //404
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write("<h1>Doesn't Exist</h1>")
        res.end()
    }
})

server.listen(5000)
