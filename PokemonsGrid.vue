<template>
    <div>
        <pokemon v-for="item in pokemons" :name="item.name" :id="item.id" :abilities="item.abilities">
        </pokemon>
    </div>
</template>
<script>
    import pokemon from './pokemon.vue'

    export default {
        data: function () {
            return {
                pokemons: []
            }
        },
        created() {
            fetch("https://pokeapi.co/api/v2/pokemon/?limit=15")
                .then(response => response.json())
                .then(pokemons => {
                    const dat = pokemons.results
                    const data = []
                    for (let i = 0; i < 15; i++) {
                        data.push(fetch(dat[i].url)
                            .then(response => response.json()))
                    }
                    Promise.all(data)
                        .then(result => {
                            this.pokemons = result
                            console.log(result)
                        })
                })
        },
        components: {
            pokemon: pokemon,
        }
    }
</script>
<style>
</style>