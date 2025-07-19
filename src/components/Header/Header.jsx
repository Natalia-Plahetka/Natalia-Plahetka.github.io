import tutorPhoto from '../../assets/tutor-photo.jpg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerPhoto}>
        <img src={tutorPhoto} alt="Lektorka języka polskiego" />
      </div>
      <div className={styles.headerText}>
        <h1 className={styles.polishFlagText}>Język polski</h1>
        <h2>
          przygotowania do egzaminu certyfikatowego na poziomie B1,
          rozmowy na Kartę Polaka lub Kartę Stałego Pobytu, lekcje indywidualne
        </h2>
      </div>
    </header>
  );
}