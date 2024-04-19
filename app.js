
console.log("Let's get this party started!");

async function getGifs(searchText) {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", q: searchText}});
    return res.data;
}

function appendGif(res){
    let numResults = res.data.length;
    let randomNum = Math.floor(Math.random() * numResults);

    let newImg = document.createElement("img");
    newImg.src = res.data[randomNum].images.original.url;
    let gifResults = document.querySelector("#gif-results");
    gifResults.appendChild(newImg);
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form');
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.querySelector('#search');
        let newGif = await getGifs(input.value);
        input.value = '';
        appendGif(newGif);
    });

    const removeBtn = document.querySelector('#remove-btn');
    removeBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        let gifResults = document.querySelector("#gif-results");
        gifResults.innerHTML = '';
    });
});



