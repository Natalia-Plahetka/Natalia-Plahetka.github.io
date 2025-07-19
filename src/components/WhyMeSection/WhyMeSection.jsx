import styles from './WhyMeSection.module.css';

export default function WhyMeSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Dlaczego warto wybrać moje zajęcia?</h2>
      <ul className={styles.list}>
        <li>
          <strong>Indywidualne podejście</strong><br />
          każda osoba ucząca się jest wyjątkowa, dlatego lekcje dostosowuję do indywidualnych potrzeb, 
          zainteresowań i stylu nauki. Skupiamy się na tym, co najważniejsze – mówieniu, gramatyce, 
          słownictwie lub pisaniu.
        </li>
        <li>
          <strong>Praktyczne materiały</strong><br />
          korzystam z nowoczesnych i ciekawych materiałów, takich jak filmy, podcasty, teksty kulturowe i 
          interaktywne ćwiczenia. Dzięki temu nauka języka polskiego staje się nie tylko łatwiejsza, ale 
          też przyjemniejsza.
        </li>
        <li>
          <strong>Efektywna nauka</strong><br />
          już po krótkim czasie można zauważyć postępy! Dbam o to, by każdy uczący się rozumiał język i czuł 
          się pewnie zarówno w codziennych rozmowach, jak i oficjalnych sytuacjach.
        </li>
        <li>
          <strong>Poznanie kultury Polski</strong><br />
          na lekcjach przybliżam polskie tradycje, zwyczaje i ciekawostki, które pomagają lepiej zrozumieć Polskę 
          i jej mieszkańców.
        </li>
      </ul>
    </section>
  );
}
