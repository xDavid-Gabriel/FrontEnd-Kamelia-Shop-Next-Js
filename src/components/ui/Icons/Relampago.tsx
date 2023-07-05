
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const Relampago = ({ size = 23, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 23 19" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path d="M11.1225 14.0477C9.9872 14.0477 9.06293 14.979 9.06293 16.1345C9.06109 16.4062 9.11299 16.6756 9.21565 16.9271C9.31832 17.1787 9.46972 17.4074 9.66114 17.6002C9.85256 17.793 10.0802 17.946 10.331 18.0505C10.5818 18.155 10.8508 18.2088 11.1225 18.2089C11.6717 18.2066 12.1977 17.9874 12.5859 17.599C12.9742 17.2106 13.1932 16.6845 13.1953 16.1353C13.1953 14.993 12.271 14.0485 11.1217 14.0485L11.1225 14.0477ZM11.1225 16.798C11.0357 16.7979 10.9497 16.7806 10.8696 16.7472C10.7895 16.7138 10.7167 16.665 10.6555 16.6034C10.5943 16.5418 10.5459 16.4688 10.513 16.3885C10.4801 16.3082 10.4633 16.2221 10.4637 16.1353C10.4637 15.7686 10.7581 15.4579 11.1217 15.4579C11.4861 15.4579 11.7945 15.7538 11.7945 16.1353C11.7957 16.2235 11.779 16.3111 11.7455 16.3927C11.712 16.4743 11.6623 16.5482 11.5994 16.6101C11.5366 16.672 11.4619 16.7206 11.3798 16.7529C11.2977 16.7852 11.2099 16.8005 11.1217 16.798H11.1225ZM20.9273 11.9882H11.1217C10.9364 11.9846 10.7597 11.909 10.6291 11.7775C10.4985 11.646 10.4241 11.4689 10.4217 11.2835C10.4217 10.902 10.7441 10.578 11.1225 10.578H20.9273C21.0114 10.578 21.0815 10.578 21.1516 10.536C21.2128 10.5193 21.27 10.4904 21.3198 10.4511C21.3478 10.4371 21.3758 10.4091 21.4039 10.381C21.5128 10.2856 21.5868 10.1565 21.6141 10.0143L22.8467 4.27327C22.8696 4.17045 22.8689 4.06377 22.8447 3.96126C22.8204 3.85875 22.7732 3.76309 22.7066 3.68149C22.6392 3.60217 22.5555 3.5384 22.4611 3.49457C22.3667 3.45075 22.264 3.42792 22.1599 3.42765H10.1974L9.46939 0.535716C9.43422 0.383573 9.34859 0.247814 9.22643 0.150541C9.10427 0.0532679 8.95279 0.000208305 8.79663 0L6.97691 0C6.59849 0 6.27612 0.3247 6.27612 0.705463C6.27612 1.08623 6.59849 1.41015 6.97691 1.41015H8.25157L10.2683 9.35089C9.89328 9.51593 9.57439 9.78654 9.35054 10.1297C9.12669 10.4729 9.00755 10.8738 9.00765 11.2835C9.00765 12.4398 9.95995 13.3991 11.1085 13.3991H20.9141C21.1011 13.3991 21.2804 13.3248 21.4126 13.1926C21.5449 13.0604 21.6192 12.881 21.6192 12.694C21.6192 12.5071 21.5449 12.3277 21.4126 12.1955C21.2804 12.0633 21.1011 11.989 20.9141 11.989H20.9281L20.9273 11.9882ZM10.6179 4.83779H21.2917L20.3667 9.16712H11.6831L10.6187 4.83779H10.6179ZM20.9273 14.0477C19.7928 14.0477 18.8686 14.979 18.8686 16.1345C18.8667 16.4062 18.9186 16.6754 19.0212 16.9269C19.1238 17.1784 19.2751 17.4071 19.4665 17.5999C19.6578 17.7927 19.8854 17.9458 20.1361 18.0503C20.3868 18.1548 20.6557 18.2087 20.9273 18.2089C21.4765 18.2066 22.0025 17.9874 22.3908 17.599C22.779 17.2106 22.9981 16.6845 23.0001 16.1353C23.0001 14.993 22.0758 14.0477 20.9273 14.0477ZM20.9273 16.798C20.8405 16.7979 20.7546 16.7806 20.6745 16.7472C20.5943 16.7138 20.5216 16.665 20.4604 16.6034C20.3992 16.5418 20.3507 16.4688 20.3178 16.3885C20.2849 16.3082 20.2682 16.2221 20.2686 16.1353C20.2686 15.7686 20.5629 15.4579 20.9273 15.4579C21.2917 15.4579 21.5993 15.7538 21.5993 16.1353C21.6005 16.2235 21.5838 16.3109 21.5504 16.3925C21.5169 16.474 21.4673 16.548 21.4045 16.6099C21.3418 16.6717 21.2671 16.7203 21.1851 16.7526C21.1031 16.785 21.0154 16.8004 20.9273 16.798Z" fill={fill} {...props}/>
<path d="M7.08817 6.26195H2.10088C2.00834 6.26258 1.91662 6.24475 1.83105 6.20951C1.74549 6.17427 1.66781 6.12233 1.60256 6.05672C1.53731 5.9911 1.4858 5.91314 1.45103 5.82738C1.41627 5.74162 1.39895 5.6498 1.40009 5.55727C1.40009 5.16249 1.70921 4.85181 2.10088 4.85181H7.08817C7.47984 4.85181 7.78896 5.16249 7.78896 5.55727C7.7901 5.6498 7.77279 5.74162 7.73802 5.82738C7.70326 5.91314 7.65174 5.9911 7.58649 6.05672C7.52124 6.12233 7.44356 6.17427 7.358 6.20951C7.27244 6.24475 7.18071 6.26258 7.08817 6.26195ZM7.08817 12.6376H2.10088C2.00828 12.6382 1.91648 12.6204 1.83087 12.5851C1.74526 12.5498 1.66754 12.4978 1.60228 12.4321C1.53702 12.3664 1.48552 12.2883 1.4508 12.2025C1.41608 12.1166 1.39884 12.0247 1.40009 11.9321C1.40009 11.5374 1.70921 11.2267 2.10088 11.2267H7.08817C7.47984 11.2267 7.78896 11.5374 7.78896 11.9321C7.79021 12.0247 7.77297 12.1166 7.73825 12.2025C7.70353 12.2883 7.65203 12.3664 7.58677 12.4321C7.52151 12.4978 7.4438 12.5498 7.35818 12.5851C7.27257 12.6204 7.18077 12.6382 7.08817 12.6376ZM7.08817 9.44977H0.700075C0.607541 9.4503 0.51583 9.43237 0.430306 9.39704C0.344782 9.3617 0.267162 9.30967 0.201983 9.24398C0.136805 9.1783 0.0853768 9.10028 0.0507064 9.01448C0.0160361 8.92868 -0.00118072 8.83684 6.28694e-05 8.74431C6.28694e-05 8.34953 0.308411 8.03963 0.700854 8.03963H7.08817C7.47984 8.03963 7.78896 8.34953 7.78896 8.74431C7.79021 8.8369 7.77297 8.92881 7.73825 9.01466C7.70353 9.10051 7.65203 9.17857 7.58677 9.24426C7.52151 9.30996 7.4438 9.36197 7.35818 9.39726C7.27257 9.43255 7.18077 9.4504 7.08817 9.44977Z" fill={fill} {...props}/>
</svg>

);