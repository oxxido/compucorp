import spotifySearch from './spotify-search/spotify-search';
import spotifyModal from './spotify-modal/spotify-modal';

const components = angular.module('components', [])
    .component('spotifySearch', spotifySearch)
    .component('spotifyModal', spotifyModal)
    ;

export default components;
