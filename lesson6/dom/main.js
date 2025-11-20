// const btn = document.getElementById("btn")

// btn.classList

// btn.onclick = function () {
//     btn.classList.toggle("text-red-600"); 
// };

// const rootElement = document.getElementById("root")

// rootElement.querySelector('button').addEventListener('click', ()=>{
//     document.body.classList.toggle('bg-slate-950')
// })

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')

const input = document.getElementById("color").addEventListener("input", (value) => {
    box1.style.backgroundColor = value.target.value
})

const btn = document.getElementById('btn').addEventListener('click', () => {
    box2.style.backgroundColor = box1.style.backgroundColor
})

