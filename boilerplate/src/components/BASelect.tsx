// type SelectProps = {
//     label: string,
//     option: string[],
// }

// export default function BASelect(props:SelectProps){
//     const {label, option} = props;
//     return(
//         <>
//         <select name="" id="">{label}</select>
//         </>
//     )
// }

import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps = {
    label: string,
    option: object,
}

export default function BASelect(props:SelectProps) {
  const {label, option} = props;

  const handleChange = (e: SelectChangeEvent) => {
    alert(e.target.value as string);
  };

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label= {label}
          onChange={handleChange}
        >
            {
                Array.isArray(option) && option.map((x,i)=>(
                    <option value={x.value}>{x.displayName}</option>
                ))
            }
        </Select>
  );
}
