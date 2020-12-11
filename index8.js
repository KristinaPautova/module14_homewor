const pageNumber = document.getElementById("nomber");
const limit = document.getElementById("limit");
const output = document.getElementById("output")
btn.onclick = function(){
    if(pageNumber.value < 1 || pageNumber.value > 10)
    {
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
    }
    else if (pageNumber.value < 1 || limit.value > 10){
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
    }
    else if(pageNumber.value < 1 || pageNumber.value > 10)
    {
        alert("Номер страницы вне диапазона от 1 до 10")
    }
    else if(limit.value < 1 || limit.value > 10){
        alert("Лимит вне диапазона от 1 до 10")
    }
    else{
        fetch(`https://picsum.photos/v2/list?page=${pageNumber.value}&limit=${limit.value}`)
            .then(response => response.json())
            .then(json => {
                let cards = "";
                json.forEach(item => {
                    const cardBlock = `
                            <div class="card">
                            <img
                              src="${item.download_url}"
                              class="card-image"
                            />
                            <p>${item.author}</p>
                            </div>
                            `;
                    cards += cardBlock;
                });
                localStorage.setItem("images", cards);
                output.innerHTML = cards;
            })
    }
}