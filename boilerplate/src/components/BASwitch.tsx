import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BASwitch(){
    return (
        <>
        <Switch {...label} defaultChecked />
        </>
    )
}