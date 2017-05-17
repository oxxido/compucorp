
import './_home.scss';

HomeController.$inject = ['Spotify'];

function HomeController(Spotify) {
    const ctrl = this;

    // state
    ctrl.searchString = "";
    ctrl.results = [];
    ctrl.modalShown = false;
    ctrl.currentAlbum = null;
    ctrl.isSearching = false;
    ctrl.isFetching = false;

    //methods
    ctrl.onSearch = onSearch;
    ctrl.onModalToggleClick = onModalToggleClick;
    ctrl.openAlbum = openAlbum;
    ctrl.onKeyPress = onKeyPress;

    function onKeyPress($event) {
        const keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            onSearch();
        }
    }

    function onModalToggleClick() {
        ctrl.modalShown = !ctrl.modalShown;
    }

    function onSearch() {
        console.log('searching');
        if (ctrl.searchString) {
            ctrl.isSearching = true;
            ctrl.results = [];
            Spotify.search(ctrl.searchString, 'album,artist')
            .then((response) => {
                console.log(response.data);
                ctrl.results = ctrl.results.concat(response.data.albums.items).concat(response.data.artists.items);
            })
            .finally(()=>{
                ctrl.isSearching = false;
            });
        }
    }

    function getItem(item) {
;
        ctrl.isFetching = true;
        if(item.type==='album') {
            Spotify.getAlbum(item.uri).then((response) => {
                console.log(response.data);
                ctrl.currentAlbum = response.data;
            })
            .finally(()=>{
                ctrl.isFetching = false;
            });

        } else if(item.type==='artist') {
            Spotify.getArtist(item.uri).then((response) => {
                console.log(response.data);
                ctrl.currentAlbum = response.data;
            })
            .finally(()=>{
                ctrl.isFetching = false;
            });
        } else {
            ctrl.currentAlbum = 'Error retrieving the type';
            ctrl.isFetching = false;
        }


        //return result;
    }

    function openAlbum(album) {
        ctrl.currentAlbum = false;
        getItem(album);
        ctrl.modalShown = true;
    }
}

export default HomeController;
