import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';
import PlaceContentCenter from '../components/PlaceContentCenter.jsx';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users',
                );
                const users = response.data;
                setUsers(users);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Users</Card.Title>
                <Card.Body>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ol>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <li key={user.id}>
                                        {user.name} ({user.username})
                                    </li>
                                ))
                            ) : (
                                <p>No users found</p>
                            )}
                        </ol>
                    )}
                </Card.Body>
                <Card.Footer>
                    <p>Total Users: {users.length}</p>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
