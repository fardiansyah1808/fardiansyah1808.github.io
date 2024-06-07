function Card({ children }) {
    return (
        <div className='shadow rounded-lg overflow-hidden bg-white'>
            {children}
        </div>
    );
}

function Title({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-2xl font-bold'>{children}</h1>
        </div>
    );
}
function Body({ children }) {
    return <div className='p-4 leading-relaxed'>{children}</div>;
}
function Footer({ children }) {
    return (
        <div className='bg-slate-50 p-4 flex flex-end justify-end'>
            {children}
        </div>
    );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
