
export const getMemoriesLiked = ({ token }) => {
    return fetch('http://localhost:3000/userLikes/getUserLikes', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json()).catch(console.error);
}

export const createLike = (memoryId, { token }) => {
    return fetch('http://localhost:3000/userLikes/likeMemory', {
        method: 'POST',
        body: JSON.stringify({ memoryId }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json()).catch(console.error);
}

export const deleteLike = (memoryId, { token }) => {
    return fetch('http://localhost:3000/userLikes/unlikeMemory', {
        method: 'POST',
        body: JSON.stringify({ memoryId }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json()).catch(console.error);
}