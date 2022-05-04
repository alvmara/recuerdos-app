export const loginUser = (emailOrUsername, password) => {
    return fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ emailOrUsername, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(console.error);
}