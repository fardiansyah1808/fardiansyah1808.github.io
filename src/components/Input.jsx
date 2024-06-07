export default function Input({ type = 'text', ...props }) {
    return (
        <input
            type={type}
            {...props}
            className='transition border-slate-300 shadow-sm rounded-lg w-full focus:outline-none focus:ring focus:border-violet-300 focus:ring-violet-300'
        />
    );
}
