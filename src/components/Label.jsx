export default function Label({ value, children, ...props }) {
    return (
        <label className='text-slate mb-1 block' {...props}>
            {value || children}
        </label>
    );
}
