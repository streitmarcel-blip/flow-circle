import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import CircularTimer from './components/Timer/CircularTimer';
import TaskInput from './components/Task/TaskInput';
import Timeline from './components/Timeline/Timeline';
import { useTasks } from './hooks/useTasks';
import { useCurrentTime } from './hooks/useCurrentTime';
import { calculateEndTime, isTimePast } from './utils/timeUtils';

function App() {
  const [task, setTask] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const { tasks, addTask, updateTask, removeTask } = useTasks();
  const currentTime = useCurrentTime();

  // Filter tasks that are NOT in the past
  const activeTasks = tasks.filter(t => {
    const endTime = calculateEndTime(t.time, t.duration);
    return !isTimePast(endTime, currentTime);
  }).sort((a, b) => a.time.localeCompare(b.time));

  const handleAddTask = (newTask) => {
    // newTask comes from Timeline Modal now
    if (newTask && newTask.title) {
      addTask(newTask);
    }
  };

  // Sync "Current Mission" with the first ACTIVE task if timer starts
  useEffect(() => {
    if (activeTasks.length > 0) {
      // Always suggest the top task from the active list
      if (!isTimerActive || !task) {
        setTask(activeTasks[0].title);
      }
    } else {
      setTask(''); // No tasks left
    }
  }, [activeTasks, isTimerActive]);

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
          <Timeline tasks={activeTasks} onAdd={handleAddTask} onUpdate={updateTask} onDelete={removeTask} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
