import React from 'react';
import {FieldRenderProps} from "react-final-form";

type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, ...rest} :Props) => {
  return (
    <input className="p-2 w-full border-gray-300 text-gray-500 border rounded-lg focus:border-gray-500 outline-none" type='text' {...input} {...rest}/>
  )
};

export default TextInput;