import style from "./SocialMediaItem.module.css";
export function SocialMediaItem({ url, title, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={style.footerIcon}
    >
      <img className={style.iconImage} src={icon} alt={title} />
      <span>{title}</span>
    </a>
  );
}
