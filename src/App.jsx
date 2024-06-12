import Card from './components/Card.jsx';
import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import useJoke from './hooks/useJoke.jsx';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';
import { useRef, useState } from 'react';

export default function App() {
    const nameRef = useRef();
    const [name, setName] = useState('Zakaria');
    const joke = useJoke(name);
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Chuck Norris Jokes</Card.Title>
                <Card.Body>{joke}</Card.Body>
                <Card.Footer>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-row gap-4'>
                        <Input placeholder='Enter your name' ref={nameRef} />
                        <Button>Get Joke</Button>
                    </form>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
