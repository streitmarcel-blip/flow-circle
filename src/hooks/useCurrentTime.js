import { useState, useEffect } from 'react';

export const useCurrentTime = () => {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 30000); // Check every 30s

        return () => clearInterval(timer);
    }, []);

    return time;
};
