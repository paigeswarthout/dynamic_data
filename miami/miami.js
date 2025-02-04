//https://expressjs.com/
const express = require('express')

const app = express()

// Setup the template engine
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

// To set the port execute: port=8080 node miami
const port = process.env.port || 3000

//Create some routes
app.get('/', (request, response)=>{
    response.type("text/html")
    response.render("home", {title:"Miami Travel Site"})
})

app.get('/beaches', (request, response)=>{
    response.type("text/html")
    response.render("page", {title:"Miami Beaches"})
})

app.get('/nightlife', (request, response)=>{
    response.type("text/html")
    response.render("page", {title:"Miami Nightlife"})
})

app.get('/about', (request, response)=>{
    response.type("text/html")
    response.render("page", {title:"About Miami"})
})
// Query, params, and body
app.get('/search', (request, response)=>{
    console.log(request);
    response.type("text/html")
    response.render("page", {title:"Search results for: " + request.query.q})
})

//error handling goes after the actual routes
//custom 404 error pagae to handle non-existing routes, the default response is not found
app.use((request,response) => {
    response.type("text/html")
    response.status(404)
    response.send("404 not found")
})

//custom 500 error page to handle errors in our code 
app.use((error, request, response, next)=> {
    console.log(error)
    console.error("text/html")
    response.status(500)
    response.send("500 server error")
})

app.listen(port,()=>{
    console.log(`Express is running on http://localhost:${port};`)
    console.log(`press Ctrl-C to terminate`)
})