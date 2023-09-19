const fs= require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    const url=req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>')
        res.write('<head> <title> Enter Message <title/></head>')
        res.write('<body><form action="message" method="POST"><input type="text" name ="message"> <button type="submit">Click Me!</button> </form>  </body>')

        res.write('</html>')
        return res.end()
    }
    if(url==='/message' &&method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk)
        }) //on is listen event
        req.on('end',()=>{
            const parseBody= Buffer.concat(body).toString();  
            console.log(parseBody) 
        });
        fs.writeFileSync('message.text','DUMMY');
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end();
    }

    // console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head> My first Page </head>')
    res.write('<body> Hello from my Node.js Server </body>')
    res.write('</html>');
    res.end();

    
});
server.listen((3000))