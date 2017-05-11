import './_spotify-modal.scss';
import spotifyModalTemplate from './spotify-modal.html';

/**
 *  Example Usage:
 *  <spotify-modal
 *      
 *  </spotify-search>
 */

const spotifyModal = {
    templateUrl: spotifyModalTemplate,
    // controller: spotifyModalController,
    bindings: {
        album: '=album',
        isOpen: '<isOpen',
        onClose: '&onClose',
    },
};

// spotifyModalController.inject = [''];
/*
function spotifyModalController() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.isEditing = false;

        // methods
        //ctrl.edit = edit;
    };


}*/

export default spotifyModal;
