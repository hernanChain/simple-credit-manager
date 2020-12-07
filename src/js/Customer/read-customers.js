data = JSON.parse(localStorage.getItem("data"));
const fillTable = () => {
  data.forEach((customer) => {
    document.getElementById("table-all-customers").innerHTML += `<tr>
    <th scope="row">${customer.id}</th>
    <td>${customer.name}</td>
    <td>${customer.lastName}</td>
    <td>${customer.cellphone}</td>
    <td>${customer.email}</td>
    <td>${customer.state ? "Activo" : "Inactivo"}</td>
    </tr>`;
  });
};
// console.log(JSON.parse(localStorage.getItem("data")));
fillTable();

document.getElementById("search-id").addEventListener("click", () => {
  const id = document.getElementById("read-by-id").value;
  if (id) {
    const customer = data.find((customer) => customer.id === id);
    if (customer) {
      console.log(customer);
      if (customer.state) {
        document.getElementById(
          "name"
        ).innerHTML = `${customer.name} ${customer.lastName}`;
        document.getElementById("cellphone").innerHTML = customer.cellphone;
        document.getElementById("email").innerHTML = customer.email;
        document.getElementById("address").innerHTML = customer.address;
        document.getElementById("credits").innerHTML = customer.credits.length;
        document
          .getElementById("customer-details")
          .classList.remove("hidden-customer-data");
        document
          .getElementById("customer-details")
          .classList.add("show-customer-data");
      } else {
        document.getElementById(
          "alert"
        ).innerHTML = `<div class="alert alert-warning"><strong>Woow! </strong>El cliente no se encuentra activo</div>`;
        setTimeout(() => {
          document.getElementById("alert").innerHTML = "";
        }, 4000);
      }
    } else {
      document.getElementById(
        "alert"
      ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos! </strong>"No se encontro ningun cliente con cedula ${id}</div>`;
      setTimeout(() => {
        document.getElementById("alert").innerHTML = "";
      }, 4000);
    }
  } else {
    document.getElementById(
      "alert"
    ).innerHTML = `<div class="alert alert-warning"><strong>Woow! </strong>Se debe ingresar un numero de cedula</div>`;
    setTimeout(() => {
      document.getElementById("alert").innerHTML = "";
    }, 3000);
  }
});

document.getElementById("read-by-id").addEventListener("click", () => {
  document.getElementById("name").innerHTML = "";
  document.getElementById("cellphone").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("address").innerHTML = "";
  document.getElementById("credits").innerHTML = "";
  document
    .getElementById("customer-details")
    .classList.remove("show-customer-data");
  document
    .getElementById("customer-details")
    .classList.add("hidden-customer-data");
});
