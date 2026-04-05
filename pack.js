function pack(name) {
  let WD = 100
  document.documentElement.innerHTML = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">`
  document.documentElement.style.fontFamily = "'Noto Sans JP', sans-serif"
  document.documentElement.style.fontWeight = "900"
  document.body.appendChild((() => {
    let line = document.createElement("div")
    line.style.position = "absolute"
    line.style.top = "0"
    line.style.left = "0"
    line.style.zIndex = "9999"
    line.style.height = `${WD}px`
    line.appendChild((() => {
      let text = document.createElement("div")
      text.style.position = "absolute"
      text.style.top = `${WD/2}px`
      text.style.left = "50px"
      text.style.transform = "translate(0, -50%)"
      text.style.height = `${WD}px`
      text.innerText = name
      return text
    })())
    return line
  })())
  document.body.appendChild((() => {
    let body = document.createElement("div")
    body.style.position = "absolute"
    body.style.top = `${WD}px`
    body.style.left = "0"
    body.style.padding = "0"
    body.appendChild((() => {
      let bodY = document.createElement("div")
      bodY.style.position = "relative"
      bodY.style.id = "body"
      return bodY
    })())
    return body
  })())
}
