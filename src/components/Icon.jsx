import Standout from "../assets/svgs/banner-illustration.svg?react";
import Separator from "../assets/svgs/separator.svg?react";
import Logo from "../assets/svgs/logo.svg?react";

const icons = {
  standout: Standout,
  separator: Separator,
  logo:Logo,
};

export default function Icon({ name, className, ...props }) {
  const Svg = icons[name];

  if (!Svg) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  return <Svg className={className} {...props} />;
}
