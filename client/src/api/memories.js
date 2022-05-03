export const listMemories = (page = 1) => {
    return fetch(`http://localhost:3000/memories?_page=${page}`).then(res => res.json());
}