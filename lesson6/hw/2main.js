const wrapper = document.getElementById("wrapper")
const btn = document.getElementById('btn')

let posts = []



fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => {
        posts = res, render(res);
    })
    .catch((err) => console.error(err))




function render(res) {
    wrapper.innerHTML = ``

    for (let i = 0; i < posts.length; i++) {

        wrapper.innerHTML += `
            <div class="h-30 w-30 m-5 border-1 text-sm">
                 <b> <p>${posts[i].title}</p></b>
            </div>
        `
    }
}

btn.onclick = () => {
    wrapper.style.display = "grid"
    wrapper.style.gridTemplateColumns = "auto auto auto auto auto auto";
    render(posts)    
};