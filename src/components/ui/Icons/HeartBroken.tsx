
import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  fill?: string;
}

export const HeartBroken = ({ size = 23, fill = "currentColor", ...props }: Props) => (
  <svg width={size} height={size} viewBox="0 0 23 21" fill={fill} {...props} xmlns="http://www.w3.org/2000/svg">
<path d="M21.269 1.80368C19.0682 -0.526577 15.243 -0.526577 13.0435 1.80368L11.5073 3.4282L9.97116 1.80368C8.87322 0.637945 7.41091 0 5.85902 0C5.0817 3.19715e-05 4.31271 0.160202 3.60002 0.470522C2.88732 0.780843 2.2462 1.23466 1.71662 1.80368C0.605508 2.9865 -0.00895979 4.55084 9.87499e-05 6.17366C9.87499e-05 7.83207 0.617464 9.38033 1.71662 10.5436L10.965 20.3392C11.0303 20.4151 11.1113 20.4759 11.2025 20.5172C11.2936 20.5586 11.3927 20.5797 11.4928 20.5789C11.5927 20.5795 11.6915 20.5584 11.7825 20.517C11.8734 20.4756 11.9542 20.4149 12.0194 20.3392L19.2195 12.7298C19.2195 12.7298 19.2341 12.7298 19.2341 12.6984L21.2677 10.5436C22.3826 9.39728 23 7.85023 23 6.19061C23 4.53219 22.3826 2.95246 21.269 1.80368ZM2.77219 9.41059C1.95054 8.53389 1.49685 7.37518 1.50478 6.17366C1.50478 4.94498 1.95751 3.79619 2.76977 2.93551C3.16413 2.51078 3.64226 2.17241 4.17397 1.94177C4.70569 1.71112 5.27944 1.59321 5.85902 1.59547C7.04896 1.59547 8.0888 2.07362 8.90227 2.93551L10.5728 4.70651L9.27753 6.07803C9.19363 6.17509 9.13698 6.29268 9.11338 6.4188C9.08977 6.54491 9.10005 6.67502 9.14316 6.79587C9.24848 7.03555 9.47364 7.21107 9.73027 7.21107H12.1247L9.5039 9.9868C9.41406 10.0804 9.3534 10.1981 9.32933 10.3256C9.30525 10.453 9.3188 10.5847 9.36832 10.7046C9.40838 10.8249 9.4852 10.9296 9.58793 11.0039C9.69066 11.0781 9.81413 11.1183 9.9409 11.1186H12.0048L9.39858 13.8786C9.30875 13.9722 9.24809 14.0899 9.22401 14.2174C9.19994 14.3448 9.21349 14.4766 9.26301 14.5965C9.30559 14.7152 9.38301 14.8184 9.48517 14.8925C9.58732 14.9666 9.70945 15.0081 9.83558 15.0117H12.0048L10.0317 17.101L2.77098 9.4118L2.77219 9.41059ZM20.2134 9.41059L18.6918 11.04L17.6229 12.1573L11.4928 18.6493L10.9057 18.0271L13.9477 14.8047C14.0392 14.7121 14.101 14.5943 14.1251 14.4665C14.1493 14.3386 14.1347 14.2064 14.0833 14.0868C14.0399 13.97 13.9617 13.8692 13.8594 13.798C13.757 13.7269 13.6354 13.6887 13.5107 13.6886H11.3427L13.9489 10.9286C14.0399 10.8324 14.101 10.712 14.1251 10.5818C14.1491 10.4517 14.1351 10.3173 14.0845 10.195C14.0413 10.0779 13.9632 9.97691 13.8609 9.9055C13.7585 9.83408 13.6367 9.79571 13.5119 9.79554H11.4468L14.0833 7.00408C14.2649 6.82855 14.3097 6.54166 14.2189 6.28624C14.1706 6.16971 14.0893 6.06982 13.985 5.99886C13.8807 5.92789 13.7579 5.88893 13.6318 5.88676H11.2362L11.4625 5.63256L11.5073 5.68098L12.5774 4.56366L14.1136 2.93672C15.7405 1.19721 18.5719 1.19721 20.2146 2.93672C21.0414 3.78167 21.4941 4.93045 21.4941 6.19061C21.4941 7.45076 21.0414 8.56807 20.2134 9.41301V9.41059Z" fill={fill} {...props}/>
</svg>

);
