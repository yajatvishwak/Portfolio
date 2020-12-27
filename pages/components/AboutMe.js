import style from "./AboutMe.module.css";
import React from "react";
import ContactButton from "./ContactButton";

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>About Me</div>
      <div className={style.content}>
        Hey there, I am so glad you are here. I am Yajat Vishwakarma. I am a
        programmer who loves to innovate. I appreciate technology and
        engineering mainly because of the adrenaline rush it brings with every
        successful compilation. I'm your guy for "repairing your printer" to
        helping you "scale a kubernetes cluster". This site is my portfolio
        which comprises of my works, achievements and failures. Looking forward
        to see you in my DMs soon!
        <img
          className={style.picture}
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></img>
      </div>
      <div className={style.contactMe}>
        <ContactButton />
      </div>
    </div>
  );
};

export default AboutMe;
