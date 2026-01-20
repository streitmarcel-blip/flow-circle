import React from 'react';

const TaskInput = ({ value, onChange, onEnter }) => {
    return (
        <div className="w-full max-w-xs relative group">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onEnter()}
                placeholder="Was ist dein Fokus?"
                className="w-full bg-transparent border-none text-center text-2xl font-light text-text-main placeholder-text-muted/30 focus:outline-none focus:ring-0 transition-all duration-300 py-2 caret-primary"
            />
            {/* Decorative Underline/Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-focus-within:via-primary group-focus-within:w-full transition-all duration-500" />
            {/* Subtle glow effect on focus - handled via CSS/Tailwind group-focus-within if needed, 
          but border-color change is clean enough for ADHD focus. */}
        </div>
    );
};

export default TaskInput;
