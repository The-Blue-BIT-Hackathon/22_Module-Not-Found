const fetch = require("node-fetch")

fetch("/post/data", {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))