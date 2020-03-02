import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';
import './excel.css'
 
class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  desativar(){
    setTimeout(() => {
      const botaoPerfil = document.querySelectorAll('.p-menuitem')
      const perfilBotao = botaoPerfil[1]
      const perfilBotaoMain = botaoPerfil[0]
    
      perfilBotao.setAttribute('style','display:none')
      perfilBotaoMain.setAttribute('style','display:none')
    }, 10);
  }
    
  handleChange(e) {
    const files = e.target.files;
    console.log(files)
    console.log(e)
    if (files && files[0]) this.setState({ file: files[0] });
    console.log(files)
  };
  
  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        localStorage.setItem('base',JSON.stringify(this.state.data, null, 2));             
      }); 
      document.location = '/'
    };
 
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };

  }
 
  render() {
    return (
      <div id="up" onLoad={this.desativar()}>
        <label htmlFor="file">Faça Update de seu Banco de Dados</label>
        <br />
        <input type="file" className="form-control estilo" id="file" accept={SheetJSFT} onChange={this.handleChange} />
        <br />
        <input type='submit' 
          value="Importar para o Site"
          onClick={this.handleFile} />
          
          </div>     
    )
  }
}
 
export default ExcelReader;