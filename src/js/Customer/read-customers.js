if(localStorage.getItem("data")){
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
  const resetTable = () => {
    document.getElementById("table-all-customers").innerHTML += ``;
  };
  fillTable();
  
  document.getElementById("search-id").addEventListener("click", () => {
    const id = document.getElementById("read-by-id").value;
    if (id) {
      const customer = data.find((customer) => customer.id === id);
      if (customer) {
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
        if (customer.state) {
          document
            .getElementById("desactivar")
            .classList.remove("hidden-desactivar");
          document.getElementById("activar").classList.add("hidden-activar");
        } else {
          document.getElementById("activar").classList.remove("hidden-activar");
          document
            .getElementById("desactivar")
            .classList.add("hidden-desactivar");
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
  
  document.getElementById("activar").addEventListener("click", () => {
    const id = document.getElementById("read-by-id").value;
    data.forEach((customer) => {
      if (customer.id === id) {
        customer.state = !customer.state;
        localStorage.setItem("data", JSON.stringify(data));
      }
    });
    location.reload();
  });
  
  document.getElementById("desactivar").addEventListener("click", () => {
    const id = document.getElementById("read-by-id").value;
    data.forEach((customer) => {
      const found_credit_active = customer.credits.find(credit=>credit.state);
      if (!found_credit_active) {
        if (customer.id === id) {
          customer.state = !customer.state;
          localStorage.setItem("data", JSON.stringify(data));
          location.reload();
        }
      }else{
        document.getElementById(
          "alert"
        ).innerHTML = `<div class="alert alert-danger"><strong>NO se puede desactivar cliente! </strong>Debido a que tiene creditos pendientes</div>`;
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "";
        }, 4000);
      }
      
    });
  });
}else{
  document.getElementById(
    "alert"
  ).innerHTML = `<div class="alert alert-danger"><strong>No se puede mostrar ningun cliente </strong>No existen clientes en la base de datos.</div>`;
  
}


