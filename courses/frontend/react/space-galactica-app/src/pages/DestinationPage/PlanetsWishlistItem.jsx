// 🧑🏽‍🚀 Done Task - Week 2
// Move this to its own file in this folder.
import styles from "./DestinationPage.module.css";
export default function PlanetsWishlistItem({ name, thumbnail, onRemove }) {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={() => onRemove(name)}>remove</button>
    </div>
  );
}
