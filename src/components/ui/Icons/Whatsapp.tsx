
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const Whatsapp = ({ size = 23, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 23 23" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.7715 13.7832C16.4833 13.6406 15.0772 12.9521 14.815 12.8555C14.5528 12.762 14.3627 12.7144 14.171 12.9996C13.8854 13.3843 13.5835 13.7568 13.2664 14.1159C13.0977 14.306 12.9306 14.329 12.6454 14.188C12.3586 14.0438 11.4371 13.7433 10.3438 12.7742C9.7185 12.1989 9.18211 11.5338 8.75224 10.8008C8.58511 10.5157 8.73384 10.3623 8.87797 10.2197C9.00677 10.0925 9.16317 9.88699 9.3073 9.72139C9.4499 9.55425 9.49744 9.43619 9.5925 9.24605C9.6891 9.05592 9.64157 8.89032 9.56797 8.74619C9.49744 8.60359 8.92551 7.20213 8.68631 6.63173C8.45477 6.07666 8.21864 6.15333 8.04231 6.1426C7.85993 6.13551 7.67742 6.13245 7.49491 6.1334C7.34986 6.13697 7.20712 6.17057 7.07569 6.23206C6.94427 6.29355 6.82701 6.3816 6.73131 6.49066C6.46911 6.77433 5.73005 7.46433 5.73005 8.86579C5.73005 10.2673 6.75431 11.6212 6.89845 11.8113C7.04258 12.0014 8.91631 14.878 11.7867 16.1108C12.4706 16.4052 13.0026 16.58 13.4182 16.7103C14.0017 16.8876 14.6186 16.9264 15.2198 16.8238C15.7688 16.7425 16.9126 16.1338 17.1518 15.4698C17.3895 14.8044 17.3895 14.234 17.3189 14.1159C17.2469 13.9963 17.0583 13.9258 16.7715 13.7832ZM11.549 20.8779H11.546C9.84178 20.8781 8.16866 20.4217 6.70065 19.5562L6.35411 19.3522L2.75079 20.2922L3.71219 16.7962L3.48526 16.4389C2.5323 14.9302 2.02766 13.1818 2.03013 11.3973C2.03319 6.1748 6.30198 1.92594 11.5521 1.92594C14.0959 1.92594 16.4848 2.91187 18.2834 4.70127C19.1681 5.57879 19.8698 6.62321 20.3477 7.77396C20.8257 8.92472 21.0705 10.1589 21.0679 11.405C21.0649 16.6275 16.7961 20.8779 11.549 20.8779ZM19.6496 3.34274C18.5872 2.27796 17.3243 1.43431 15.9339 0.860568C14.5435 0.286823 13.0532 -0.00564105 11.549 8.24079e-05C5.23785 8.24079e-05 0.0996664 5.1122 0.0965997 11.3973C0.0942099 13.3978 0.621668 15.3632 1.62533 17.0936L0 23L6.07198 21.4145C7.75271 22.3255 9.63425 22.8025 11.546 22.8022H11.549C17.8602 22.8022 22.9984 17.6901 22.9999 11.405C23.0052 9.90594 22.7116 8.42089 22.1364 7.0366C21.5611 5.65232 20.7157 4.39657 19.6496 3.34274Z" fill={fill} {...props}/>
</svg>

);