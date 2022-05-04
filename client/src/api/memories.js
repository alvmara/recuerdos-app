export const listMemories = (page = 1) => {
    return fetch(`http://localhost:3000/memories?_page=${page}`).then(res => res.json()).catch(console.error);
}

export const uploadImages = (images, { token }) => {
    const formData = new FormData();

    images.forEach(image => {
        formData.append('images', image);
    });
    

    return fetch(`http://localhost:3000/memories/images/upload`, {
        method: 'POST',
        body: formData,
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => res.json()).catch(console.error);
}


export const createMemory = (memory, { token }) => {
    return fetch(`http://localhost:3000/memories/create`, {
        method: 'POST',
        body: JSON.stringify(memory),
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    }).then(res => res.json()).catch(console.error);  
};


export const createComment = (memoryId, comment, { token}) => {
    return fetch(`http://localhost:3000/memories/${memoryId}/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    }).then(res => res.json()).catch(console.error);
}

export const search = ({ searchText, page = 1}, { token }) => {
    return fetch(`http://localhost:3000/memories/search`, {
        method: 'POST',
        body: JSON.stringify({ searchText, page }),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    }).then(res => res.json()).catch(console.error);
}