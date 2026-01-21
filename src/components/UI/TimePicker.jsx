import React, { useRef, useEffect, useState } from 'react';

const ITEM_HEIGHT = 40; // Height of each number item in pixels

const WheelColumn = ({ items, value, onChange, label }) => {
    const scrollRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // Initial Scroll Position
    useEffect(() => {
        if (scrollRef.current && !isScrolling) {
            const index = items.indexOf(value);
            if (index !== -1) {
                scrollRef.current.scrollTop = index * ITEM_HEIGHT;
            }
        }
    }, [value, items]);

    // Precise Mouse Wheel Handling
    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const direction = Math.sign(e.deltaY);
            if (direction !== 0) {
                element.scrollTop += direction * ITEM_HEIGHT;
            }
        };

        element.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            element.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleScroll = (e) => {
        setIsScrolling(true);
        // We will debounce the "snap" logic or just read the value after scroll stops
        // For now, simpler: just calculate nearest index on scroll end would be ideal, 
        // but let's update live.

        clearTimeout(scrollRef.current.timer);
        scrollRef.current.timer = setTimeout(() => {
            setIsScrolling(false);
            const scrollTop = e.target.scrollTop;
            const index = Math.round(scrollTop / ITEM_HEIGHT);
            const safeIndex = Math.max(0, Math.min(index, items.length - 1));
            const activeItem = items[safeIndex];

            if (activeItem !== value) {
                onChange(activeItem);
                // Optional: Snap visually if not perfectly aligned
                // e.target.scrollTo({ top: safeIndex * ITEM_HEIGHT, behavior: 'smooth' });
            }
        }, 150); // Wait for scroll to stop
    };

    return (
        <div className="relative w-16 h-[200px] flex flex-col items-center">
            {/* Label */}
            <div className="absolute -top-6 text-xs text-text-muted uppercase tracking-wider font-medium">
                {label}
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-y-auto no-scrollbar snap-y snap-mandatory py-[80px]" // Padding = (ContainerHeight / 2) - (ItemHeight / 2)
            >
                {items.map((item) => (
                    <div
                        key={item}
                        className={`h-[40px] flex items-center justify-center snap-center transition-all duration-200 ${item === value ? 'text-text-main font-bold scale-110' : 'text-text-muted/40 font-light'}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TimePicker = ({ value, onChange }) => {
    // Value format: "HH:MM"
    const [hours, minutes] = value.split(':');

    // Generate arrays
    const hourItems = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minuteItems = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0')); // 5-minute steps for easier scrolling

    const handleHourChange = (newHour) => {
        onChange(`${newHour}:${minutes}`);
    };

    const handleMinuteChange = (newMinute) => {
        onChange(`${hours}:${newMinute}`);
    };

    return (
        <div className="relative w-full h-[200px] bg-bg-deep/50 rounded-2xl border border-white/5 flex justify-center gap-8 overflow-hidden">
            {/* Selection Highlight Bar (Glassmorphic Window) */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-[40px] bg-white/5 border-y border-white/10 pointer-events-none z-0" />

            {/* Gradient Masks */}
            <div className="absolute top-0 w-full h-[80px] bg-gradient-to-b from-bg-card to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-bg-card to-transparent z-10 pointer-events-none" />

            {/* Columns */}
            <div className="z-20 flex gap-8">
                <WheelColumn
                    label="Std"
                    items={hourItems}
                    value={hours}
                    onChange={handleHourChange}
                />
                <span className="relative top-[88px] text-text-muted font-light">:</span>
                <WheelColumn
                    label="Min"
                    items={minuteItems}
                    value={minutes}
                    onChange={handleMinuteChange}
                />
            </div>
        </div>
    );
};

export default TimePicker;
