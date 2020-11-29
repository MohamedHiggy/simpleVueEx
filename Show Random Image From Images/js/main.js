var photos = [
    "http://placehold.it/400/F00/FFF",
    "http://placehold.it/400/00F/FFF",
    "http://placehold.it/400/080/FFF",
    "http://placehold.it/400/000/FFF",
    "http://placehold.it/400/AAA/FFF"
];

var app = new Vue({
    el: "#Mou-app",
    data: {
        photos: photos,
        selected: null
    },
    methods: {
        randomPhoto(imgs) {
            return imgs[Math.floor(Math.random() * imgs.length)];
        }
    },
    created() {
        this.selected = this.randomPhoto(this.photos);
    }
});