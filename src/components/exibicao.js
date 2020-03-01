import React, { Component } from 'react'

export default class Exibicao extends Component{

    compara(){
        const usuario = JSON.parse(localStorage.getItem('search'))
        const tabela = JSON.parse(localStorage.getItem('mysql'))
        const dados = Array.from(tabela)
        dados.map((dado, index) => {
            if(dado.Login === usuario){
                localStorage.setItem('search',JSON.stringify(dado))              
            }
        })
        setTimeout(() => {
            const user = JSON.parse(localStorage.getItem('search'))
            const elem = document.querySelector('#nome')
            elem.innerHTML = `<div>
                    <h1>${user.Nome}</h1>                   
                </div>`

            if(!localStorage.getItem('search')){
                window.location = 'http://localhost:3000/'
            }  
        }, 2000);
    }

    
    

    render(){
        return(
            <div id='exbody'>
                {this.compara()}
                <h1 id='nome'></h1>     
            </div>
        )
    }
}