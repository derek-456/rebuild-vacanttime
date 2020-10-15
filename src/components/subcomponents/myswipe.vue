<template>
    <div>
        <div class="my-container">
            <ul class="itemlist">
                <li class="item">1</li>
                <li class="item">2</li>
                <li class="item">3</li>
                <li class="item">4</li>
                <li class="item">5</li>
                <li class="item">6</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .my-container{
        .itemlist{
            display:flex;
            padding-left: 0px;
            overflow: auto;

            .item{
                flex:none;
                width:105px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                background-color: #ccc;
                margin:0 1px;
                list-style: none;
            }
        }
    }
</style>