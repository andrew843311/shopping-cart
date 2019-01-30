<template>
    <div class="product-block" v-bind:id = "product.id"
         v-bind:name = "product.name">
        <div  class="product-img" >
           <img v-bind:src = "path + product.imgPath">
           <div class = "product-label">
              <div class="product-name">{{product.name}}</div>
              <div class="product-price">${{product.price}} </div>
           </div>
        </div>
        <div class="buttons-block">
           <button class="minus-btn" v-on:click = "btnClick($event)">-</button>
           <div class="text">
               <div class="item">amount</div>
               <div class="count">{{getCount}}</div>
           </div>
           <button class="plus-btn" v-on:click = "btnClick($event)">+</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['product', 'cart', 'path'],
        computed: {
            getCount: function () {
                let index = this.findIndex(this.product.id);
                if (index != -1) {
                    return this.cart[index].count;
                } else {
                    return 0;
                }
            },
        },

        methods: {
            btnClick: function (ev) {
                this.$emit('plus', ev);

            },

            findIndex: function (id) {
                let index = -1;
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id == id) {
                        index = i;
                        break;
                    }
                }
                return index;
            },
        },
    }
</script>
<style scoped>

    .product-block{
        width: 360px;
        margin-right: 10px;
    }
    .product-img {
        width: 100%;
        height: 370px;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid rgba(255, 255, 255, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .product-img:hover{
        border: 1px solid #d9644a;
    }
    .product-name{
        opacity: 0.8;
    }
    .product-price{
        color:#d9644a;
        font-size: 32px;
    }
    .product-label{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 320px;
        background-color: rgba(255,255,255,0.8);
        padding-left: 20px;
        padding-right: 20px;
        height: 40px;
        font-size: 21px;
        color: black;
        position: absolute;
        bottom: 0;
    }
    .buttons-block .item{
        font-size: 16px;
    }
    .count{
        font-size: 32px;
        margin-top: -4px;
    }
    .buttons-block button {
        border: 2px solid white;
        height: 40px;
        width: 40px;
        background-color: #4ea686;
        font-size: 32px;
        color: white;
    }
    .buttons-block{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 320px;
        height: 80px;
        background-color: #4ea686;
        color: white;
        text-align: center;
        margin-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }

</style>