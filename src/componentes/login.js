import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    render() {
        return(
            <div className="a">
                <Link to={`/home`}>
                    <Button style={styles.yellowButton} className="yellowButton">Entrar</Button>
                </Link>
                
            </div>
        );
    }
}

var styles = {
    yellowButton:{
        color: "black",
        background: "yellow"
    }
}

export default Login;