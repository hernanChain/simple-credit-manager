if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
}else{
  data = [];
}

const resetFields = () => {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("cellphone").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("create-customer-btn").addEventListener("click", () => {
  if(document.getElementById("id").value === "" || document.getElementById("name").value === ""|| document.getElementById("lastname").value === ""|| document.getElementById("lastname").value === ""|| document.getElementById("address").value === "" || document.getElementById("city").value === "" || document.getElementById("cellphone").value === "" || document.getElementById("email").value === ""){
    document.getElementById(
      "alert"
    ).innerHTML = `<div class="alert alert-danger"><strong>Faltan datos! </strong> Se deben completar la totalidad de los campos para seguir con el proceso!</div>`;
    setTimeout(() => {
      document.getElementById("alert").innerHTML = "";
    }, 4000);
  }else{
  const newCustomer = new Customer(
    document.getElementById("id").value,
    document.getElementById("name").value,
    document.getElementById("lastname").value,
    document.getElementById("address").value,
    document.getElementById("city").value,
    document.getElementById("cellphone").value,
    document.getElementById("email").value
  );

  const found = data.find((customer) => customer.id === newCustomer.getId());
  if (!found) {
    try {
      data.push(JSON.parse(JSON.stringify(newCustomer)));
      localStorage.setItem("data", JSON.stringify(data));
      document.getElementById(
        "alert"
      ).innerHTML = `<div class="alert alert-success"><strong>Operacion exitosa! </strong> El/La señor(a) ${newCustomer.getName()} ${newCustomer.getLastName()} ha sido agregado a nuestra organizacion!</div>`;
      setTimeout(() => {
        document.getElementById("alert").innerHTML = "";
      }, 4000);
    } catch (error) {
      document.getElementById(
        "alert"
      ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos! </strong>Intenta mas tarde</div>`;
      setTimeout(() => {
        document.getElementById("alert").innerHTML = "";
      }, 4000);
    }
  } else {
    document.getElementById(
      "alert"
    ).innerHTML = `<div class="alert alert-warning"><strong>Woow! </strong>El usuario con identificacion: ${newCustomer.getId()} ya se encuentra registrado en el sistema </div>`;
    setTimeout(() => {
      document.getElementById("alert").innerHTML = "";
    }, 4000);
  }

  resetFields();
  // console.log(JSON.parse(JSON.stringify(newCustomer)));
  }
});
