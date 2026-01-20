import { useState, useEffect } from 'react';

const STORAGE_KEY = 'flow_circle_tasks';

export const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [
            { id: 1, time: '09:00', title: 'Start your flow', type: 'focus', duration: '25 min' }
        ];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks(prev => [...prev, { ...task, id: Date.now() }]);
    };

    const removeTask = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    return { tasks, addTask, removeTask };
};
