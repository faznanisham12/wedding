
interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export function generateGoogleCalendarUrl(event: CalendarEventData): string {
  const encodedTitle = encodeURIComponent(event.title);
  const encodedDescription = encodeURIComponent(event.description);
  const encodedLocation = encodeURIComponent(event.location);
  
  // Format dates for Google Calendar
  const startDateFormatted = event.startDate.toISOString().replace(/-|:|\.\d+/g, "");
  const endDateFormatted = event.endDate.toISOString().replace(/-|:|\.\d+/g, "");
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&details=${encodedDescription}&location=${encodedLocation}&dates=${startDateFormatted}/${endDateFormatted}`;
}

export function generateIcsFile(event: CalendarEventData): string {
  // Format dates for ICS file
  const formatDateForIcs = (date: Date): string => {
    return date.toISOString().replace(/-|:|\.\d+/g, "").substring(0, 15) + "Z";
  };
  
  const startDateFormatted = formatDateForIcs(event.startDate);
  const endDateFormatted = formatDateForIcs(event.endDate);
  const now = formatDateForIcs(new Date());
  
  // Create ICS content
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTART:${startDateFormatted}`,
    `DTEND:${endDateFormatted}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  
  return icsContent;
}

export function downloadIcsFile(event: CalendarEventData): void {
  const icsContent = generateIcsFile(event);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  
  // Create a link to download the file
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "wedding_invitation.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function openCalendarInvite(event: CalendarEventData): void {
  // For mobile devices, try to use the universal URL scheme first
  // For desktop, download the ICS file
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/iphone|ipad|ipod|android/.test(userAgent)) {
    // Mobile devices - open Google Calendar URL
    window.open(generateGoogleCalendarUrl(event), '_blank');
  } else {
    // Desktop - download ICS file
    downloadIcsFile(event);
  }
}
