
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const Shop = ({ size = 20, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 20 23" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path d="M14.1492 10.3567V10.7926H12.7922V10.3567C12.5741 10.4748 12.3921 10.6498 12.2655 10.8631C12.139 11.0764 12.0727 11.32 12.0737 11.5681C12.0663 11.7561 12.0969 11.9437 12.1637 12.1196C12.2305 12.2955 12.3322 12.4561 12.4626 12.5918C12.593 12.7275 12.7494 12.8354 12.9226 12.9092C13.0957 12.9829 13.282 13.0209 13.4701 13.0209C13.6583 13.0209 13.8446 12.9829 14.0177 12.9092C14.1908 12.8354 14.3473 12.7275 14.4777 12.5918C14.6081 12.4561 14.7098 12.2955 14.7766 12.1196C14.8434 11.9437 14.874 11.7561 14.8666 11.5681C14.8666 11.0511 14.5829 10.5878 14.1492 10.3567ZM13.4701 12.2898C13.3755 12.29 13.2818 12.2714 13.1944 12.2351C13.107 12.1988 13.0277 12.1456 12.961 12.0785C12.8943 12.0114 12.8415 11.9317 12.8058 11.8441C12.7701 11.7565 12.752 11.6627 12.7528 11.5681C12.7528 11.1595 13.078 10.8474 13.4712 10.8474C13.8644 10.8474 14.1897 11.1738 14.1897 11.5681C14.1897 11.9623 13.8644 12.2898 13.4712 12.2898H13.4701ZM19.6801 20.0058L17.7427 8.00196L17.5674 7.33605H14.1503V4.27377C14.154 3.13916 13.7106 2.04876 12.9159 1.23887C12.5195 0.841871 12.0478 0.527861 11.5286 0.315177C11.0094 0.102494 10.4531 -0.00460014 9.892 0.000151459C8.75912 0.00131204 7.67301 0.452009 6.87215 1.25328C6.07129 2.05455 5.62115 3.14089 5.62057 4.27377V7.33605H2.81348L2.14976 7.4171L0.0348584 19.9926C-0.0878082 20.7407 0.115906 21.504 0.604382 22.0878C0.846884 22.3727 1.14814 22.6017 1.48749 22.7592C1.82683 22.9167 2.19623 22.9989 2.57033 23.0001H17.1458C17.5177 22.999 17.885 22.9169 18.222 22.7595C18.559 22.6022 18.8578 22.3733 19.0975 22.0889C19.34 21.8048 19.5177 21.4713 19.6184 21.1115C19.719 20.7518 19.7401 20.3745 19.6801 20.0058ZM6.97647 4.27377C6.97924 3.69843 7.15165 3.1367 7.47213 2.65888C7.79262 2.18107 8.24693 1.80841 8.77819 1.58755C9.30946 1.3667 9.89407 1.30747 10.4588 1.41727C11.0236 1.52708 11.5434 1.80104 11.9532 2.20486C12.4954 2.7492 12.7944 3.4841 12.7944 4.27377V7.33605H6.97647V4.27377ZM13.4712 10.8474C13.8655 10.8474 14.1897 11.1738 14.1897 11.5681C14.1897 11.9623 13.8644 12.2898 13.4712 12.2898C13.3765 12.2901 13.2838 12.2716 13.1963 12.2354C13.1088 12.1992 13.0293 12.146 12.9625 12.0789C12.8957 12.0117 12.8428 11.932 12.807 11.8444C12.7712 11.7567 12.7531 11.6628 12.7539 11.5681C12.7539 11.1595 13.078 10.8474 13.4712 10.8474ZM6.29962 10.8474C6.70595 10.8474 7.01809 11.1738 7.01809 11.5681C7.01809 11.9623 6.70595 12.2898 6.29962 12.2898C6.20458 12.2913 6.11021 12.2736 6.02215 12.2378C5.93409 12.2021 5.85414 12.1489 5.78708 12.0815C5.72003 12.0142 5.66723 11.934 5.63184 11.8458C5.59646 11.7575 5.57922 11.6631 5.58114 11.5681C5.58114 11.1595 5.90643 10.8474 6.29962 10.8474ZM18.0679 21.204C17.8379 21.4756 17.4984 21.6388 17.1468 21.6388H2.57033C2.20343 21.6388 1.87814 21.4756 1.64814 21.204C1.53213 21.0715 1.44746 20.9145 1.40044 20.7448C1.35341 20.5751 1.34524 20.397 1.37652 20.2237L3.30195 8.69634H5.62057V10.3567C5.40429 10.4769 5.22382 10.6524 5.09759 10.8653C4.97135 11.0781 4.90389 11.3206 4.90209 11.5681C4.90209 12.3435 5.53952 12.97 6.29852 12.97C7.05752 12.97 7.69495 12.3435 7.69495 11.5681C7.69495 11.0511 7.41019 10.5878 6.97647 10.3567V8.69634H12.7922V10.3567C12.5741 10.4748 12.3921 10.6498 12.2655 10.8631C12.139 11.0764 12.0727 11.32 12.0737 11.5681C12.0663 11.7561 12.0969 11.9437 12.1637 12.1196C12.2305 12.2955 12.3322 12.4561 12.4626 12.5918C12.593 12.7275 12.7505 12.8354 12.9237 12.9092C13.0968 12.9829 13.2831 13.0209 13.4712 13.0209C13.6594 13.0209 13.8457 12.9829 14.0188 12.9092C14.1919 12.8354 14.3473 12.7275 14.4777 12.5918C14.6081 12.4561 14.7098 12.2955 14.7766 12.1196C14.8434 11.9437 14.874 11.7561 14.8666 11.5681C14.8666 11.0511 14.5829 10.5878 14.1492 10.3567V8.69634H16.4809L18.3385 20.2237C18.3667 20.397 18.357 20.5744 18.3101 20.7436C18.2632 20.9128 18.1813 21.0699 18.0679 21.204ZM14.1503 10.3567V10.7926H12.7922V10.3567C12.5741 10.4748 12.3921 10.6498 12.2655 10.8631C12.139 11.0764 12.0727 11.32 12.0737 11.5681C12.0663 11.7561 12.0969 11.9437 12.1637 12.1196C12.2305 12.2955 12.3322 12.4561 12.4626 12.5918C12.593 12.7275 12.7494 12.8354 12.9226 12.9092C13.0957 12.9829 13.282 13.0209 13.4701 13.0209C13.6583 13.0209 13.8446 12.9829 14.0177 12.9092C14.1908 12.8354 14.3473 12.7275 14.4777 12.5918C14.6081 12.4561 14.7098 12.2955 14.7766 12.1196C14.8434 11.9437 14.874 11.7561 14.8666 11.5681C14.8666 11.0511 14.5829 10.5878 14.1492 10.3567H14.1503ZM13.4712 12.2898C13.3765 12.2901 13.2838 12.2716 13.1963 12.2354C13.1088 12.1992 13.0293 12.146 12.9625 12.0789C12.8957 12.0117 12.8428 11.932 12.807 11.8444C12.7712 11.7567 12.7531 11.6628 12.7539 11.5681C12.7539 11.1595 13.078 10.8474 13.4712 10.8474C13.8644 10.8474 14.1897 11.1738 14.1897 11.5681C14.1897 11.9623 13.8644 12.2898 13.4712 12.2898Z" fill={fill} {...props}/>
</svg>

);
