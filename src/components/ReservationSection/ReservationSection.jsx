import telegramIcon from '../../assets/telegram_logo_icon.png'; ;
import styles from './ReservationSection.module.css';

export default function ReservationSection() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Gotowy na przygodę z językiem polskim?<br />
          <span className={styles.subheading}>
            Skontaktuj się ze mną i rozpocznij swoją podróż w świat polskiego języka i kultury!<br />
            Razem osiągniemy Twoje cele!
          </span>
        </h2>
        <div className={styles.buttonsRow}>
          <a href="https://t.me/natalia_plahetka" target="_blank" rel="noopener noreferrer">
            <button className={styles.button + ' ' + styles.left}>
              Lekcja dla 2 osób<br /><span className={styles.price}>110 zł</span>
            </button>
          </a>
          <a href="https://t.me/natalia_plahetka" target="_blank" rel="noopener noreferrer"> 
            <button className={styles.button + ' ' + styles.right}>
              Lekcja indywidualna<br /><span className={styles.price}>85 zł</span>
            </button>
          </a>
        </div>
        <div className={styles.centerButtonWrapper}>
          <a href="https://t.me/natalia_plahetka" target="_blank" rel="noopener noreferrer">
            <button className={styles.centerButton}>
            Pierwsza lekcja za darmo!<br />
            <span className={styles.centerButtonSub}>30 minut</span>
          </button>
          </a>
        </div>
      </section>
      <div className={styles.linksWrapper}>
          <a href="https://t.me/natalia_plahetkaPL" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram logo" className={styles.iconImg} />
          </a>
      </div>
    </>
  );
}
