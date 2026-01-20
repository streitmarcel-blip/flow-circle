import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import CircularTimer from './components/Timer/CircularTimer';
import TaskInput from './components/Task/TaskInput';
import Timeline from './components/Timeline/Timeline';
import { useTasks } from './hooks/useTasks';

function App() {
  const [task, setTask] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const { tasks, addTask } = useTasks();

  const handleAddTask = () => {
    // Quick Prompt for now (can be replaced by Modal later)
    const title = prompt("Titel der Aufgabe:");
    const time = prompt("Uhrzeit (z.B. 10:00):", "10:00");
    if (title && time) {
      addTask({ title, time, type: 'focus', duration: '25 min' });
    }
  };

  // Sync "Current Mission" with the first task if timer starts
  // This logic can be refined to auto-pick based on time
  useEffect(() => {
    if (isTimerActive && !task && tasks.length > 0) {
      setTask(tasks[0].title);
    }
  }, [isTimerActive, tasks]);

  return (
    <Layout>
      <Header />

      {/* Scrollable Content Container */}
      <div className="flex-1 w-full overflow-y-auto pb-20 custom-scrollbar">
        <div className="flex flex-col items-center justify-center pt-8">
          <div className="mb-8">
            {/* Timer controls the 'Active' state visual */}
            <CircularTimer
              duration={25}
              onStart={() => setIsTimerActive(true)}
              onPause={() => setIsTimerActive(false)}
            />
          </div>

          {/* Task Section */}
          <div className="w-full flex flex-col items-center min-h-[4rem] mb-4">
            {isTimerActive && task ? (
              <div className="animate-fade-in text-center">
                <span className="text-sm text-primary uppercase tracking-widest mb-1 block">
                  Current Mission
                </span>
                <p className="text-2xl font-light text-text-main animate-pulse">
                  {task}
                </p>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <span className="text-sm text-text-muted/50 uppercase tracking-widest mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">
                  Dein Fokus
                </span>
                <TaskInput
                  value={task}
                  onChange={setTask}
                  onEnter={() => setIsTimerActive(true)}
                />
              </div>
            )}
          </div>

          {/* Timeline Section */}
          <Timeline tasks={tasks} onAdd={handleAddTask} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
