import { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input
        ref={ref}
        type={type}
        {...props}
        className='transition border-slate-300 shadow-sm rounded-lg w-full focus:outline-none focus:ring focus:border-violet-300 focus:ring-violet-300'
    />
));

Input.displayName = 'Input';

export default Input;
