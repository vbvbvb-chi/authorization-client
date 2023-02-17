import { ButtonHTMLAttributes } from "react";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<iButtonProps> = ({ ...rest}) => {
  return(
    <button className="select-none"/>
  )
};

export default Button;