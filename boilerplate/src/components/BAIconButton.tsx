import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type iconProps = {
    label: string,
    buttonClick: any,
}

export default function BAIconButton(props: iconProps){
    const {label, buttonClick} = props;
    return(
        <>      

        <IconButton color="primary" onClick={buttonClick}>{label}<AddShoppingCartIcon/></IconButton>

        </>
    )
}

