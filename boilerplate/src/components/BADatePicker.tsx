type dateProps = {
    change : any,
}
export default function BADatePicker(props:dateProps) {
    const {change} = props;
  return (
    <div>
      <input type="date" onChange={(e)=>{change(e)}} name="" id="" />
    </div>
  )
}