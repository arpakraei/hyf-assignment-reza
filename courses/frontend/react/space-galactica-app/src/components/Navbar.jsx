import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { NavItem } from "./NavItem.jsx";
import { useWishlist } from "../contexts/WishlistContext.jsx";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { wishlistCount } = useWishlist();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* 🧑🏽‍🚀 Done Task - Week 2 */}
          {/* Create a <NavItem> component, which accepts the following props: title, link, isActive.  */}
          {navbarItems.map((item, index) => {
            return (
              <>
                <NavItem
                  title={item.title}
                  url={item.link}
                  prefix={"0" + (index + 1).toString()}
                  isActive={item.link === currentPath}
                />
              </>
            );
          })}
          {/* 🧑🏽‍🚀 Done Task - Week 3 */}
          {/* Replace repeating content by using .map() and the previously created NavItem component. 
          <li className={styles.wishlistBadge} aria-label="Wishlist"></li> */}
        </ul>
        {/* 🧑🏽‍🚀 Done Task - Week 4 - part 3 */}
        {/* Take the count of the planets wishlist from the context and display it in the Badge. */}
        <Badge count={wishlistCount}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
