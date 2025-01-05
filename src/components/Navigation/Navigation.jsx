import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";
export default function Navigation() {
  const buildClasses = ({ isActive }) => {
    return clsx(s.navig, isActive && s.active);
  };
  return (
    <header className={s.navigationHeader}>
      <NavLink to="/" className={buildClasses}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildClasses}>
        Movies
      </NavLink>
    </header>
  );
}
