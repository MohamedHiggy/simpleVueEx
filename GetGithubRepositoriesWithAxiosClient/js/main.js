var app = new Vue({
    el: "#Mou-app",
    data: {
        username: null,
        repos: null
    },
    methods: {
        getRepos: function() {
            /*[1] Get Data From API [2] Return The Response [3] Catch Error */
            return axios.get(`https://api.github.com/users/${this.username}/repos`)
                .then(response => {
                    this.repos = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
//ana lw khat el link da https://api.github.com/users/MohamedHiggy/repos hytl3le el json bta3 el profile bta3e 3la github