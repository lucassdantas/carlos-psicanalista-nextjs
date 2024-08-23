import { useState, useEffect } from 'react';

interface Time {
    hours: string;
    minutes: string;
    seconds: string;
}

export const useCountdown = (): Time => {
    const calculateTimeUntilMidnight = (): Time => {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeDiff = midnight.getTime() - now.getTime();

        const hours = Math.floor(timeDiff / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return { hours, minutes, seconds };
    };

    const [time, setTime] = useState<Time>(calculateTimeUntilMidnight);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTime(calculateTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return time;
};
