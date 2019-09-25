import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Estilo.css';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render() {
        return(
            <div>
                <p className="greyText">Para sair, clique no botão abaixo</p>
                <Link to='/'>
                    <Button variant="danger">Sair</Button>
                </Link>
                
            </div>
        );
    }
}
export default Home;