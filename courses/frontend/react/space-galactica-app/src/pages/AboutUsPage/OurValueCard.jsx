import style from "./OurValueCard.module.css";
export default function OurValueCard({ name, description }) {
  return (
    <div className={style.OurValueCard}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
