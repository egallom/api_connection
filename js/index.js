const API_URL = "http://jsonplaceholder.typicode.com";
const HTMLResponse = document.querySelector("#app");
const UL = document.createElement("ul");

fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      let elem = document.createElement("li");
      elem.appendChild(
        document.createTextNode(`${user.name} - ${user.email}`)
      );
      UL.appendChild(elem);
    });
    HTMLResponse.appendChild(UL);
  });

