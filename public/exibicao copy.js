import React, { Component } from 'react'

export default class Exibicao extends Component{

    compara(){
        setTimeout(() => {
            const usuario = JSON.parse(localStorage.getItem('perfil'))[0]            
            const elem = document.querySelector('#nome')
            elem.innerHTML = 
                    `<div>
                        <img src='${usuario.Nome}.jpg' alt='${usuario.Nome}'/>
                        <h1>${usuario.Nome}</h1> 
                                          
                    </div>`
                    
            if(!localStorage.getItem('perfil')){
                    window.location = 'http://localhost:3000/'
                }  
        }, 200);                
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