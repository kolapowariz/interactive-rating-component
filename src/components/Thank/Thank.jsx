import React from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router-dom";
import styles from "./Thank.module.css";
import thankYou from '../../assets/illustration-thank-you.svg'

function Thank() {
  const location = useLocation();
  const rating = location.state.rating;
  console.log(rating)
  return (
    <div className={styles['star-rating']}>
      <img src={thankYou} alt="Thank you icon" className={styles['thank-you']} />

      {rating > 0 ? <div>
        <p className={styles.rate}>You selected {rating} out of 5</p> <h1 className={styles.heading}>Thank you!</h1>
        <p className={styles.appreciate}>We appreciate you taking the time to give rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div> : <p className={styles.rate}>You didn't select any rating. Please go back and select a rating</p>}

    </div>
  );
}

export default Thank;