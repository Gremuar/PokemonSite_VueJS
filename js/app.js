let app = new Vue({
    el: ".main",
    data: {
        showMain: true,
        showPokeInfo: false,
        activePoke: "Pikachu",
        pokemons: Pokemons,
        audioPlayer: new Audio(),
        audioVolume: 0.5,
    },
    methods: {
        goToMain() {
            this.showMain = true;
            this.showPokeInfo = false;
        },
        goToPokeInfo(pokemonIndex) {
            this.activePoke = Object.keys(this.pokemons)[pokemonIndex];
            this.playSound(this.pokemons[this.activePoke].sounds.main);
            this.showMain = false;
            this.showPokeInfo = true;
        },
        getPoke(ind) {
            //deprecated
            return this.pokemons[Object.keys(this.pokemons)[ind]];
        },
        playSound(url) {
            this.audioPlayer.src = url;
            this.audioPlayer.volume = this.audioVolume;
            this.audioPlayer.play();
        },
    },
    computed: {},
});