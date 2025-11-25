

const usersForm = document.getElementById("usersForm")
const tbody = document.getElementById("tbody")
const btn = document.getElementById('btn')

let users = []

users = JSON.parse(localStorage.getItem("users")) || []

const delete1 = (id)=>{
     users = users.filter((e)=>e.id != id)         
    render()
}


const render = () => {
    let len = users.length
    let sum = 0
    tbody.innerHTML = ""

    if (len === 0) {
        tbody.innerHTML = `
            <tr class="bg-neutral-primary border-b border-default">
                <th class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    noData
                </th>
            </tr>
        `
        return
    }

    users.forEach((user, index) => {
        sum += user.age

        tbody.innerHTML += `
            <tr class="bg-neutral-primary border-b border-default">
                <th class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    ${index + 1}
                </th>
                <td class="px-6 py-4">${user.name}</td>
                <td class="px-6 py-4">${user.age}</td>
                <td class="px-6 py-4">${user.gender}</td>
                <td class="px-6 py-4">
                    <button onclick="delete1(${user.id})"><i class="fa-solid fa-delete-left"></i></button>
                </td>
            </tr>
        `
    })

    
    tbody.innerHTML += `
        <tr>
            <td>Total</td>
            <td>${len}</td>
            <td>Average age</td>
            <td>${(sum / len).toFixed(1)}</td>
        </tr>
    `
}

usersForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const { name, age, gender } = event.target

    users.push({
        id: Date.now(),
        name: name.value,
        age: Number(age.value), 
        gender: gender.value
    })
    if(users.length > 0) localStorage.setItem("users", JSON.stringify(users))

    render()
    event.target.reset()
})

document.addEventListener("DOMContentLoaded", render)
