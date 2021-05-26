interface BookingWidgetProps {
  booking: BookingWidgetState;
  currentTime: string;
  timeIntervals?: number;
  earliestTime?: string;
  lastestTime?: string;
  numberOfDays?: number;
  onChange: (i: any) => void;
}

interface BookingWidgetState {
  date: string;
  time: string;
}
