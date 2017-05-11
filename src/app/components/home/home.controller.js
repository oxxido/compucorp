

HomeController.$inject = ['Spotify'];

function HomeController(Spotify) {
    const ctrl = this;

    // state
    ctrl.searchString = "";
    ctrl.results = [];
    ctrl.modalShown = false;
    ctrl.currentAlbum = null;

    //methods
    ctrl.onSearch = onSearch;
    ctrl.onModalToggleClick = onModalToggleClick;
    ctrl.openAlbum = openAlbum;

    function onModalToggleClick() {
        ctrl.modalShown = !ctrl.modalShown;
    }

    function onSearch() {
        console.log('searching');
        if (ctrl.searchString) {
            Spotify.search(ctrl.searchString, 'album,artist').then(function (response) {
                console.log(response.data);
                ctrl.results = ctrl.results.concat(response.data.albums.items).concat(response.data.artists.items);
            });
        }
    }

    function openAlbum(currentAlbum) {
        ctrl.currentAlbum = currentAlbum;
        ctrl.modalShown = true;
    }
}

export default HomeController;
