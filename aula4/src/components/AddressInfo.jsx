import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: '#f5f5f5',
	width:400,
}));

export function AddressInfo(props) {
	return (
	<Box>
		<Grid container spacing={2}>
			<Grid item xs={12} md={12}>
				<Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
					Localização
				</Typography>
				<Demo>
					<List>
						<ListItem>
							<ListItemText primary={props.address} secondary="Endereço"/>
						</ListItem>
						<ListItem>
							<ListItemText primary={props.district} secondary="Bairro"/>
						</ListItem>
						<ListItem>
							<ListItemText primary={props.city} secondary="Cidade"/>
						</ListItem>
						<ListItem>
							<ListItemText primary={props.state} secondary="Estado"/>
						</ListItem>
					</List>
				</Demo>
			</Grid>
		</Grid>
	</Box>
	)
}