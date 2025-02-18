import React, { useState } from 'react';
import DateStep from './DateStep';
import TimeStep from './TimeStep';
import DetailsStep from './DetailsStep';
import { Booking } from '../models/types';

export const BookingForm: React.FC = () => {  // Explicit export
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState<Booking>({
        date: null,
        time: '',
        name: '',
        phone: '',
        guests: 1,
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleDateChange = (date: Date | null) => {
        setBookingData({ ...bookingData, date: date }); // Tydligare tilldelning
    };

    const handleGuestsChange = (guests: number) => {
        setBookingData({ ...bookingData, guests: guests }); // Tydligare tilldelning
    };

    const handleTimeChange = (time: string) => {
        setBookingData({ ...bookingData, time: time }); // Tydligare tilldelning
    };

    const handleDetailsChange = (name: string, phone: string) => {
        setBookingData({ ...bookingData, name: name, phone: phone }); // Tydligare tilldelning
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log('Bokning skapad:', bookingData);
        } catch (error) {
            console.error('Fel vid bokning:', error);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <DateStep
                    date={bookingData.date}
                    guests={bookingData.guests}
                    onDateChange={handleDateChange}
                    onGuestsChange={handleGuestsChange}
                    onNext={handleNext} />;
            case 2:
                return (
                    <TimeStep
                        date={bookingData.date}
                        time={bookingData.time}
                        onTimeChange={handleTimeChange}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                );
            case 3:
                return (
                    <DetailsStep
                        name={bookingData.name}
                        phone={bookingData.phone}
                        onDetailsChange={handleDetailsChange}
                        onSubmit={handleSubmit}
                        onPrevious={handlePrevious}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Bokningsformulär</h1>
            {renderStep()}
        </div>
    );
};