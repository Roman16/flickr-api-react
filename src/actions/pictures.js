import http from './request';

export const SearchSmagesByTags = (tag, page) => {
    const APIKey = '6923175a90528c7b260417efe063fe63';
    const url = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${APIKey}&tags=${tag}&per_page=10&page=${page}&format=json&nojsoncallback=1`;

    return http('get', url)
};