import React from 'react';
import Swal from 'sweetalert2';

function Formulario() {
  const mostrarFormulario = () => {
    Swal.fire({
      title: 'Formulario',
      html:
        '<div class="form-group">' +
        '<label for="nombre">Nombre:</label>' +
        '<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="correo">Correo electrónico:</label>' +
        '<input type="email" class="form-control" id="correo" name="correo" placeholder="Ingresa tu correo electrónico">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="mensaje">Mensaje:</label>' +
        '<textarea class="form-control" id="mensaje" name="mensaje" rows="3"></textarea>' +
        '</div>',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector('#nombre').value;
        const correo = Swal.getPopup().querySelector('#correo').value;
        const mensaje = Swal.getPopup().querySelector('#mensaje').value;

        return { nombre: nombre, correo: correo, mensaje: mensaje };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value);
        Swal.fire({
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={mostrarFormulario}>Mostrar formulario</button>
    </div>
  );
}

export default Formulario;

