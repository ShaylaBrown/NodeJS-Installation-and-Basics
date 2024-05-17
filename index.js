/*Creating a Node Server.  
1st step: Bring it in:*/
const http = require('http');

//Routing Requests: 
http
.createServer((request, response) => {
response.statusCode = 200 //(sucessful)
response.setHeader("Content-Type", "text/html")
response.write("Hello World!")
response.end() //this will send the response
}).listen(3000, () => {
    console.log('Server running on port: 3000. You better go catch it!')
}) //telling our server to listen on port 3000 and run the callback function when the serve starts listening to the port 3000 request (callback function).
//Now our server is working and created!


http
  .createServer((request, response) => {
    console.log(`A ${request.method} request was made at ${request.url}`);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    switch (request.url) {
      case '/':
        response.write('Hello World!');
        break;

      case '/test':
        response.write('You have reached the /test endpoint');
        break;

      default:
        response.statusCode = 404; //this will run because of the parameter in "switch"
        response.write('Error: 404 Not Found');
        break;
    }

    response.end();
  })
  .listen(3000, () => {
    console.log('Server running on port: 3000. You better go catch it!');
  });


//Routing Requests: 
http
.createServer((request, response) => {
response.statusCode = 300 //(redirection message)
response.setHeader("Content-Type", "text/html")
response.statusMessage("Page has been redirected")
response.end() //this will send the response
}).listen(8080, () => {
    console.log('Server running on port: 3000. You better go catch it!')
}) //telling our server to listen on port 3000 and run the callback function when the serve starts listening to the port 3000 request (callback function).
//Now our server is working and created!


http
  .createServer((request, response) => {
    console.log(`A ${request.method} request was made at ${request.url}`);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    switch (request.url) {
      case '/':
        response.write('Hola');
        break;

      case '/test':
        response.write('You have reached the /test endpoint');
        break;

      default:
        response.statusCode = 404; //this will run because of the parameter in "switch"
        response.write('Error: 404 Not Found');
        break;
    }

    response.end();
  })
  .listen(3000, () => {
    console.log('Server running on port: 3000. You better go catch it!');
  });