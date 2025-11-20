const wrapper = document.getElementById("wrapper")
const btn = document.getElementById('btn')


let posts = []
let start = 0
let end = 10

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => {
        posts = res, render(res), console.log(res);
    })
    .catch((err) => console.error(err))

function render(res) {
    wrapper.innerHTML = ``

    for (; start < end; start++) {

        wrapper.innerHTML += `
            <div class="h-130 w-130 border-1 text-sm">
                 <b> <p>${posts[start].title}</p></b>
                 <p>${posts[start].body}</p>
            </div>
        `
    }
    end += 10
    start = end -10

}


btn.onclick = () => {
    render(posts);
};