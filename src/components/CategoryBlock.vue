<template>
    <div id = "category-block"
         v-on:click.stop = "">
       <button class="return-btn"
               v-on:click = "returnClick">
           <img v-bind:src="path + 'images/close-btn.png'">
       </button>
       <div class="category-head">
          <h1>{{categoryes[index].name}}</h1>
          <open-cart-btn v-bind:total = "total"
                         v-bind:path = "path"></open-cart-btn>
       </div>
       <div class = "products-container" v-bind:name = "categoryes[+index].name">
       <div v-for = "product in categoryes[+index].products"
            v-bind:id = "product.id">
           <product-block v-bind:product="product" v-on:plus = "readClick($event)"
                          v-bind:cart = "cart"
                           v-bind:path = "path">
           </product-block>
       </div>
       </div>
    </div>
</template>
<script>
    export default {

        data:function(){
            return {
                index: this.$route.params.index,
                name:  this.$route.params.name
            }
        },
        props: ['categoryes', 'cart', 'total', 'path'],
            methods: {
        readClick: function(ev){
            this.$emit('plus-minus-click', ev);

        },
        returnClick: function() {
            this.$router.go(-1)
        },

    },

    }
</script>
<style scoped>
    .open-cart-btn{
        position: relative;
        margin-right: 166px;
    }

    #category-block{
        background-color: white;
        width: 1366px;
        left: 0;
        top: 14px;
        width: 100%;
        position: relative;
    }
     .products-container{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        font-family: "SegoeUI Regular";
        margin: auto;
        margin-top: 25px;
        overflow: scroll;
        width: 100%;

    }
    .category-head{
        color: black;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

    }
    .category-head h1{
        font-family: "SegoeUI Light";
        font-size: 56px;
    }
    .return-btn {
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        left: -78px;
        top: 20px;
    }
</style>