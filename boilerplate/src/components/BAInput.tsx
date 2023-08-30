import TextField from '@mui/material/TextField';

type inputProps = {
 label: string,
}

export default function BAInput(props: inputProps){
   const {label} = props;
 return(
    <>
     <TextField id="outlined-basic" label={label} variant="outlined" />
    </>
 )       
}