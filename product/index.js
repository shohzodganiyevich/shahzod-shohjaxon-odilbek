let root=document.querySelector(".prods")

const api=axios.create({
    baseURL:"https://686e4789c9090c495388ffea.mockapi.io/"
})

async function getData() {
    let {data}=await api.get("/products")
    console.log(data);
    
    data.forEach(e => {
    root.insertAdjacentHTML("beforeend",
        `    
    <div class="card">
        <img src="${e.image}" alt="photo">
        <h1>${e.title}</h1>
        <p>${e.decsribtion}</p>
        <b>$${e.price}</b>
        <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
      <button class='btn'>Buy Now</button>
    </div>`
    )
        
    });
    
}
getData()

