import { useEffect, useRef } from 'react';

export default function Input({ isFocused = false, type = 'text', ...props }) {
    const inputRef = useRef();
    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            ref={inputRef}
            type={type}
            {...props}
            className='transition border-slate-300 shadow-sm rounded-lg w-full focus:outline-none focus:ring focus:border-violet-300 focus:ring-violet-300'
        />
    );
}
