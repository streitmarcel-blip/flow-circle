import React, { useState, useEffect } from 'react';
import { useSound } from '../../hooks/useSound';

const CircularTimer = ({ duration = 25, onComplete, onStart, onPause }) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60);
    const [isActive, setIsActive] = useState(false);
    const { playGong } = useSound();

    // SVG Config
    const radius = 120;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - ((duration * 60 - timeLeft) / (duration * 60)) * circumference;

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            playGong(); // Sound effect
            onComplete && onComplete();
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, onComplete, playGong]);

    const toggleTimer = () => {
        const newState = !isActive;
        setIsActive(newState);
        if (newState) {
            onStart && onStart();
        } else {
            onPause && onPause();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs} `;
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* Glow Effect behind the timer - Continuous for 'Full Circle' feel */}
            <div className={`absolute w-full h-full rounded-full blur-[50px] transition-all duration-1000 ${isActive ? 'bg-primary/60 scale-110' : 'bg-primary/30 scale-100'}`} />

            {/* Inner ambient glow to simulate 'Sun' inside */}
            <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse" />

            {/* Content Container - Elevated Z-Index to stay crisp above glows */}
            <div className="relative z-20">
                <svg
                    height={radius * 2}
                    width={radius * 2}
                    className="rotate-[-90deg] transform drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]"
                >
                    {/* Background Ring (Inactive) */}
                    <circle
                        stroke="var(--color-ring-inactive)"
                        strokeWidth={stroke}
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        className=""
                    />
                    {/* Progress Ring (Active) */}
                    <circle
                        stroke="var(--color-ring-active)"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                        strokeLinecap="round"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        className="transition-all duration-500"
                    />
                </svg>

                {/* Time Display & Controls inside circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-light tabular-nums tracking-tight text-text-main">
                        {formatTime(timeLeft)}
                    </span>
                    <button
                        onClick={toggleTimer}
                        className="mt-4 px-6 py-2 rounded-full bg-bg-card border border-primary/20 text-sm font-medium hover:bg-primary/10 transition-colors uppercase tracking-widest"
                    >
                        {isActive ? 'Pause' : 'Flow'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CircularTimer;
