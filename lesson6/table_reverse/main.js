const wrapper = document.getElementById('wrapper')
const bt = document.getElementById('bt')

let users = []


fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((json) => { addTo(json), users = json })
    .catch((err)=> console.error(err))

function addTo(data) {
    wrapper.innerHTML = ``
    data.forEach(e => {
        wrapper.innerHTML += `
        <div class="h-40 w-40 bg-slate-400">
            <p>${e.name}</p>
            <p>${e.phone}</p>
        </div>
        `
    });
}

bt.addEventListener('click', () => {
    const reverse = users.reverse();   
    addTo(reverse)    
});