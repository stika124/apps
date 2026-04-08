function pack(name, web) {
  let WD = 100
  document.documentElement.innerHTML += `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">`
  document.documentElement.style.fontFamily = "'Noto Sans JP', sans-serif"
  document.documentElement.style.fontWeight = "900"
  document.documentElement.style.fontSize = "25px"
  document.documentElement.style.setProperty("--white", "#f0f0f0")
  document.documentElement.style.setProperty("--black", "#1f1f1f")
  document.body.appendChild((() => {
    let line = document.createElement("div")
    line.style.position = "absolute"
    line.style.top = "0"
    line.style.left = "0"
    line.style.zIndex = "9999"
    line.style.height = `${WD}px`
    line.style.borderBottom = "1px solid var(--black)"
    line.style.background = "var(--white)"
    line.style.color = "var(--black)"
    line.style.width = "100vw"
    line.appendChild((() => {
      let text = document.createElement("div")
      text.style.position = "absolute"
      text.style.top = `${WD/2}px`
      text.style.left = "50px"
      text.style.transform = "translate(0, -50%)"
      text.innerText = name
      return text
    })())
    line.appendChild((() => {
      let btn = document.createElement("div")
      btn.style.position = "absolute"
      btn.style.top = `${WD/2}px`
      btn.style.right = "50px"
      btn.style.transform = "translate(0, -50%)"
      btn.innerText = "Donate!"
      btn.onclick = () => donate(web)
      return btn
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
      bodY.style.width = "100vw";
      bodY.style.position =  "relative";
      bodY.style.height = `calc(100vh - ${WD}px)`
      bodY.id = "body"
      return bodY
    })())
    return body
  })())
}
