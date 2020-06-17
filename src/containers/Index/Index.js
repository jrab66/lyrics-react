import React from 'react';
import { Link } from 'react-router-dom';

const IndexMenu = () => {
    return(
        <div class="d-flex flex-column align-items-center">
            <img src="https://http.cat/400" alt="400"></img>
            <h1>404</h1>
            <h2>Esa ruta no existe.</h2>
            <Link to="/tareas">Bienvenido</Link>
        </div>
    )
}

export default IndexMenu;