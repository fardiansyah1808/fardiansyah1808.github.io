import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { IconCheck, IconCircleDashed } from '@tabler/icons-react';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || [],
    );

    const handleAddTask = (e) => {
        e.preventDefault();
        const addNewTask = [
            ...tasks,
            {
                id: Math.floor(Math.random() * 1000),
                taskName: newTask,
                isCompleted: false,
            },
        ];
        if (!newTask) return;
        setTasks(addNewTask);
        localStorage.setItem('tasks', JSON.stringify(addNewTask));
        setNewTask('');
    };

    const handleCompleteTask = (id) => {
        const updateTasks = tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
        );
        setTasks(updateTasks);
    };

    const handleDeleteTask = (id) => {
        const removeTask = tasks.filter((task) => task.id !== id);
        setTasks(removeTask);
        localStorage.setItem('tasks', JSON.stringify(removeTask));
    };

    return (
        <Card>
            <Card.Title>Todos App</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-4'>
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <Button
                            className='bg-violet-700 hover:bg-violet-500 text-white'
                            onClick={handleAddTask}>
                            Add Task
                        </Button>
                    </div>
                </form>
                {tasks.length > 0 && (
                    <p className='text-md font-bold mt-8'>Your Tasks:</p>
                )}
                {tasks.length > 0 ? (
                    <ol className='space-y-2 mt-4'>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className='flex items-center justify-between gap-x-4'>
                                {task.isCompleted ? (
                                    <span
                                        className={`text-md font-semibold flex items-center`}>
                                        <IconCheck className='w-4 h-4 mr-2 text-green-600' />
                                        {task.taskName}
                                    </span>
                                ) : (
                                    <span className='text-md font-semibold flex items-center'>
                                        <IconCircleDashed className='w-4 h-4 mr-2 text-orange-500' />
                                        {task.taskName}
                                    </span>
                                )}
                                <div className='flex gap-x-2 items-center'>
                                    <Button
                                        className='px-2 py-1 border border-green-500 text-xs rounded-md text-neutral-500 hover:bg-green-500 hover:text-white'
                                        onClick={() =>
                                            handleCompleteTask(task.id)
                                        }>
                                        Set to{' '}
                                        {task.isCompleted
                                            ? 'Completed'
                                            : 'Incomplete'}
                                    </Button>
                                    <Button
                                        className='px-2 py-1 border border-red-500 text-xs rounded-md text-neutral-500 hover:bg-red-500 hover:text-white'
                                        onClick={() =>
                                            handleDeleteTask(task.id)
                                        }>
                                        Delete Task
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p className='text-md font-bold mt-8'>You have no tasks</p>
                )}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks</Card.Footer>
        </Card>
    );
}
