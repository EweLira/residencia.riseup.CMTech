import { useState } from 'react'
import './App.css'
import { AddressInfo } from './components/AddressInfo'

function App() {
  const [zipCode, setZipCode] = useState('');
  const [dataAddress, setDataAddress] = useState({});

  function handleChangeZipCode(event){
    setZipCode(event.target.value)
  }
  
  function handleClickSearchButton(){
    if (zipCode.length < 8) {
      return;
    } else {
      fetch(`https://viacep.com.br/ws/${zipCode}/json`, { mode: 'cors' })
        .then((res) => res.json())
        .then((data) => {
          if (data.hasOwnProperty("erro")) {
            alert('Cep não existente');
          } else {
            setDataAddress(data);
          }
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="App">
        <input 
        value = {zipCode}
        onChange = {handleChangeZipCode}
        placeholder="Digite seu cep"
        />
        <button onClick={handleClickSearchButton}>
          Pesquisar
          </button>
        <AddressInfo 
          address = {dataAddress.logradouro}
          district = {dataAddress.bairro}
          city = {dataAddress.localidade} 
          state = {dataAddress.uf}
          />
    </div>
  )
}

export default App
