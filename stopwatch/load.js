let BODY = document.getElementById("body")

BODY.appendChild((() => {
  let time = document.createElement("div")
  time.style.position = "absolute"
  time.style.top = "50%"
  time.style.left = "50%"
  time.style.transform = "translate(-50%, -50%)"
  time.style.fontSize = "80px"
  time.appendChild((() => {
    let hours = document.createElement("span")
    hours.id = "hrs"
    return hours
  })())
  time.appendChild((() => {
    let punc = document.createElement("span")
    punc.id = "punc1"
    punc.innerText = ":"
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
function loop(t) {
  const delta = time - last;
  last = time

  st += delta / 100

  document.getElementById("hrs").style.display = ( st >= 3600 ) ? "block" : "none"
  document.getElementById("mins").style.display = ( st >= 60 ) ? "block" : "none"
  document.getElementById("mins").innerText = `${( st >= 3600 && Math.floor( st / 60 ) % 60 < 10 ) ? "0" : ""}${Math.floor(st/60)%60}`
  document.getElementById("secs").innerText = `${( st >= 60 && st % 60 < 10 ) ? "0" : ""}${Math.floor(st)%60}`
  document.getElementById("punc1").innerText = `${( st >= 3600 ) ? ":" : ""}`
  document.getElementById("punc2").innerText = `${( st >= 60 ) ? ":" : ""}`
}
requestAnimationFrame(loop)
