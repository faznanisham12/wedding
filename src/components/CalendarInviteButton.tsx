
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { openCalendarInvite } from "@/utils/calendarUtils";

interface CalendarInviteButtonProps {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  className?: string;
}

const CalendarInviteButton = ({
  title,
  description,
  location,
  startDate,
  endDate,
  className,
}: CalendarInviteButtonProps) => {
  const handleClick = () => {
    openCalendarInvite({
      title,
      description,
      location,
      startDate,
      endDate,
    });
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      size="lg"
    >
      <Calendar className="mr-2 h-5 w-5" /> Add to Calendar
    </Button>
  );
};

export default CalendarInviteButton;
