import React from 'react';
import { useState } from 'react';
import styles from './Rating.module.css';
import iconLogo from '../../assets/icon-star.svg';
import { useNavigate } from 'react-router-dom';


function Rating() {
  const [rating, setRating] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);
  const navigate = useNavigate();

  return (
    <div className={styles["star-rating"]}>
      <div className={styles['icon-container']}>
        <img src={iconLogo} alt="icon logo" className={styles.icon} />
      </div>
      <h2 className={styles.header}>How did we do?</h2>
      <p className={styles.paragraph}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={styles['button-container']}>

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <span  key={i}>
            <button onClick={() => {
              setRating(ratingValue);
              setClickedButton(ratingValue);
            }} value={ratingValue} className={`${styles.button} button ${clickedButton === ratingValue ? styles.clicked : ''}`} >{ratingValue}</button>
          </span>
        )
      })}
      </div>

      <button className={styles.submit} onClick={() => {
        navigate('/Thank', { state: { rating: rating } });
      }}>SUBMIT</button>
    </div>
  )

}
export default Rating;