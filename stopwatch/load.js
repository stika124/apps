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

const svg = {
  start: "M 1,1 L 4,2.5 L 1,4 Z",
  pause: "M 1,1 L 2,1 L 2,4 L 1,4 Z M 3,1 L 4,1 L 4,4 L 3,4 Z",
  stop: "M 1,1 L 4,1 L 4,4 L 1,4 Z"
}
BODY.appendChild((() => {
  let controlStPa = document.createElement("div")
  controlStPa.id = "controlStPa"
  controlStPa.appendChild((() => {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", svg.start)
    path.onclick = () => {
      mult = mult ? 0 : 1
      path.setAttribute("d", mult ? svg.start : svg.pause)
    }
    return path
  })())
  return controlStPa
}))
BODY.appendChild((() => {
  let controlStop = document.createElement("div")
  controlStop.id = "controlStop"
  controlStop.appendChild((() => {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", svg.stop)
    path.onclick = () => {
      mult = 0
      st = 0
    }
    return path
  })())
  return controlStop
})())

let st = 0
let last = 0
let mult = 1
function loop(time) {
  const delta = time - last;
  last = time

  st += (delta / 1000) * mult

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
