if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"));
    const id = document.getElementById("id");
    id.addEventListener('input',(e)=>{
        const credit_select = document.getElementById("credit");
    const found = data.find(customer => customer.id === String(e.target.value))
    if (found) {

        if (found.credits.length !== 0) {
            found.credits.forEach(credit => {
                if (credit.state) {
                    credit_select.innerHTML += `<option value="${credit.number}">${credit.number}</option>`
                    credit_select.disabled = false;
                    document.getElementById('pay_button').disabled = false;
                }
            });
            setMonths(id.value, document.getElementById('credit').value);
        }else{
            console.log("El cliente existe pero no tiene creditos en este momento");
            document.getElementById(
                "alert"
              ).innerHTML = `<div class="alert alert-warning"><strong>Cliente Sin Creditos </strong>El cliente existe pero no tiene creditos actualmente!</div>`;
              setTimeout(() => {
                document.getElementById("alert").innerHTML = "";
              }, 3000);
              resetFields();
        }
    }else{
        document.getElementById("credit").innerHTML = "";
        document.getElementById('month').innerHTML = "";
        credit_select.disabled = true;
        document.getElementById('month').disabled = true;
    }
    })
    id.addEventListener('change',()=>{
        const found_customer = data.find(customer=>customer.id === id.value);

        if (found_customer) {
            if (found_customer.credits.length === 0) {
                document.getElementById(
                    "alert"
                  ).innerHTML = `<div class="alert alert-warning"><strong>Cliente Sin Creditos </strong>El cliente existe pero no tiene creditos actualmente!</div>`;
                  setTimeout(() => {
                    document.getElementById("alert").innerHTML = "";
                  }, 3000);
                  resetFields();
            }
        }else{
            document.getElementById(
                "alert"
              ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos </strong>No existe un usuario con cedula ${document.getElementById('id').value}</div>`;
              setTimeout(() => {
                document.getElementById("alert").innerHTML = "";
              }, 3000);
              resetFields();
        }
    })
    const setMonths = (id,credit_number)=>{
        const customer = data.find(customer => customer.id === id);
        const credit_found = customer.credits.find(credit =>credit.number === Number(credit_number));
        const months_select = document.getElementById('month');
        credit_found.cuotas.forEach(cuota=>{
            if (!cuota.state) {
                months_select.innerHTML += `<option value="${cuota.month}">${cuota.month}</option>`
                months_select.disabled = false;
            }
        })
        
    }
    document.getElementById('credit').addEventListener('change',()=>{
        setMonths(document.getElementById('id').value,document.getElementById('credit').value);
    })
    const resetFields = ()=>{
        document.getElementById("id").value = "";
    }
    document.getElementById("pay_button").addEventListener("click",()=>{
        console.log("Se presiono el boton");
        const id_to_pay = document.getElementById('id').value;
        const credit_to_pay = document.getElementById('credit').value;
        const month_to_pay = document.getElementById('month').value;
        const customer_to_pay = data.find(customer=>customer.id === id_to_pay);
        const credit_to_pay_founded = customer_to_pay.credits.find(credit=>credit.number === Number(credit_to_pay));
        const cuota_to_pay = credit_to_pay_founded.cuotas.find(cuota=>cuota.month === month_to_pay);
        cuota_to_pay.state = true;
        localStorage.setItem("data", JSON.stringify(data));
        location.reload();
    })
}else{
    document.getElementById('id').disabled = true;
    document.getElementById(
        "alert"
      ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos </strong>No informacion para mostrar, base de datos vacia</div>`;
}  