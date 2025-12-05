import Standout from "../assets/svgs/banner-illustration.svg?react";
// import ArrowRight from "@/assets/icons/arrows/arrow-right.svg?react";

const icons = {
  standout: Standout,
//   instagram: Instagram,

};

export default function Icon({ name, className, ...props }) {
  const Svg = icons[name];

  if (!Svg) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  return <Svg className={className} {...props} />;
}
