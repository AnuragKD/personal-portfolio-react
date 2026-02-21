import Standout from "../assets/svgs/banner-illustration.svg?react";
import Separator from "../assets/svgs/separator.svg?react";
import Logo from "../assets/svgs/logo.svg?react";
import MessageProgramming from "../assets/icons/message-programming.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Github from "../assets/icons/github.svg?react";
import Experience from "../assets/svgs/experience.svg?react";
import Project from "../assets/svgs/Project.svg?react";
import Client from "../assets/svgs/client.svg?react";

const icons = {

  // design elements
  standout: Standout,
  separator: Separator,
  logo:Logo,

  // icons
  messageprogramming: MessageProgramming,
  linkedin : Linkedin,
  github : Github,
  experience : Experience,
  project : Project,
  client : Client,
};

export default function Icon({ name, className, ...props }) {
  const Svg = icons[name];

  if (!Svg) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  return <Svg className={className} {...props} />;
}
