import style from "./SocialCard.module.css";
const SocialCard = ({ logo }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{logo}</div>
    </div>
  );
};

export default SocialCard;
