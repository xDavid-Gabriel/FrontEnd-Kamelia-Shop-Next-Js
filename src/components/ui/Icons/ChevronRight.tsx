
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const ChevronRight = ({ size = 13, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 13 23" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.65472 0.454278L12.5435 10.3458C12.6882 10.4902 12.803 10.6616 12.8813 10.8504C12.9597 11.0392 13 11.2416 13 11.446C13 11.6504 12.9597 11.8528 12.8813 12.0416C12.803 12.2304 12.6882 12.4019 12.5435 12.5462L2.65186 22.4349C2.36054 22.7263 1.96542 22.89 1.55342 22.89C1.14143 22.89 0.746311 22.7263 0.454987 22.4349C0.163664 22.1435 0 21.7483 0 21.3361C0 20.924 0.163664 20.5288 0.454987 20.2374L9.24534 11.4446L0.457848 2.65749C0.165766 2.36608 0.00137429 1.97055 0.000837836 1.55791C0.000301386 1.14526 0.163664 0.749303 0.454987 0.457139C0.746311 0.164975 1.14173 0.000537918 1.55426 1.3174e-06C1.96679 -0.000535283 2.36264 0.162873 2.65472 0.454278Z" fill={fill} {...props}/>
</svg>

);