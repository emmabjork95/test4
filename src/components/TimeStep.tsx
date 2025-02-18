import React from 'react';
import { TimeSlot, TimeStepProps } from '../models/types';


const TimeStep: React.FC<TimeStepProps> = ({ date, time, onTimeChange, onNext, onPrevious }) => {
    const timeSlots: TimeSlot[] = [
        { id: '1', time: '18:00' },
        { id: '2', time: '21:00' },
    ];

    return (
        <div>
            <h2>Välj tid</h2>
            {timeSlots.map((slot: TimeSlot) => ( // Explicit typning av slot
                <button key={slot.id} onClick={() => onTimeChange(slot.time)}>
                    {slot.time}
                </button>
            ))}
            <button onClick={onPrevious}>Föregående</button>
            <button onClick={onNext}>Nästa</button>
        </div>
    );
};

export default TimeStep;