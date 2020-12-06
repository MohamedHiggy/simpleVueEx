var store = new Vuex.Store({
    state: {
        students: [
            {id: 1, name: 'David Hayden'},
            {id: 2, name: 'Jane Doe'},
            {id: 3, name: 'Steve Jobs'},
            {id: 4, name: 'Heather Thomas'},
            {id: 5, name: 'Charlie Brown'},
            {id: 6, name: 'Kim Jones'}
        ]
    }
})

new Vue({
    el: '#app',
    store: store,
    data: {
        filter: ''
    },
    computed: {
        students: function() {
            var filter = this.filter.trim().toLowerCase();
            if (filter === '') return this.$store.state.students;
            return this.$store.state.students.filter(function(s) {
                return s.name.toLowerCase().indexOf(filter) > -1;
            });
        }
    },
    mounted: function() {
        this.$refs.filter.focus();
    }
})