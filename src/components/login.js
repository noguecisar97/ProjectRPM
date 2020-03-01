import React, { Component} from 'react';
import './index.css'
import axios from 'axios'

class Login extends Component{
    desativar(){
        const botaoPerfil = document.querySelectorAll('.p-menuitem-link')
        const perfilBotao = botaoPerfil[1]
        
        perfilBotao.setAttribute('style','display:none')
    }

    logado(){
        axios.get('http://127.0.1.1:8081')
            .then(function(response){
            localStorage.setItem('mysql',JSON.stringify(response.data))   
            console.log(response.data)   
            })
            .catch(function(error){
                console.warn(error)
            });
        
        setTimeout(function(){
            const valor = document.querySelector('#login-rede').value  
            localStorage.setItem('search',JSON.stringify(valor))
            window.location = '/perfil'
        },3000)
        
    }
    
    render(){
        return (
            <div id='center'>
                <div className="conted" onLoad={this.desativar}>                    
                    <img src="3.png" alt="fAMILIA" title="Grupo Kimetsu" /><br />
                    Demon Slayer: <input id='login-rede' type='text' placeholder="Digite seu nome..." />
                    <input className="button-acess" type="button" onClick={this.logado} value="Acessar"/> 
               </div>                 
            </div>  
        ) 
    }
}

export default Login