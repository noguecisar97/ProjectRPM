import React, { Component } from 'react'
import './index.css'

export default class Exibicao extends Component{

    compara(){
        setTimeout(() => {
            const botaoPerfil = document.querySelectorAll('.p-menuitem-link')           
            botaoPerfil[2].setAttribute('style','display:none')
            
            const usuario = JSON.parse(localStorage.getItem('perfil'))[0]            
            const elem = document.querySelector('#nome')
            elem.innerHTML = 
                    `<div id='showPerfil'>                        
                        <div id='showImage'>
                            <img src='${usuario.Nome}.jpg' alt='${usuario.Nome}'/>
                        </div>
                        <div id='showDados'>
                            <h1>${usuario.NomeCompleto}</h1> 
                            <h2>Raça: ${usuario.Raca}</h2>
                            <h3>Idade: ${usuario.Idade} Anos</h3>
                            <h4>Respiração: ${usuario.Respiracao}</h4>
                        </div>            
                    </div>`            
                    
            if(!localStorage.getItem('perfil')){
                    window.location = 'http://localhost:3000/'
                }  
        }, 10);                
    }  

    render(){
        return(
            <div id='exbody'>                
                <h1 id='nome'></h1> 
                {this.compara()}    
            </div>
        )
    }
}