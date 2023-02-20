import React from 'react';
import {FieldRenderProps} from "react-final-form";

interface ITextInput extends FieldRenderProps<string, any> {
  type?: string,
}

const TextInput: React.FC<ITextInput> = ({ type, input,...rest}) => {
  return (
    <input {...input} className="p-2 w-full border-gray-300 text-gray-500 border rounded-lg focus:border-gray-500 outline-none invalid:border-red-500" type={type}{...rest}/>
  )
};

export default TextInput;