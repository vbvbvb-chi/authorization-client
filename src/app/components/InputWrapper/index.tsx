import {FieldRenderProps} from "react-final-form";

interface IInputWrapperProps extends FieldRenderProps<string, any> {
  children?: React.ReactNode,
  label?: string,
}

const InputWrapper: React.FC<IInputWrapperProps> = ({meta, input, children, label}) => {
  return(
    <div className="w-full">
      <label className='text-gray-500'>{label}</label>
        {children}
      {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
    </div>
  )
}

export default InputWrapper;
