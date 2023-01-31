import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css']
})
export class DatosPerfilComponent {
  list=[
    {
      nia: '987654321',
      nombreCompleto: 'ELENA TORRES RUIZ',
      iconNombre: 'fas fa-regular fa-user text-light fa-3x',
      nombre: 'Elena',
      iconCorreo: 'fas fa-regular fa-envelope text-light fa-3x',
      correo: 'eletorrui@alu.edu.gva.es',
      iconApellido: 'fas fa-regular fa-id-card text-light fa-3x',
      apellido: 'Torres Ruiz',
      iconCurso: 'fas fa-solid fa-chalkboard text-light fa-3x',
      curso: 'CAE / ES',
      iconContrasenya: 'fas fa-solid fa-lock text-light fa-3x',
      contrasenya: '***************',
      iconTelefono: 'fas fa-phone fa-phone text-light fa-3x',
      telefono: '777777777',
    },
  ]
}
