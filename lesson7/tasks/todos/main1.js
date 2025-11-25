const form = document.getElementById("todoForm");
const root = document.getElementById("root");



let todos = []
const render = () => {
    root.innerHTML = "";


    if (todos.length) {
        todos.map(todo => {
            root.innerHTML += `
            <div class="mb-3 border border-slate-500 text-slate-500 p-2 rounded shadow bg-slate-200">
            <p class="">${todo.title}</p>
            <p class="text-xs">${moment(todo.createdAt).format("MMM DD | HH:mm")}</p>
            </div>
            `;
        })

        return;
    }

    root.innerHTML = '<div class="text-center bg-slate-200 text-slate-500 border py-4">No data</div>';
}


form.onsubmit = (e) => {
    e.preventDefault()

    //  todos = JSON.parse(localStorage.getItem("todos"))

    todos.push({
        id: Date.now() + 1,
        title: e.target.bobik.value,
        createdAt: Date.now(),
        completed: false
    });

    localStorage.setItem("todos", JSON.stringify(todos))

    render();
    e.target.reset()
}

document.body.onload = () => {
     todos = JSON.parse(localStorage.getItem("todos"))
     console.log(todos);
     
    render();
}   