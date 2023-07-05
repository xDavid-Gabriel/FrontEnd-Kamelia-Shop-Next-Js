
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const Correo = ({ size = 23, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 23 19" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path d="M2.3 18.4C1.6675 18.4 1.12585 18.1746 0.675052 17.7238C0.224252 17.273 -0.000764714 16.7317 1.95246e-06 16.1V2.3C1.95246e-06 1.6675 0.225402 1.12585 0.676202 0.675052C1.127 0.224252 1.66827 -0.000764714 2.3 1.95246e-06H20.7C21.3325 1.95246e-06 21.8741 0.225402 22.3249 0.676202C22.7757 1.127 23.0008 1.66827 23 2.3V16.1C23 16.7325 22.7746 17.2742 22.3238 17.725C21.873 18.1758 21.3317 18.4008 20.7 18.4H2.3ZM11.5 10.35L2.3 4.6V16.1H20.7V4.6L11.5 10.35ZM11.5 8.05L20.7 2.3H2.3L11.5 8.05ZM2.3 4.6V2.3V16.1V4.6Z" fill={fill} {...props}/>
</svg>

);
