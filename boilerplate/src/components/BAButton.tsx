import Button from '@mui/material/Button';

type buttonProps = {
    label: string,
    buttonClick: any,
}

export default function BAButton(props: buttonProps){
    const {label, buttonClick} = props;
    return(
        <>
        <Button variant="contained" onClick={buttonClick}>{label}</Button>
        </>
    )
}