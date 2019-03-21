let characters = [];
let list = document.getElementById("list");
let search = document.querySelector("input");

fetch('https://swapi.co/api/planets/5')
    .then(response => response.json())
    .then(response => {
        characters.push(...response.results);
    render();
    })

    function filterText() {
        const filtered = characters
            .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
            .map(val => `<li>${val.name}</li>`)
            if (filtered.length) render(filtered);
    }
    function render() {
        const html = characters.map(val => `<li>${val.name}</li>`).join('');
        list.innerHTML = html;
    }

    search.addEventListener("keyup", filterText);