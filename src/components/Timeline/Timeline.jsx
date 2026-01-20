import React from 'react';

const mockSchedule = [
    { id: 1, time: '09:00', title: 'Deep Work', type: 'focus', duration: '90 min' },
    { id: 2, time: '10:30', title: 'Pause & Coffee', type: 'break', duration: '15 min' },
    { id: 3, time: '10:45', title: 'Team Sync', type: 'meeting', duration: '30 min' },
    { id: 4, time: '11:15', title: 'Email & Admin', type: 'admin', duration: '45 min' },
    { id: 5, time: '12:00', title: 'Mittagspause', type: 'break', duration: '60 min' },
];

const TimelineCard = ({ item, isActive }) => {
    // Dynamic styles based on type and active state
    const isFocus = item.type === 'focus';

    return (
        <div className={`relative pl-4 pb-8 border-l-2 ${isActive ? 'border-primary' : 'border-white/10'} last:border-0 group transition-all duration-500`}>
            {/* Time Dot on the line */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-bg-deep transition-all duration-500
        ${isActive ? 'bg-primary shadow-[0_0_10px_rgba(192,132,252,0.8)] scale-110' : 'bg-bg-subtle'}`}
            />

            {/* The Card */}
            <div className={`ml-4 p-4 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-[1.02]
        ${isActive
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30 shadow-[0_0_20px_rgba(192,132,252,0.1)]'
                    : 'bg-bg-card/40 border-white/5 hover:border-white/10 hover:bg-bg-card/60'
                }
      `}>
                <div className="flex justify-between items-start mb-1">
                    <span className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                        {item.time}
                    </span>
                    <span className="text-xs text-text-muted/50 bg-black/20 px-2 py-0.5 rounded-full">
                        {item.duration}
                    </span>
                </div>

                <h3 className={`text-lg font-light ${isActive ? 'text-white drop-shadow-md' : 'text-text-main'}`}>
                    {item.title}
                </h3>

                {isFocus && isActive && (
                    <p className="text-xs text-primary/70 mt-2 animate-pulse">Running...</p>
                )}
            </div>
        </div>
    );
};

const Timeline = ({ tasks, onAdd }) => {
    // Find the active task based on current time (mock logic for now, or passed in)
    // For now, let's just highlight the first "focus" task
    const activeId = tasks.find(t => t.type === 'focus')?.id;

    return (
        <div className="w-full max-w-sm mt-8 px-4 animate-fade-in-up">
            <h2 className="text-text-muted text-xs uppercase tracking-[0.2em] mb-6 pl-2">
                Deine Missionen
            </h2>
            <div className="flex flex-col">
                {tasks.map(item => (
                    <TimelineCard key={item.id} item={item} isActive={item.id === activeId} />
                ))}

                {/* 'Add' Button */}
                <div className="relative pl-4 pt-2 border-l-2 border-transparent">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/10" />
                    <button
                        onClick={onAdd}
                        className="ml-4 w-full py-3 rounded-2xl border-2 border-dashed border-text-muted/20 text-text-muted/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span className="group-hover:rotate-90 transition-transform duration-300 text-xl leading-none">+</span>
                        <span className="text-sm">Neuer Block</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
