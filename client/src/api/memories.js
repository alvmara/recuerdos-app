// TODO: add token from localStorage or redux
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY0ODNjMTA2LTdkNmEtNDBjYi1hYjA4LTJkNmMwZjJjYTc0ZCIsImVtYWlsIjoiZWx0aW92YXJpQGppbWFpbC5jb20iLCJ1c2VyTmFtZSI6ImVsdGlvdmFyaSIsInBhc3N3b3JkIjoiMTIzNCJ9.lWpJXHX75rk9iyBGltTdvaCFx8rQ1LYXOYCrWYwPEUw';


export const listMemories = (page = 1) => {
    return fetch(`http://localhost:3000/memories?_page=${page}`).then(res => res.json());
}

export const uploadImages = (images) => {
    const formData = new FormData();

    images.forEach(image => {
        formData.append('images', image);
    });
    

    return fetch(`http://localhost:3000/memories/images/upload`, {
        method: 'POST',
        body: formData,
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => res.json());
}


export const createMemory = (memory) => {
    return fetch(`http://localhost:3000/memories/create`, {
        method: 'POST',
        body: JSON.stringify(memory),
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    }).then(res => res.json());  
};