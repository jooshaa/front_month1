const root = document.getElementById("root")

const rootEl = ReactDOM.createRoot(root);

// const Card = ()=>{
//     return React.createElement('div', {className: "card"}),
//     [
//         React.createElement('img', {src: 'https://picsum.photos/300/400', alt: "Image", className: "card-img"}),
//         React.createElement('div', {className: "card-body"}, [
//             React.createElement('h1', {}, "Title"),
//             React.createElement("p", {}, "Lorem is a;fhagha; hah adhgagh al;ga gahg aljga hadf akdfj adlfj aogn mqewbo fqm vo ne gajopsm")
//         ])
//     ]
// }

// const cards = React.createElement("div", { className: "cards" }, [
//     Card(),
//     Card(),
//     Card(),
// ]);

// const container = React.createElement("div", { className: "container" } , cards);

const Button = (props)=>{
    return React.createElement('button', { className:`'btn ${props.type === 'succes' ? 'btn-succes': 'btn-danger'}` }, props.text)
}

const buttons = React.createElement("div", {className: "button"}, [
    Button({type: "succes", text: "click"}),
    Button({ type: "danger", text: "click" }),
] )
const container = React.createElement("div", {className: "button", buttons})



rootEl.render(container)