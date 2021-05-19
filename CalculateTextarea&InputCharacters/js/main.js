var app = new Vue({
    el: "#Mou-app",
    data: {
        maxLenght: 20,
        remainingChars: 20,
        message: null,
        reachZero: false
    },
    methods: {
        countChars: function() {
            this.remainingChars = this.maxLenght - this.message.length;
            this.reachZero = this.remainingChars === 0;
            console.log(this.reachZero);
        }
    }
});