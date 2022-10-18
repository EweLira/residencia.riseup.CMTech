import { useState } from "react";
import { AddressInfo } from "./components/AddressInfo"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { MySnackbar } from "./components/MySnackbar"


function App() {

  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  const [zipCode, setZipCode] = useState('');
  const [dataAddress, setDataAddress] = useState({});

  const [variant, setVariant] = React.useState('success');
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);


   React.useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	function openNotification(variant, message, open){
		setVariant(variant);
		setMessage(message);
		setOpen(open);
	}
	function closeNotification(){
		setOpen(false);
	}


  function handleChangeZipCode(event) {
    setZipCode(event.target.value);
  }

  function handleClickSearchButton() {
    if (zipCode.length < 8) {
		openNotification("info", "Informe o CEP corretamente!", true); 
		setLoading(false); 
    } else {

	  setLoading(true);	
	  timer.current = window.setTimeout(() => {
		fetch(`https://viacep.com.br/ws/${zipCode}/json`, { mode: 'cors' })
			.then((res) => res.json())
			.then((data) => {
			if (data.hasOwnProperty("erro")) {
				setLoading(false);
				openNotification("error", "Cep não existente.", true);
			} else {
				setDataAddress(data);
				setLoading(false);
				openNotification("success", "Cep encontrado com sucesso!", true);
			}
			})
			.catch(err => { openNotification("error", err.message, true); console.log(err); setLoading(false); });

		}, 2000);

    }
  }


  return (
    <div>
      <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
			<TextField id="filled-basic" label="CEP" variant="outlined" value={zipCode} onChange={handleChangeZipCode}
			placeholder="Digite seu cep" />
			<Button variant="contained" endIcon={<SendIcon />} onClick={handleClickSearchButton}> Pesquisar </Button>
	  </Box>

      <AddressInfo
        address={dataAddress.logradouro}
        district={dataAddress.bairro}
        city={dataAddress.localidade}
        state={dataAddress.uf}
      />

		{loading && (
			<CircularProgress size={68} style={{marginLeft: '50%',marginTop: '50%' }}
				sx={{
				color: green[500],
				position: 'absolute',
				top: 0,
				left: -20,
				zIndex: 1,
			}}
		/>
		)}

		<MySnackbar
			variant={variant}
			message={message}
			isOpen={open}
			toClose={closeNotification} 
		/>


    </div>
  )
}

export default App