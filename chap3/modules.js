//show module info
console.log(module)

//build-in module
// + path module
var path=require('path')
var fileName= path.basename('')
console.log(fileName)

// +os module
var os=require('os')
console.log('Platform:',os.platform())
console.log('Architecture:',os.arch())

// querystring path
var queryString=require('querystring')
var query=queryString.parse('search=oto&year=2004')
console.log(query)

// http module
var http=require('http')
const { getMyDateTime } = require('./createModule')
http.createServer((request,response)=>{
    console.log('sever')
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('thoi gian bh la: '+getMyDateTime())
    response.end('Hello world')
}).listen(8000)