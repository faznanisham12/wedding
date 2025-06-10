import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { openCalendarInvite } from "@/utils/calendarUtils";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  
  const handleClick = () => {
    openCalendarInvite({
      title,
      description,
      location,
      startDate,
      endDate,
    });
  };

  // Theme-specific styling
  const getThemeStyles = () => {
    if (theme === 'bride') {
      return `
        bg-bride-accent hover:bg-bride-accent 
        text-bride-heading border-bride-border/40 
        shadow-bride-accent/20 hover:shadow-bride-accent/30
      `;
    } else if (theme === 'groom') {
      return `
        bg-groom-accent/90 hover:bg-groom-accent 
        text-groom-heading border-groom-accent/40 
        shadow-groom-accent/20 hover:shadow-groom-accent/30
        font-sans tracking-tight
      `;
    }
    return `
      bg-gray-800/90 hover:bg-gray-800 
      text-white border-gray-700/40 
      shadow-gray-800/20 hover:shadow-gray-800/30
      font-sans
    `;
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        relative px-6 py-3 
        border-2 rounded-lg
        transition-all duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-lg
        active:translate-y-0 active:shadow-md
        ${getThemeStyles()}
        ${className}
      `}
      size="lg"
    >
      <Calendar className="mr-3 h-4 w-4" />
      <span className="text-sm font-medium">Add to Calendar</span>
    </Button>
  );
};

export default CalendarInviteButton;