import { MdHome, MdDashboard, MdAddTask, MdListAlt, MdInfo } from "react-icons/md";
import type { NavLinkT } from "../types/common";

const NavLinks: NavLinkT[] = [
  {
    title: "Home",
    icon: MdHome,
    link: "/"
  },
  {
    title: "Dashboard",
    icon: MdDashboard,
    link: "/dashboard"
  },
  {
    title: "Create Task",
    icon: MdAddTask,
    link: "/tasks/create"
  },
  {
    title: "All Tasks",
    icon: MdListAlt,
    link: "/tasks"
  },
  {
    title: "About",
    icon: MdInfo,
    link: "/about"
  }
];

export default NavLinks;
