import React from "react";

import styles from "./About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>
                                I am an aspiring software developer currently enrolled in the Computer Programming and Analysis program at George Brown College, with an expected graduation in 2026. Passionate about problem-solving and software development, I am eager to expand my skills and gain hands-on experience in the field.

                                My academic journey has provided me with a strong foundation in programming, data structures, and software development methodologies. I am particularly interested in object-oriented programming and full-stack development. Currently, I am working on projects involving Python, Java and Asp.net focusing on building efficient and scalable applications.

                                I am always looking for opportunities to learn, collaborate, and contribute to meaningful projects. Feel free to connect with me!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
