
import Calendar from 'react-calendar';
import styles from './CalendarContainer.module.css';
import 'react-calendar/dist/Calendar.css';
import './CalendarCustom.css';

const CalendarContainer = () => {
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarText}>
                Cześć! Poznaj swojego korepetytora języka polskiego jako obcego.
                Nazywam się Natalia. Moja przygoda z językiem polskim rozpoczęła się wiele lat temu, w 1995 roku. 
                Od 2016 roku mieszkam w Polsce, a nauczanie języka polskiego stało się moją prawdziwą pasją! 
                Już od 6 lat pomagam uczniom odkrywać tajemnice polskiego języka, kultury i obyczajów.
                Niezależnie od Twojego poziomu – od początkującego po zaawansowany – razem osiągniemy Twoje 
                cele językowe!
            </div>
            <Calendar locale="pl-PL" />
        </div>
    )
}

export {CalendarContainer}; 