<template>
    <div class="open-cart-btn"
         v-on:click = "openCart">
        <img v-bind:src="path + 'images/cart.png'">
        <div class="total-sum">

            $ {{totalSum}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['total', 'path'],

        computed: {
            totalSum: function () {
                return this.total;

            },
        },
        methods: {
            openCart: function () {
                this.$router.push('/cart-container/')
            }
        }
    }
</script>
<style scoped>
    .open-cart-btn{
        width: 230px;
        height: 60px;
        background-color: #d9644a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 30px;
        color: #f0f5f8;
        font-size: 28px;
    }
</style>