import {
  Blocks,
  Briefcase,
  Gamepad2,
  Gem,
  GraduationCap,
  Heart,
  Snowflake,
  Users,
} from "lucide-react";

// Maps icon names used in src/data/site.js to lucide icons
const icons = {
  blocks: Blocks,
  briefcase: Briefcase,
  gamepad: Gamepad2,
  gem: Gem,
  graduation: GraduationCap,
  heart: Heart,
  snowflake: Snowflake,
  users: Users,
};

function Icon({ name, ...props }) {
  const Component = icons[name] ?? Heart;
  return <Component aria-hidden="true" {...props} />;
}

export default Icon;
