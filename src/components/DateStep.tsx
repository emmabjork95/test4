import React from 'react';
import DatePicker from 'react-datepicker'; //behöver ladda ner: npm install react-datepicker @types/react-datepicker
import 'react-datepicker/dist/react-datepicker.css';
import { DateStepProps } from '../models/types';


const DateStep: React.FC<DateStepProps> = ({ date, guests, onDateChange, onGuestsChange, onNext }) => {
    const guestOptions = Array.from({ length: 6 }, (_, i) => i + 1); // Skapa array med alternativ 1-6

    return (
        <div>
            <h2>Välj datum och antal personer</h2>
            <DatePicker selected={date} onChange={onDateChange} />
            <label htmlFor="guests">Antal personer:</label>
            <select id="guests" value={guests} onChange={(e) => onGuestsChange(Number(e.target.value))}>
                {guestOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button onClick={onNext}>Nästa</button>
        </div>
    );
};

export default DateStep;