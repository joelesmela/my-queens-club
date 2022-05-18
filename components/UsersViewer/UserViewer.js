import { React, useState, useEffect } from 'react';
import { GetLocalStorage } from '../../helper/GetLocalStorage';
import styles from './userViewer.module.css';

function UserViewer() {
  const [accessToken, setAccessToken] = useState('');
  const [users, serUsers] = useState([]);

  const getUsers = async (token) => {
    const resp = await fetch(`http://localhost:8000/user/${token}`, {
      method: 'GET',

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await resp.json();
    serUsers(json);
  };

  useEffect(() => {
    const token = GetLocalStorage('accessToken');
    setAccessToken(token);
    getUsers(accessToken);
    console.log(users);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
      <table className="table">
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
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default UserViewer;
