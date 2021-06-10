<template>
    <div>
        <div class="card">
            <div class="card__header">
                <img :src='require("./public/"+id+".png")'>
                <p class="pokemon_name">{{name}}</p>
            </div>
            <div class="card__info">
                <span>Abilities:</span>
                <ul>
                    <li v-for="item in abilities">{{item.ability.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        props: ['name', 'id', 'abilities']
    }
</script>
<style>
    * {
        font-family: sans-serif;
    }
    img {
        max-width: 100%;
    }

    .card {
        max-width: 35vw;
        display: flex;
        flex-direction: column;
        border: 20px solid #9fff9c;
        padding: 5px 5px;
        margin: 0 0 30px 0;
    }

    .card__header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card__info {
        padding: 0 0 0 50px;
    }

    .pokemon_name {
        font-size: 24px;
        font-weight: 600;
    }
</style>