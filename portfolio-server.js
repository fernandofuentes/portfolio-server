// Import HTTP module
const http = require("http");
// Define the port to listen on
// YOU CANNOT LISTEN ON PORT 80 <---- WHY
const PORT = 8080;



// Handle incoming requests
function responseHandler(request, response) {
  const path = request.url;

  switch (path) {
    case "/":
      response.send("You're at root");
    case "/portfolio":
      response.end("Mah portfolio");
    default:
      response.end("404");
  }
}


const server = http.createServer(responseHandler);




// tell the server to LISTEN to PORT
server.listen(PORT, function() {
  console.log("====================================");
  console.log("I'm listening to PORT");
  console.error("Visit http:..localhost:${PORT}");
  console.log("====================================");
});