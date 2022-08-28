const urls = {
    baseUrl: location.origin,
    thumbnailUrl(url) {
        return new URL("/storage/thumbnails/" + url, location.origin);
    },

    imageUrl(url) {
        return new URL("/storage/images/" + url, location.origin);
    },
};

export default urls;
