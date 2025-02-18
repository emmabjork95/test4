import React, { useState } from 'react';
import { DetailsStepProps } from '../models/types';


const DetailsStep: React.FC<DetailsStepProps> = ({ name, phone, onDetailsChange, onSubmit, onPrevious }) => {
    const [localName, setLocalName] = useState(name);
    const [localPhone, setLocalPhone] = useState(phone);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalName(e.target.value);
        onDetailsChange(e.target.value, localPhone);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalPhone(e.target.value);
        onDetailsChange(localName, e.target.value);
    };

    return (
        <div>
            <h2>Fyll i dina uppgifter</h2>
            <input type="text" placeholder="Namn" value={localName} onChange={handleNameChange} />
            <input type="text" placeholder="Telefonnummer" value={localPhone} onChange={handlePhoneChange} />
            <button onClick={onPrevious}>Föregående</button>
            <button onClick={onSubmit}>Boka</button>
        </div>
    );
};

export default DetailsStep;