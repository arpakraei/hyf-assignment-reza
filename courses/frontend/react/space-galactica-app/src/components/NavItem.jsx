import classNames from "classnames";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export function NavItem({ title, url, prefix, isActive }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link to={url}>
        <b>{prefix} </b>
        {title}
      </Link>
    </li>
  );
}
