import { ButtonHTMLAttributes } from "react";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<iButtonProps> = ({ ...rest}) => {
  return(
    <button 
      className=" py-3 select-none w-full rounded-lg bg-white border-2 border-teal-100 text-gray-500 font-semibolds shadow-md transition-colors hover:bg-teal-100 transp active:bg-teal-200 active:border-teal-200" 
      {...rest}
    />
  )
};

export default Button;