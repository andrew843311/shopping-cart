<template>
    <div id="home">
        <div class="block-header">
            <div class="text">
                Shopping Cart &mdash; Make Purchases Now!
            </div>
            <open-cart-btn v-bind:total = "total"
                           v-bind:path = "path"></open-cart-btn>
        </div>
        <div id = "categoryes-container">
            <div v-for = "(category, i) in categoryes"
                 v-bind:index = "category.index"
                 v-bind:name = "category.name"
                 v-on:click.prevent = "openCategory(i, category.name)"
                 class="category-item">
                <img v-bind:src = "path + category.avatarPath">
                <div class="category-name">
                    <span>{{category.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default
    {
        props:['categoryes', 'total','path'],

        methods:{
        openCategory: function (i,name) {
            this.$router.push('/category/'+i+'/'+name);
        }

        },
    }
</script>
<style scoped>
    #home{
        position: relative;
        top: -20px;
    }
    #categoryes-container{
        font-family: "SegoeUI Regular";
        height: 582px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "SegoeUI Regular";
        overflow: scroll;
        align-content:flex-start;
    }
    .category-item{
        margin-right: 8px;
        margin-left: 0px;
        position: relative;
        overflow: hidden;
        padding: 0;
        align-content: flex-end;
        margin-left: 2px;
        margin-bottom: 2px;
    }
    .category-name{
        position: absolute;
        color: black;
        background-color: white;
        opacity: 0.8;
        width: 100%;
        font-size: 21px;
        height: 32px;
        padding-top: 8px;
        padding-bottom: 5px;
        bottom: 0;
    }
    .category-name span{
        margin-left: 20px;
    }

    .category-item:hover{
        outline: 1px solid #d9644a;
    }
    .category-item img{
        padding: 0;
        margin: 0;
    }
    .category-item[index="10"]{
        position: relative;
        margin-left: -190px;
        margin-top: 192px;
    }
    .category-item[index="11"]{
        position: relative;
        margin-left: -190px;
    }
    .category-item[index="8"]{
        width: 230px;
    }
    .category-item[index="9"]{
        width: 230px;
    }
    .block-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 40px;
        font-family: "SegoeUI Regular";
    }
    .open-cart-btn{
        position: relative;
        right: 166px;
    }
    .block-header .text{
        font-family: "SegoeUI Light";
        font-size: 52px;
        margin-top: -5px;
        letter-spacing: 0.01em;
    }

</style>