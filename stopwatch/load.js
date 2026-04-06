pack("Stopky", location.href)
let BODY = document.getElementById("body")

BODY.appendChild((() => {
  let time = document.createElement("div")
  time.id = "time"
  time.appendChild((() => {
    let hours = document.createElement("span")
    hours.id = "hrs"
    return hours
  })())
  time.appendChild((() => {
    let punc = document.createElement("span")
    punc.id = "punc1"
    punc.innerText = ":"
    return punc
  })())
  time.appendChild((() => {
    let minutes= document.createElement("span")
    minutes.id = "mins"
    return minutes
  })())
  time.appendChild((() => {
    let punc = document.createElement("span")
    punc.id = "punc2"
    punc.innerText = ":"
    return punc
  })())      
  time.appendChild((() => {
    let seconds = document.createElement("span")
    seconds.id = "secs"
    return seconds
  })())
  return time
})())

let st = 0
let last = 0
function loop(time) {
  const delta = time - last;
  last = time

  st += delta / 1000

  document.getElementById("hrs").style.display = ( st >= 3600 ) ? "inline" : "none"
  document.getElementById("mins").style.display = ( st >= 60 ) ? "inline" : "none"
  
  document.getElementById("hrs").innerText = `${Math.floor(st/3600)}`
  document.getElementById("mins").innerText = `${( st >= 3600 && Math.floor( st / 60 ) % 60 < 10 ) ? "0" : ""}${Math.floor(st/60)%60}`
  document.getElementById("secs").innerText = `${( st >= 60 && st % 60 < 10 ) ? "0" : ""}${Math.floor(st)%60}`
  
  document.getElementById("punc1").innerText = `${( st >= 3600 ) ? ":" : ""}`
  document.getElementById("punc2").innerText = `${( st >= 60 ) ? ":" : ""}`
  requestAnimationFrame(loop)
}
requestAnimationFrame(loop)
