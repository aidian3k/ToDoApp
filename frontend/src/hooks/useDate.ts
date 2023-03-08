export interface DateObject {
    dayName: string,
    monthName: string,
    year: number,
    dayNumber: number,
    utcDate: number
}

export const useDate = () => {
    const currentDate = new Date();

    const day: string = days[currentDate.getDay()];
    const month: string = months[currentDate.getMonth()];
    const year: number = currentDate.getFullYear();

    return {dayName: day, monthName: month, year: year, dayNumber: currentDate.getDate(), utcDate: currentDate.getUTCDay()};
}

export const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];