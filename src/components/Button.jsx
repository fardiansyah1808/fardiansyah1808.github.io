import clsx from 'clsx';

export default function Button(props) {
    const {
        children,
        text,
        className = 'bg-neutral-900 text-violet-50',
        type = 'submit',
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 inline-flex justify-center whitespace-nowrap gap-x-1 items-center px-4 py-2 rounded-md',
            )}>
            {text || children}
        </button>
    );
}
