const wrapper = document.querySelector(".wrapper")
let loading = true

if (loading) {
    wrapper.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}

fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(res => {
    wrapper.innerHTML=""
    loading = false
    res.forEach(u => {
        wrapper.innerHTML +=`
        <div class="card">
            <b>${u.title}</b>
            <i>${u.body}</i>
        </div>
        `
    });

}).catch((err)=> wrapper.innerHTML= `Error message:${err}`)
if (!loading) {
    wrapper.innerHTML = ""
}
