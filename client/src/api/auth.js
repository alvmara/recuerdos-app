export const loginUser = (emailOrUsername, password) => {
    return fetch('http://localhost:8082/auth/login', {
        method: 'POST',
        body: JSON.stringify({ emailOrUsername, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(console.error);
}

export const registerUser = ({ email, userName, password }) => {
    return fetch('http://localhost:8082/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, userName, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(console.error);
}