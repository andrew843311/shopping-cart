<template>
    <div id="cart-container">
             <button class="return-btn"
                v-on:click = "returnClick">
            <img v-bind:src="path + 'images/close-btn.png'">
        </button>
        <div id="cart-table-block">
            <div class="cart-name">
                Your Cart
            </div>
            <table>
                <thead>
                <tr>
                    <td style = "min-width: 210px; padding-left: 20px;">Shop list</td>
                    <td style="text-align: center ; width: 90px;">Amount</td>
                    <td style="min-width: 95px; text-align: right; padding-right: 20px">Price</td>
                </tr>
                </thead>

                <tbody>
                <tr v-for = "(row, i) in cart"
                    v-bind:id = "row.id">
                    <td style="padding-left: 20px; margin-left: -2px">
                        <button class = "remove-btn"
                                v-on:click = "btnTableClick($event)">
                        </button>
                        <svg aria-hidden="true" style="width: 20px; height: 20px" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path></svg>
                        {{row.name}}
                    </td>
                    <td <td style="display: flex; justify-content: space-between; padding-top: 4px">
                    <button class = "minus-btn-table"
                            v-on:click = "btnTableClick($event)"></button>
                    <span>-</span>
                    {{row.count}}
                    <button class = "plus-btn-table"
                            v-on:click = "btnTableClick($event)"></button>
                    <span>+</span>
                </td>
                    <td style="text-align: right;padding-right: 20px">$ {{row.price}}</td>
                </tr>
                </tbody>
            </table>
            <div class="totals">
                <button class="clear-btn"
                        v-on:click = "btnTableClick($event)">Clear All</button>
                <div class="total-sum">
                    Sum&nbsp;&nbsp;$ {{total}}
                </div>
            </div>
            <div class="continue-panel">
                <button class="continue-btn">Continue Shopping</button>
                <button class="buy-btn"
                        v-on:click = "btnTableClick($event)">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    props: ['cart', 'total', 'path'],
methods: {
btnTableClick: function (ev) {
this.$emit('btn-table-click', ev);
},
returnClick: function () {
this.$router.go(-1);
}
},}
</script>
<style scoped>
    #cart-table-block{
        background-color: white;
        position: relative;
        width: 1366px;
        top: 10px;
        color: white;
        width: 600px;
        font-family: "SegoeUI Light";
        max-height: 650px;
        overflow: auto;
        margin-left: 3px;
    }
    #cart-container{
        background-color: white;
        width: 1366px;
        margin-top: 5px;

    }
    .return-btn {
        background: none;
        border: none;
        position: absolute;
        margin-top: 5px;
    }
    table{
        background: #d9644a;
        width: 100%;
        font-family: "SegoeUI Light";
        font-size: 26px;
        padding: 0;
        overflow: scroll;
        max-height: 600px;
        border-collapse: collapse;
    }
    table tr{
        height: 50px;
        padding-top: 4px;
        overflow: hidden;
        position: relative;
    }
    table tbody{
        margin-left: -2px;
    }
    table tr td{
        position: relative;
    }
    table thead{
        font-family: "SegoeUI Regular";
    }
    .remove-btn + svg{
        position: absolute;
        top: 16px;
        left: 25px;
        z-index: 0;
    }
    .cart-name{
        background: white;
        color: black;
        font-size: 54px;
        font-family: "SegoeUI Light";
        width: 100%;
        padding-bottom: 25px;
    }
    .totals{
        background-color: #343e40;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 10px solid white;
        font-family: "SegoeUI Regular";
        height: 50px;
        font-size: 26px;
    }
    button {
        color: white;
        border: 2px solid white;
        background: none;
        font-size: 16px;
        font-family: "SegoeUI Light";
        height: 30px;
        border: 2px solid white;
    }

    .remove-btn{
        width: 30px;
        height: 30px;
        top: 4px;
        position: relative;
        z-index: 1;
    }
    table tr:nth-child(odd){
        background-color: #A0522D;
    }
    table thead tr td{
        background-color: #d9644a;
    }
     .plus-btn-table,.minus-btn-table{
        width: 20px;
        height: 20px;
        position: relative;
        margin-top: 8px;
        font-size: 26px;
        padding: 0;
        line-height: 0;
        z-index: 1;
    }
    .minus-btn-table + span{
        position: absolute;
        left: 5px;
        top: 1px;
        font-size: 26px;
        font-family: "SegoeUI Regular";
        z-index: 0;
    }
    .plus-btn-table + span{
        position: absolute;
        right: 1px;
        top: 1px;
        font-size: 26px;
        font-family: "SegoeUI Regular";
        z-index: 0;
    }
    .totals .clear-btn{
        min-width: 80px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .return-btn {
        position: absolute;
        left: 40px;
        top: 55px;
    }
    .continue-panel{
        background-color: #4ea686;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        height: 70px;
    }
    .continue-panel button{
        min-width: 100px;
        padding-left: 9px;
        padding-right: 9px;
    }

    </stylescoped>