// import Customer from "../Customer";
// const Customer = require("../Customer");
document.getElementById("createCustomer").addEventListener("click", () => {
  //   alert("Hola");
  const newCustomer = new Customer(
    document.getElementById("id").value,
    document.getElementById("name").value,
    document.getElementById("lastname").value,
    document.getElementById("address").value,
    document.getElementById("city").value,
    document.getElementById("cellphone").value,
    document.getElementById("email").value
  );
  //   console.log(JSON.parse(JSON.stringify(newCustomer)));
  localStorage.setItem("myStorage", JSON.stringify(newCustomer));

  console.log("---------------------");
  JSON.parse(localStorage.getItem("myStorage")).id = 8;
});
