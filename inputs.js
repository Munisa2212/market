let inputs = document.querySelector(".inputs")

let iname = document.querySelector("#name")
let iprice = document.querySelector("#price")
let iphoto = document.querySelector("#photo")
let btn = document.querySelector("#btn")
let counter = document.querySelector("#count")

const instance = axios.create({
    baseURL: "https://679a1481747b09cdcccd9973.mockapi.io",
});


function show(number){
    inputs.insertAdjacentHTML("afterbegin", `<h1>Products count: ${number}</h1>`)
}
instance.get("/two").then((res)=> show(res.data.length))


function createPro(){
    let newProd = {
        name: iname.value,
        price: iprice.value,
        photo: iphoto.value,
    };
    instance.post("/two", newProd).then((res)=>location.reload())
}

btn.addEventListener("click", createPro)