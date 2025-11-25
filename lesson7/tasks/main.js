const setbtn = document.getElementById("set")
const getbtn = document.getElementById("get")
const color = document.getElementById("color")
const box = document.getElementById("box")

color.oninput = ()=>{
    colorValue = color.value
}

setbtn.onclick = ()=>{
    
    localStorage.setItem("time", Date.now())
    localStorage.setItem("color", colorValue)

}


getbtn.onclick = ()=>{
    const time = Date( Number(localStorage.getItem("time")))
    const color = localStorage.getItem("color")

    box.innerHTML = `
        <p>${time}</p>
        <p>${color}</p>
    `
    box.style.backgroundColor = "color"
}