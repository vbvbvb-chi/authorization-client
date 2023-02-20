import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<boolean, any>;

const CheckboxInput: React.FC<Props> = ({input: {value, ...input}}: Props) => {
  return (
    <input className="checked:bg-teal-100" {...input} type="checkbox" checked={value}/>
  )
};

export default CheckboxInput