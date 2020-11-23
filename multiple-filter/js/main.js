new Vue({
    data() {
        return {
            min: 0,
            max: 0,
            start: 0,
            end: 0,
            color: '',
            size: '',
            lists: [
                {
                    name: 'test1',
                    color: 'red',
                    size: 'small',
                    price: 50
                },
                {
                    name: 'test2',
                    color: 'yellow',
                    size: 'small',
                    price: 200
                }, {
                    name: 'test3',
                    color: 'red',
                    size: 'large',
                    price: 250
                }, {
                    name: 'test4',
                    color: 'red',
                    size: 'medium',
                    price: 500
                },{
                    name: 'test5',
                    color: 'black',
                    size: 'medium',
                    price: 300
                },{
                    name: 'test6',
                    color: 'yellow',
                    size: 'small',
                    price: 120
                },{
                    name: 'test7',
                    color: 'blue',
                    size: 'small',
                    price: 150
                },
            ]
        }
    },
    computed: {
        filterList() {
            var vm = this, lists = vm.lists
            return _.filter(lists, function (query) {

                var price = query.price >= vm.start && query.price <= vm.end;

                var  color = vm.color ? (query.color == vm.color) : true;

                var  size = vm.size ? (query.size == vm.size) : true;

                return price && color && size
            })
        }
    },
    mounted() {
        var vm = this,
            lists = vm.lists,
            max = _.maxBy(lists, 'price').price,
            min = _.minBy(lists, 'price').price
        vm.start = min
        vm.end = max
        vm.min = min
        vm.max = max
    }
}).$mount('#app')
