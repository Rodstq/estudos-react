import React from "react";
import styles from "./CardMovie.module.css";

const CardMovie = () => {
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div>
            <p>{genero}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
