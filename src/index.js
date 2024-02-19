const http= require("http")

const todosDatabase = (() => { -
})()

const JsonHeader = { 'Content-Type': 'aplication/json' }

const server = http.createServer((request, response) => {

if (request.method == 'GET' && /^\/hello\/\w+$/.test(request.url)) {
const [,,name] = request.url.split('/')
response.writeHead(200)
response.end('Hello ${name}!\n')
return
}

if (request.method == 'GET' && request.url.startsWith('/hello')) {
response.writeHead(200)
response.end('Hello World!\n')
return
}

if (request.method == 'POST' && request.url.startsWith('/echo')){
  response.writeHead(200)
  request.pipe(response)
  return
  }

  if (request.method == 'POST' && request.url.startsWith('/todos')){
    let bodyRaw = ' '

    request.on('data', data => bodyRaw += data)

    request.once('end', () => {
    const todo = JSON.parse(bodyRaw)
    todosDatabase.insert(todo)
    .then(inserted => {
    response.writeHead(201, JsonHeader
    response.end(JSON.stringify(inserted))
    })
    return
    }

    if (request.method == 'GET' && request.url.startsWith('/todos')) {
    todosDatabase
    .list()
    .then(todos => {
    response.writeHead(200, JsonHeader)
    response.end(JSON.stringify({ todos }))
    })
    return
    }

response.write(404)
response.end('Resource not found\n')
})

server.listen(3000, '0.0.0.0', () => {
console.log('Server started')
})
