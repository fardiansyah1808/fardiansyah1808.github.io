import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useJoke(name) {
    const [joke, setJoke] = useState('');
    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios.get(
                `https://api.chucknorris.io/jokes/random?name=${name}`,
            );
            // console.log(data);
            setJoke(data.value);
        };
        getJoke();
    }, [name]);
    return joke;
}
