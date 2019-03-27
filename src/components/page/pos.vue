<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="system" id="order-list">
        <el-tabs>
          <el-tab-pane label= "点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作"  width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type = "text" size="small">删除</el-button>
                  <el-button type = "text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table> 
            <div class="totalDiv">
              <small>数量:</small>0  &nbsp;&nbsp;&nbsp;   <small>金额:</small>0元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label= "挂单">
            挂单
          </el-tab-pane>

          <el-tab-pane label= "外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.id" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookLinst">
                  <li v-for="goods in type0Goods" :key="goods.id" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div>
                <ul class="cookLinst">
                  <li v-for="goods in type1Goods" :key="goods.id" @click="addOrderList(goods)">
                    <span class="goodsImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookLinst">
                  <li v-for="goods in type2Goods" :key="goods.id" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookLinst">
                  <li v-for="goods in type3Goods" :key="goods.id" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pos',
  data(){
    return{
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney:0,
      totalCount:0
    }
  },
  created:function(){
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
    .then(Response=>{
      // console.log("成功:",Response)
      this.oftenGoods=Response.data;
    })
    .catch(error=>{
      alert('网络错误,不能访问');
    })

    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
    .then(Response=>{
      console.log("成功:",Response)
      this.type0Goods=Response.data[0];
      this.type1Goods=Response.data[1];
      this.type2Goods=Response.data[2];
      this.type3Goods=Response.data[3];
    })
    .catch(error=>{
      alert('网络错误,不能访问');
    })
  },
  mounted:function () {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + 'px' 
  },
  methods:{
    addOrderList(goods){
      this.totalMoney = 0;
      this.totalCount = 0;
      //商品列表是否存在列表中
      let isHave = false;
      for (let i=0;i<this.tableData.length;i++) {
        if (this.tableData[i].goodsId==goods.goodsId) {
          let isHave = true;
        }
      }
      // 根据判断的值编写业务逻辑
      if (isHave) {
        //改变列表中商品的数量
        let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
        this.tableData.push(newGoods);
      }
    }
  }
}
</script>

<style scoped>
.system{
  background-color: aqua;
  border-right: 1px solid red;
}
.div-btn{
  margin-top: 10px;
}
.title{
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li{
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
.o-price{
  color: #58b7ff;
}
.goods-type{
  clear: both;
}
.cookLinst li{
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #ffffff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookLinst li span{
  display: block;
  float: left;
}
.foodImg img{
  width: 40%;
}
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv{
  background-color: #ffffff;
  padding: 10rpx;
  border-bottom: 1px solid #d3dce6;
}
</style>
