import style from "./OurPartners.module.css";
export default function OurPartners() {
  // 🧑🏽‍🚀 Done: Task - Week 1
  // Create the "Our Partners section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/business_partners.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={style.container}>
        <div className={style.partnerCard}>
          <img
            src="./business_partners/alphabet-logo.png"
            alt="alphabet logo"
          />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/amazon_logo.png" alt="amazon logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/CBC_Logo_White.png" alt=" logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/Microsoft-Logo-white.png" alt=" logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/nyu-logo.png" alt=" logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/QueensLogo_white.png" alt=" logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/samsung-logo.png" alt=" logo" />
        </div>
        <div className={style.partnerCard}>
          <img src="./business_partners/sodexo-logo.png" alt=" logo" />
        </div>
      </div>
    </>
  );
}
