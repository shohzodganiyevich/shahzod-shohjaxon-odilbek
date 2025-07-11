const api = axios.create({ 
  baseURL: "https://686ff84f46567442480117a8.mockapi.io", 
}); 
 
let box = document.querySelector(".prods"); 
 
function showData(arr) { 
  box.innerHTML = ""; 
  arr.forEach(e => { 
    box.insertAdjacentHTML('beforeend', ` 
      <div class="card"> 
        <img src="${e.avatar}" alt="${e.name}" /> 
        <h1>${e.name}</h1> 
        <p>Email: ${e.email}</p> 
        <b>Password: •••••••</b> 
      </div> 
    `); 
  }); 
} 
 
async function getData() { 
  try { 
    let { data } = await api.get("/users"); 
    showData(data); 
  } catch (err) { 
    box.innerHTML = "<p>Xatolik yuz berdi. Qaytadan urinib koring.</p>"; 
    console.error(err); 
  } 
} 
let modal = document.querySelector(".modal"); 
let deleteBtn = document.querySelector(".delete-btn"); 
let closeBtn = document.querySelector(".close-btn"); 
 
let selectedId = null; 
 
box.addEventListener("click", (e) => { 
  const card = e.target.closest(".card"); 
  if (card) { 
    selectedId = card.dataset.id; 
    modal.classList.remove("hidden"); 
  } 
}); 
 
closeBtn.addEventListener("click", () => { 
  modal.classList.add("hidden"); 
}); 
 
deleteBtn.addEventListener("click", async () => { 
  try { 
    await api.delete(`/users/${selectedId}`); 
    modal.classList.add("hidden"); 
    getData(); 
  } catch (err) { 
    console.error("O'chirishda xatolik:", err); 
  } 
}); 
 
window.addEventListener("DOMContentLoaded", getData);