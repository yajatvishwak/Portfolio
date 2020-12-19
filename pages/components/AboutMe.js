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
      </div>

      <ContactButton />
    </div>
  );
};

export default AboutMe;
