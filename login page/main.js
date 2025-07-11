const api = axios.create({
  baseURL: "https://686ff84f46567442480117a8.mockapi.io",
});

let name_inp = document.querySelector(".name");
let email_inp = document.querySelector(".email");
let password_inp = document.querySelector(".password");

let btn = document.querySelector(".btn");

async function createData(obj) {
  let { data } = await api.post("/users", obj);
  console.log(data);
}

async function isNameReturn(check_name) {
  let { data } = await api.get("/users");

  return data.some((obj) => obj.name == check_name);
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (name_inp.value && email_inp.value && password_inp.value) {
    let gg =  await isNameReturn(name_inp.value);

    if (!gg) {
      createData({
        name: name_inp.value,
        email: email_inp.value,
        password: password_inp.value,
      });
      // window.location.assign("./Shaxzodakani_papkasi/index.html");
    } else {
      alert("Error: Try another login");
    }
  } else {
    alert("Error: Fill in all fields")
  }
});
