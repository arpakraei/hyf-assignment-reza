import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";

export const Footer = () => {
  const { pathname } = useLocation();
  const socialMediaItems = [
    {
      url: "https://www.linkedin.com/",
      title: "LinkedIn",
      icon: "./icons/linkedin.png",
    },
    {
      url: "https://facebook.com",
      title: "Facebook",
      icon: "./icons/facebook.png",
    },
    {
      url: "https://instagram.com",
      title: "Instagram",
      icon: "./icons/instagram.png",
    },
    {
      url: "https://tiktok.com",
      title: "Tiktok",
      icon: "./icons/tiktok.png",
    },
    {
      url: "https://google.com",
      title: "On the streets at night",
      icon: "./icons/googlestreet.png",
    },
  ];
  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2026 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Done Task - Week 2 */}
      <Navigation />
      {/* 🧑🏽‍🚀 Done: Task - Week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaItems.map((item, index) => {
            return (
              <li key={index}>
                <SocialMediaItem
                  url={item.url}
                  title={item.title}
                  icon={item.icon}
                />
              </li>
            );

            /* 🧑🏽‍🚀 Done Task - Week 2 */

            /* Create a <SocialMediaItem /> component and replace all of the list items! */

            /* SocialMediaItem should accept the following props: url, title, icon. */

            /* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder. */
          })}
        </ul>
      </div>
    </footer>
  );
};

function Navigation() {
  {
    /* Create a new list for the Pages. */
  }
  const pages = [
    { path: "/", name: "Home" },
    { path: "/about_us", name: "About Us" },
    { path: "/destination", name: "Destination" },
    { path: "/nasa_collaboration", name: "NasaCollaboration" },
  ];
  return (
    <>
      {/* We need to use the <Link /> component here. */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {pages.map((page, index) => (
            <li key={page.path}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}
    </>
  );
}
