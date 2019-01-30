<template>
  <div class="container-fluid">
  <div class="header-border" style="height: 5px">

  </div>
    <div class="container">
  <router-view v-bind:categoryes = "productsCategoryes"
               v-bind:cart = "arrayCart"
               v-bind:total = "totalSum"
               v-bind:path = "pathImages"
               v-on:plus-minus-click = "btnClickRead($event)"
               v-on:btn-table-click = "btnClickRead($event)">

  </router-view>
    </div>
  <div class="footer-border" style="height: 5px">

  </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
  name: 'app',
    data: function(){
      return {
        productsCategoryes: [],
        arrayCart: JSON.parse(localStorage.getItem('arrayCart')) || [],
        clickName: '',
        clickIndex: -1,
        showPopup: false,
        pathImages: '/src/assets/',
      }
    },

    computed: {
        totalSum: function () {
            let sum = 0;
            this.arrayCart.forEach(function (product,i) {
                sum = sum + product.count * product.price;
            });
            return sum;

        }
    },
        created: function () {
            this.getProductsArray();
        },
    methods: {
        getProductsArray: function () {
            axios.get('/shopping-cart.json')
                .then( response => (this.productsCategoryes = response.data))
                .catch( error => (console.log(error)));
        },

        btnClickRead: function (ev) {
            let index;
            if (ev.target.className == 'plus-btn') {

                let id = ev.path[2].attributes.id.value;

                let categoryName = ev.path[4].attributes.name.value;
                let product = {};
                 index = this.findIndex(id);

                if (+index == -1) {
                    product.name = ev.path[2].attributes.name.value;
                    product.id = id;
                    product.count = 1;
                    product.price = this.findPrice(id, categoryName);
                    this.arrayCart.push(product);

                } else{
                    this.arrayCart[index].count++;
                }
            }
            if (ev.target.className == 'plus-btn-table' ){
                let id = ev.path[2].attributes.id.value;
                index = this.findIndex(id);
                this.arrayCart[index].count++;
            }
            if (ev.target.className == 'minus-btn' || ev.target.className == 'minus-btn-table') {
                let id = ev.path[2].attributes.id.value;
                let index = this.findIndex(id);
                if (index != -1) {
                    if (this.arrayCart[index].count > 1) {
                        this.arrayCart[index].count--;


                    } else {
                        this.arrayCart.splice(index, 1);

                    }
                }
            }
            if(ev.target.className =='clear-btn'){
                this.arrayCart = [];
            }
            if (ev.target.className == 'buy-btn') {
                if (this.totalSum > 0){
                    let buyResult = confirm('Do you want to buy products at sum: $' + this.totalSum);
                    if(buyResult){
                        this.arrayCart = [];
                    }
                } else{
                    alert('You dont choose products to buy');
                }
            }
            if(ev.target.className == 'remove-btn' || ev.target.tagName == 'path'){
                let id;
                if (ev.target.className == 'remove-btn'){
                    id = ev.path[2].attributes.id.value;
                } else {
                    id = ev.path[4].attributes.id.value;
                }
                let index = this.findIndex(id);
                this.arrayCart.splice(index,1);
            }
            let stringArrayCart = JSON.stringify(this.arrayCart);
            localStorage.setItem('arrayCart',stringArrayCart);
        },
        findPrice: function(id, categoryName) {
            let categoryIndex = this.getCategoryNumber(categoryName);
            for(let i = 0; i < this.productsCategoryes[categoryIndex].products.length; i++){
                if(this.productsCategoryes[categoryIndex].products[i].id == id){
                    return this.productsCategoryes[categoryIndex].products[i].price;
                }
            }
        },
        getCategoryNumber: function(name) {
            let find = false;
            for(let i = 0; i<this.productsCategoryes.length; i++){
                if(this.productsCategoryes[i].name == name){
                    return i;
                    find = true;
                    break;
                }
            }
            if (find === false){
                return -1;
            }
        },
        findIndex: function(id){
            let index = -1;
            for (let i = 0; i < this.arrayCart.length; i++) {
                if (this.arrayCart[i].id == id){
                    index = i;
                    break;
                }
            }
            return index;
        },
        clickCategory: function (ev, category) {
            this.clickName = ev.path[1].attributes.name.value;
            this.clickIndex = ev.path[1].attributes.index.value;
            this.showPopup = true;
        },
        closePopup: function (ev) {
            this.showPopup = ev;

        },
    },

}
</script>

<style>
  @font-face {
    font-family: "SegoeUI Light";
    src: url("/src/assets/fonts/SegoeUILight/SegoeUILight.ttf") format("opentype");
  }
  @font-face {
    font-family: "SegoeUI Regular";
    src: url("/src/assets/fonts/SegoeUIRegular/SegoeUIRegular.ttf") format("opentype");
  }
  @font-face {
    font-family: "Releway Regular";
    src: url("/src/assets/fonts/Raleway-Regular.ttf") format("opentype");
  }
  .container{
    width: 1366px;
    height: 720px;
    margin: auto;
  }
  .header-border, .footer-border {
    background-image: url("/src/assets/images/border.jpg");
  }
  *{
    margin: 0;
    padding: 0;
  }
  button, .product-block, .category-item, .open-cart-btn{
    cursor: pointer;
  }
.container-fluid{
  height: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
