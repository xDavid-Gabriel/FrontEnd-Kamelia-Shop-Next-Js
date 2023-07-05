
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const Hamburguer = ({ size = 23, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 23 20" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<rect width="23" height="3.53846" rx="1.76923" fill={fill} {...props}/>
<rect x="5.30762" y="7.96155" width="17.6923" height="3.53846" rx="1.76923" fill={fill} {...props}/>
<rect x="12.3848" y="15.9231" width="10.6154" height="3.53846" rx="1.76923" fill={fill} {...props}/>
</svg>

);
