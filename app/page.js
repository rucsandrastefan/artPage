"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useRef } from "react";
import useDimension from "./components/useDimension";
import Navbar from "./components/navbar";
import Secondary from "./components/secondaryMenu";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Home() {
  const gallery = useRef(null);
  const formRef = useRef(null);
  // const { height } = useDimension();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const { height } = dimension;

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    requestAnimationFrame(raf);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const y = useTransform(scrollYProgress, [0, 1.2], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.hero}>
        <a className={styles.textHero}>EXPLORE THE WORLD</a>
        <a className={styles.textHero2}>of ART</a>
        <a className={styles.textHero3}>
          Discover a wide range of digitalized artworks, from Renaissance
          classics to modern masterpieces, all at your fingertips.
        </a>
      </div>

      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />

          <Column images={[images[6], images[7], images[8]]} y={y3} />

          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      <Secondary scrollToForm={scrollToForm}/>
      <div className={styles.hero}>
        <div className={styles.textHero4} ref={formRef}>
          Connect with artists and enthusiasts from across the globe.
        </div>

        <div className={styles.registrationContainer}>
          <h2 className={styles.textJoin}>Join for free</h2>
          <form className={styles.registrationForm}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input type="text" id="name" name="name" required />

            <label className={styles.label} htmlFor="surname">
              Surname
            </label>
            <input type="text" id="surname" name="surname" required />

            <label className={styles.label} htmlFor="email">
              E-mail
            </label>
            <input type="email" id="email" name="email" required />
            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
