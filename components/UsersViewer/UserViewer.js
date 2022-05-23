import { React, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import clientAxios from '../../config/clientAxios';
import styles from './userViewer.module.css';

const UserViewer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    clientAxios.get('/user')
      .then((response) => {
        if (response.status !== 400) {
          setIsLoading(true);
          setUsers(response.data);
        } else {
          Swal.fire({
            icon: 'error',
            iconColor: '#D44F80',
            title: 'Ha ocurrido un error!',
            color: '#FFF8D2',
            background: '#0A1326',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#D44F80',
          });
        }
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const editUser = (id) => {
    alert(id);
  };

  const deleteUser = async (id) => {
    Swal.fire({
      title: 'Estas seguro que quieres eliminar el usuario? ¡Este cambio es irreversible!',
      showDenyButton: true,
      color: '#FFF8D2',
      background: '#0A1326',
      confirmButtonColor: '#D44F80',
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar',
      denyButtonColor: '#D44F80',
    }).then((result) => {
      if (result.isConfirmed) {
        clientAxios.delete(`/user/${id}`)
          .then((response) => {
            if (response.status !== 400) {
              Swal.fire({
                icon: 'success',
                iconColor: '#D44F80',
                title: 'El usuario se eliminó correctamente',
                color: '#FFF8D2',
                background: '#0A1326',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#D44F80',
              });
            } else {
              Swal.fire({
                icon: 'error',
                iconColor: '#D44F80',
                title: 'Ha ocurrido un error!',
                color: '#FFF8D2',
                background: '#0A1326',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#D44F80',
              });
            }
          });
      }
    });
  };

  const handleFilterCat = (cat) => {
    const itemsMap = [];
    users.forEach((user) => {
      if (user.role.toLowerCase() === cat.toLowerCase()) {
        itemsMap.push(user);
      }
    });
    setUsers(itemsMap);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex'>
          <div className='mx-5'>
            <input type="text" className="form-control" aria-label="Sizing example input" placeholder='Buscador'/>
          </div>
          <div>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Filtrar por Roll</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => handleFilterCat('Admin')} >Administrador</a></li>
                <li><a className="dropdown-item" onClick={() => handleFilterCat('queen')}>Queen</a></li>
                <li><a className="dropdown-item" onClick={() => handleFilterCat('client')}>Cliente</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          </div>
        </div>
        {
         !isLoading
           ? <h1>Cargando</h1>
           : <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nombre de usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Perfil</th>

              </tr>
            </thead>
            <tbody>
              {
                users.map((user, i) => (
                  <tr key={i}>
                    <th scope="row">1</th>
                    <td>{user.userName}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button type="button" onClick={() => deleteUser(user._id)} className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                      <button type="button" onClick={() => editUser(user._id)} className="btn btn-success mx-2"><i className="bi bi-pencil-square"></i></button>
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default UserViewer;
