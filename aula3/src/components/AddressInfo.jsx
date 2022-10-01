export function AddressInfo(props){
    return(
        <div>
            <p>Endereço: {props.address}</p>
            <p>Bairro: {props.district}</p>
            <p>Cidade: {props.city}</p>
            <p>Estado: {props.state}</p>
        </div>
    )
}