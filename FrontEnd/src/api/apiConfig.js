const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'abecefb9de76235e74628a19f8aac338',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;