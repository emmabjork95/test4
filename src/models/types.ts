export interface Booking {
    date: Date | null;
    time: string;
    name: string;
    phone: string;
    guests: number;
  }
  
  export interface TimeSlot {
    id: string;
    time: string;
  }

  export interface DateStepProps {
      date: Date | null;
      guests: number;
      onDateChange: (date: Date | null) => void;
      onGuestsChange: (guests: number) => void;
      onNext: () => void;
  }


  export interface DetailsStepProps {
      name: string;
      phone: string;
      onDetailsChange: (name: string, phone: string) => void;
      onSubmit: () => void;
      onPrevious: () => void;
  }

  export interface TimeStepProps {
    date: Date | null;
    time: string;
    onTimeChange: (time: string) => void;
    onNext: () => void;
    onPrevious: () => void;
}