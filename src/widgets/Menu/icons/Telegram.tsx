import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10 0.3125C4.64813 0.3125 0.3125 4.64875 0.3125 10C0.3125 15.3512 4.64875 19.6875 10 19.6875C15.3519 19.6875 19.6875 15.3512 19.6875 10C19.6875 4.64875 15.3512 0.3125 10 0.3125ZM14.7581 6.94938L13.1681 14.4419C13.0506 14.9731 12.7344 15.1019 12.2931 14.8519L9.87125 13.0669L8.70312 14.1919C8.57438 14.3206 8.465 14.43 8.215 14.43L8.38688 11.965L12.875 7.91C13.0706 7.73812 12.8319 7.64062 12.5737 7.8125L7.02688 11.3044L4.63625 10.5581C4.11688 10.3944 4.105 10.0387 4.74563 9.78875L14.0856 6.18688C14.5194 6.03063 14.8981 6.2925 14.7575 6.94875L14.7581 6.94938Z" />
    </Svg>
  );
};

export default Icon;