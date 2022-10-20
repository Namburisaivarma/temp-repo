const http = require('http')

const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end("Welcome to our homepage")
//     }
//     if(req.url === '/about') {
//         res.end("Here is our history")
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>we cant find the page you are looking for</p>
//     <a href ="/">back home</a>
//     `)
// })

//  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)

  if(req.url === '/') {
    res.end('welcome to our homepage')
  } else if(req.url === '/about') {
    res.end("Here is our short history")
  } else {
    res.end(`
    <h1>Oops</h1
    <p>we cant find the page you are looking for</p>
    <a href ="/">back home</a>
    `)
  }
})
server.listen(5000)

