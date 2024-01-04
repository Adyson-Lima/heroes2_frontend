import {Link, useNavigate, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import api from '../../services/api';

export default function Heroes(){

  const[my_heroes, setHeroes] = useState([]);
  const navigate = useNavigate();

  // Read, carrega dados da api
  useEffect(() => {
    api.get("api/v1/heroes",{})
    .then(response => {setHeroes(response.data)})
  },[]);

  // UPDATE, atualiza dados na api
  async function updateHero(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('Erro ao atualizar!');      
    }
  }

  // DELETE, remove registro na api
  async function deleteHero(id){
    try {
      await api.delete(`api/v1/heroes/${id}`,{});
      setHeroes(my_heroes.filter(hero => hero.id !== id));
    } catch (error) {
      alert("Erro ao excluir!")      
    }
  }

  return(
    
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Heroes Crud
      </div>
      <div className="card-body">

      <Link data-testid="mylink" className="btn btn-success" 
      style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

      <table data-testid="mytable" className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {my_heroes.map(hero => (
            <tr key={hero.id}>
            <th scope="row">{hero.id}</th>
              <td>{hero.name}</td>
              <td>{hero.description}</td>
              <td>

              <button data-testid="mybtn1" type="button"
              className="btn btn-outline-info" style={{margin: '2px'}}
              onClick={() => updateHero(hero.id)}>Editar</button>

              <button data-testid="mybtn2" type="button"
              className="btn btn-outline-danger" style={{margin: '2px'}}
              onClick={() => deleteHero(hero.id)}>Excluir</button>

              </td>
          </tr>
          ))}
          
        </tbody>
      </table>

      </div>
    </div>
    
  );
}