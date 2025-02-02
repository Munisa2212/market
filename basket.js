let basketBox = document.querySelector(".basketBox")

const instance = axios.create({
    baseURL: "https://679a1481747b09cdcccd9973.mockapi.io",
});

function show(arr){
    let t = localStorage.getItem("array");
    let task = JSON.parse(t); 
    basketBox.innerHTML = ""
    task.forEach((cartItem) => {
        let matchedProduct = arr.find(product => product.id == cartItem);
        if (matchedProduct) {
            basketBox.insertAdjacentHTML("beforeend", `
                <div class="card">
                    <img src="${matchedProduct.photo}">
                    <h1>${matchedProduct.name}</h1>
                    <p>${matchedProduct.price}</p>
                </div>
            `);
        }
    });
}

instance.get("/two").then((res)=> show(res.data))