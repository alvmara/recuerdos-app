

export const listMemories = (page = 1) => {
    return fetch(`http://localhost:3000/memories?_page=${page}`).then(res => res.json());
}

export const uploadImages = (images) => {
    const formData = new FormData();

    images.forEach(image => {
        formData.append('images', image);
    });
    
    console.log('Fetch upload images')

    const token = 'eyJhbGciOiJIUzI1NiJ9.ZWx0aW92YXJpZjQ4M2MxMDYtN2Q2YS00MGNiLWFiMDgtMmQ2YzBmMmNhNzRk.8SH07sXV1f3ThIc5IqUE_lAuURy86rX4fxIbdEVU6Tw';

    return fetch(`http://localhost:3000/memories/images/upload`, {
        method: 'POST',
        body: formData,
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => res.json());

}