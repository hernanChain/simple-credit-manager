if (localStorage.getItem('data')) {
  data = JSON.parse(localStorage.getItem('data'));
  document.getElementById('search-id').addEventListener('click', () => {
    const id = document.getElementById('read-by-id');
    const customer_found = data.find((customer) => customer.id === id.value);
    if (customer_found) {
      document.getElementById('name').value = customer_found.name;
      document.getElementById('lastname').value = customer_found.lastName;
      document.getElementById('address').value = customer_found.address;
      document.getElementById('city').value = customer_found.city;
      document.getElementById('cellphone').value = customer_found.cellphone;
      document.getElementById('email').value = customer_found.email;
      document.getElementById('update-fields').classList.remove('hidden');
    } else {
      document.getElementById(
        'alert',
      ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos! </strong>"No se encontro ningun cliente con cedula ${id.value}</div>`;
      setTimeout(() => {
        document.getElementById('alert').innerHTML = '';
      }, 4000);
    }
  });
  const resetFields = () => {
    document.getElementById('read-by-id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('cellphone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('update-fields').classList.add('hidden');
  };
  document.getElementById('update-customer-btn').addEventListener('click', () => {
    if (
      document.getElementById('name').value === '' ||
      document.getElementById('lastname').value === '' ||
      document.getElementById('lastname').value === '' ||
      document.getElementById('address').value === '' ||
      document.getElementById('city').value === '' ||
      document.getElementById('cellphone').value === '' ||
      document.getElementById('email').value === ''
    ) {
      document.getElementById(
        'alert',
      ).innerHTML = `<div class="alert alert-danger"><strong>Faltan datos! </strong> Se deben completar la totalidad de los campos para seguir con el proceso!</div>`;
      setTimeout(() => {
        document.getElementById('alert').innerHTML = '';
      }, 4000);
    } else {
      const id_to_update = document.getElementById('read-by-id');
      const customer = data.find((customer) => customer.id === id_to_update.value);
      if (customer) {
        customer.name = document.getElementById('name').value;
        customer.lastName = document.getElementById('lastname').value;
        customer.address = document.getElementById('address').value;
        customer.city = document.getElementById('city').value;
        customer.cellphone = document.getElementById('cellphone').value;
        customer.email = document.getElementById('email').value;
        localStorage.setItem('data', JSON.stringify(data));
        document.getElementById(
          'alert',
        ).innerHTML = `<div class="alert alert-success"><strong>Operacion exitosa! </strong> El/La señor(a) ${customer.name} ${customer.lastName} ha sido modificado!</div>`;
        setTimeout(() => {
          document.getElementById('alert').innerHTML = '';
        }, 4000);
        resetFields();
      } else {
        document.getElementById(
          'alert',
        ).innerHTML = `<div class="alert alert-danger"><strong>Lo sentimos! </strong>"No se encontro ningun cliente </div>`;
        setTimeout(() => {
          document.getElementById('alert').innerHTML = '';
        }, 4000);
      }
    }
  });
  document.getElementById('read-by-id').addEventListener('click', () => {
    resetFields();
  });
} else {
  console.log('NO hay datos para mostrar alerta');
  //TODO alerta de que no hay na da para mostrar y desahibilitra campo
  document.getElementById(
    'alert',
  ).innerHTML = `<div class="alert alert-danger"><strong>No se puede mostrar ningun cliente </strong>No existen clientes en la base de datos.</div>`;

  document.getElementById('read-by-id').disabled = true;
  document.getElementById('search-id').disabled = true;
}
