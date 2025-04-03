import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Patrick</h1>
                <p className={styles.description}>
                    I'm an aspiring software developer with a passion for creating.
                    I love coding and I'm always eager to learn new technologies.
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
