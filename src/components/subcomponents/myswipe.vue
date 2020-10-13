<template>
    <div>
        <div class="my-container">
            <ul class="itemlist">
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
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
                background-color: #ccc;
                margin:0 1px;
                list-style: none;
            }
        }
    }
</style>