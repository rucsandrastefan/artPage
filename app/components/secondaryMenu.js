import React, { useState, useRef } from "react";
import styles from "./secondary.module.scss";
import Image from "next/image";
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Join the community",
    src: "community.jpg",
  },
  {
    title: "Access archives",
    src: "artists.jpg",
  },
  {
    title: "Connect with others",
    src: "connect.jpg",
  },
  {
    title: "Share your creations",
    src: "share.jpg",
  },
];
const scaleAnimation = {
    initial: { scale: 1 },
    hover: { opacity: 0.5 , transition: { duration: 0.4 } },
  };

export default function Secondary({ scrollToForm }) {
  const [selectedItem, setSelectedItem] = useState(0);
  
  const handleMouseOver = (index) => {
    setSelectedItem(index);
   
  };
  const handleClick = () => {
    scrollToForm();
  };
 
  return (
    <div   className={styles.projects}>
      <div className={styles.projectDescription}>

        <motion.div
           
            className={styles.imageContainer}
          >
          <Image
            src={`/images/${projects[selectedItem].src}`}
            width={500} // Adjust width according to your design
            height={600} // Adjust height according to your design
            alt="project image"
            priority={true}
          />
          </motion.div>
      
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectEl}
              onMouseOver={() => handleMouseOver(index)}
              onClick={handleClick}
              variants={scaleAnimation}
              initial="initial"
              whileHover="hover"
            >
              <h2>{project.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
