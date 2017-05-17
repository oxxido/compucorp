import './_spotify-modal.scss';
import spotifyModalTemplate from './spotify-modal.html';


const spotifyModal = {
    templateUrl: spotifyModalTemplate,
    // controller: spotifyModalController,
    bindings: {
        album: '=album',
        isOpen: '<isOpen',
        onClose: '&onClose',
    },
};

/*spotifyModalController.inject = ['Spotify'];

function spotifyModalController(Spotify) {
    const ctrl = this;

    ctrl.isFetching = true;
    ctrl.current = null;

    // methods



}*/

export default spotifyModal;
