const wrapper = document.querySelector(".wrapper")
let loading = true

if (loading) {
    console.log("page is loading");
    wrapper.innerHTML= `Loading...`
    //html tg 
}

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
    res.forEach(u => {
        
        wrapper.innerHTML +=`
        <div class="card">
            <img class="img" src="https://picsum.photos/100/100" alt="">
            <b>${u.name}</b>
            <i>${u.phone}</i>
        </div>
        `
    });

}).catch((err)=> wrapper.innerHTML= `Error message:${err}`)
loading = false
if (!loading) {
    wrapper.innerHTML = ""
    //html tg 
}
