import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isDark, setIsDark] = useState(true);
    const date = new Date();

    // Formatting: "Wednesday, 24"
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    const day = date.getDate();

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.remove('light');
        } else {
            root.classList.add('light');
        }
    }, [isDark]);

    return (
        <header className="w-full flex items-center justify-between py-6">
            <div className="flex flex-col">
                <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Today</span>
                <h1 className="text-3xl font-bold text-text-main leading-none mt-1">
                    {weekday}, {day}
                </h1>
            </div>

            {/* Theme Toggle & Menu */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="w-10 h-10 rounded-full hover:bg-bg-card/50 flex items-center justify-center transition-colors text-text-main"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>

                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center text-xs font-bold text-primary">
                    FC
                </div>
            </div>
        </header>
    );
};

export default Header;
