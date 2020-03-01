import React, { Component} from 'react';
import './index.css'
import { baseElementEvents } from 'office-ui-fabric-react';

class Login extends Component{
    desativar(){
        const botaoPerfil = document.querySelectorAll('.p-menuitem-link')
        const perfilBotao = botaoPerfil[1]
        
        perfilBotao.setAttribute('style','display:none')
        botaoPerfil[2].setAttribute('style','display:none')
    }

    logado(){
               
        setTimeout(function(){
            const valorD = document.querySelector('#login-rede').value 
            const valor = valorD.toUpperCase()
            const base = JSON.parse(localStorage.getItem('base'))
            const baseDado = []
            const dados = Array.from(base)   
            const perfil = []
            dados.map(dado => {
                if(dado.Nome === valor){                    
                    perfil.push(dado)                    
                }
                baseDado.push(dado)
            })   
            if(perfil[0]){
                localStorage.setItem('perfil', JSON.stringify(perfil)) 
                window.location = '/perfil'
            }            
           
        },100)        
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