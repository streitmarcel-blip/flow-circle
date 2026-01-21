import React from 'react';

const mockSchedule = [
    { id: 1, time: '09:00', title: 'Deep Work', type: 'focus', duration: '90 min' },
    { id: 2, time: '10:30', title: 'Pause & Coffee', type: 'break', duration: '15 min' },
    { id: 3, time: '10:45', title: 'Team Sync', type: 'meeting', duration: '30 min' },
    { id: 4, time: '11:15', title: 'Email & Admin', type: 'admin', duration: '45 min' },
    { id: 5, time: '12:00', title: 'Mittagspause', type: 'break', duration: '60 min' },
];

import Modal from '../UI/Modal';
import TimePicker from '../UI/TimePicker';
import { useState } from 'react';
import { calculateDuration, calculateEndTime } from '../../utils/timeUtils';

// Helpers
// ... (helpers are imported now)

const TimelineCard = ({ item, isActive, onClick }) => {
    // Dynamic styles based on type and active state
    const isFocus = item.type === 'focus';
    const endTime = calculateEndTime(item.time, item.duration);

    return (
        <div className={`relative pl-4 pb-8 border-l-2 ${isActive ? 'border-primary' : 'border-gold-border'} last:border-0 group transition-all duration-500`}>

            {/* Time Dot on the line */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gold-border transition-all duration-500
                ${isActive ? 'bg-primary shadow-[0_0_10px_rgba(56,5,113,0.8)] scale-110' : 'bg-bg-deep'}`}
            />

            {/* The Card */}
            <div
                onClick={onClick}
                className={`ml-4 p-4 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-[1.02]
                ${isActive
                        ? 'bg-bg-card border-primary/50 shadow-[0_0_20px_rgba(56,5,113,0.3)]'
                        : 'bg-bg-card/40 border-white/5 hover:border-white/10 hover:bg-bg-card/60'
                    }
      `}>
                <div className="flex justify-between items-start mb-1">
                    <span className={`text-sm font-medium ${isActive ? 'text-text-main' : 'text-text-muted'}`}>
                        {item.time} - {endTime}
                    </span>
                    <span className="text-xs text-text-muted bg-duration-bg px-2 py-0.5 rounded-full">
                        {item.duration}
                    </span>
                </div>

                <h3 className={`text-lg font-light ${isActive ? 'text-text-main drop-shadow-md' : 'text-text-main'}`}>
                    {item.title}
                </h3>

                {isFocus && isActive && (
                    <p className="text-xs text-primary-300 mt-2 animate-pulse">Running...</p>
                )}
            </div>
        </div>
    );
};



const Timeline = ({ tasks, onAdd, onUpdate, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [newItem, setNewItem] = useState({ title: '', start: '09:00', end: '10:00' });

    // Find active task
    const activeId = tasks.find(t => t.type === 'focus')?.id;

    const handleSubmit = () => {
        if (!newItem.title) return;
        const duration = calculateDuration(newItem.start, newItem.end);

        const taskData = {
            title: newItem.title,
            time: newItem.start,
            duration: duration,
            type: 'focus'
        };

        if (editId) {
            onUpdate(editId, taskData);
        } else {
            onAdd(taskData);
        }

        setIsModalOpen(false);
        setNewItem({ title: '', start: '09:00', end: '10:00' });
        setEditId(null);
    };

    const handleDelete = () => {
        if (editId) {
            onDelete(editId);
            setIsModalOpen(false);
            setNewItem({ title: '', start: '09:00', end: '10:00' });
            setEditId(null);
        }
    };

    const handleEdit = (item) => {
        const endTime = calculateEndTime(item.time, item.duration);
        setNewItem({ title: item.title, start: item.time, end: endTime });
        setEditId(item.id);
        setIsModalOpen(true);
    };

    const handleNew = () => {
        const now = new Date();
        const start = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const end = calculateEndTime(start, '60');
        
        setNewItem({ title: '', start, end });
        setEditId(null);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full max-w-sm mt-8 px-4 animate-fade-in-up">
            <h2 className="text-text-muted text-xs uppercase tracking-[0.2em] mb-6 pl-2">
                Deine Missionen
            </h2>
            <div className="flex flex-col">
                {tasks.map(item => (
                    <TimelineCard
                        key={item.id}
                        item={item}
                        isActive={item.id === activeId}
                        onClick={() => handleEdit(item)}
                    />
                ))}

                {/* 'Add' Button */}
                <div className="relative pl-4 pt-2 border-l-2 border-transparent">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/10" />
                    <button
                        onClick={handleNew}
                        className="ml-4 w-full py-3 rounded-2xl border-2 border-dashed border-dashed text-text-block hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span className="group-hover:rotate-90 transition-transform duration-300 text-xl leading-none">+</span>
                        <span className="text-sm font-medium tracking-wide">Neuer Block</span>
                    </button>
                </div>
            </div>

            {/* TASK MODAL */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editId ? "Block bearbeiten" : "Neuer Fokus-Block"}
            >
                <div className="flex flex-col gap-6">
                    {/* Title Input */}
                    <div className="space-y-2">
                        <label className="text-xs text-text-muted uppercase tracking-wider">Aufgabe</label>
                        <input
                            type="text"
                            className="w-full bg-bg-deep/50 border border-white/10 rounded-xl px-4 py-3 text-text-main placeholder-text-muted/30 focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="z.B. Deep Work"
                            autoFocus
                            value={newItem.title}
                            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        />
                    </div>

                    {/* Time Selection - WHEEL IOS STYLE */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-text-muted uppercase tracking-wider">Zeitraum</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-primary mb-2">Start</span>
                                <TimePicker
                                    value={newItem.start}
                                    onChange={(val) => setNewItem({ ...newItem, start: val })}
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-text-muted mb-2">Ende</span>
                                <TimePicker
                                    value={newItem.end}
                                    onChange={(val) => setNewItem({ ...newItem, end: val })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons Row */}
                    <div className="flex gap-4">
                        {/* Only show Delete button if editing */}
                        {editId && (
                            <button
                                onClick={handleDelete}
                                className="w-14 flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors border border-red-500/20"
                                title="Block löschen"
                            >
                                <span className="text-xl">🗑️</span>
                            </button>
                        )}

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-95"
                        >
                            {editId ? 'Speichern' : 'Block hinzufügen'}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Timeline;
