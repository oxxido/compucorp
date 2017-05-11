// import 'app/components/search/_search.scss';
import spotifySearchTemplate from './spotify-search.html';

/**
 *  Example Usage:
 *  <spotify-search
 *      results="yourCtrl.results"     * results from spotify api
 *  </spotify-search>
 */

const spotifySearch = {
    templateUrl: spotifySearchTemplate,
    controller: spotifySearchController,
    bindings: {
        results: '<results',
        onAlbumClick: '&onAlbumClick'
    },
};

// spotifySearchController.inject = [''];

function spotifySearchController() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.isEditing = false;

        // methods
        ctrl.getArtists = getArtists;
    };

    function getArtists(artists) {
        if (artists.length > 1) {
            return artists
                .map(artist => artist.name)
                .reduce((a, b) => `${a}, ${b}`);
        } else {
            return artists[0].name;
        }
    }


}

export default spotifySearch;
