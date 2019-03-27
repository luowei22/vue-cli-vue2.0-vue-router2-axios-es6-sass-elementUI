<template>
  <div class="c-box">
    <div class="c-table">
      <div class="table-title">
        <div class="title-left">
          <el-date-picker
            v-model="timeStart"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            prefix-icon="el-icon-date"
            :default-time="['12:00:00']"
          ></el-date-picker>
          <el-select v-model="selectStatus" placeholder="状态筛选" style="margin-left:40px;">
            <el-option
              v-for="item in optionStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="title-right">
          <el-form :inline="true" :model="filters">
            <el-form-item>
              <el-input v-model="filters.name" placeholder="输入商品名称进行搜索"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button>清空</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="table-box">
        <el-button>批量删除</el-button>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="id" label="ID" sortable></el-table-column>
          <el-table-column prop="name" label="联系人"></el-table-column>
          <el-table-column prop="shopName" label="门店名称"></el-table-column>
          <el-table-column prop="site" label="详细地址" sortable></el-table-column>
          <el-table-column prop="kind" label="经营品类" sortable></el-table-column>
          <el-table-column prop="status" label="审核状态" sortable></el-table-column>
          <el-table-column prop="setTime" label="创建时间" sortable></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a class="operation-btn" @click="dialogEnter=true">查看详情</a>
              <a class="operation-btn">删除</a>
            </template>
          </el-table-column>
        </el-table>
        <div class="table-pagination">
          <div class="pagination-info">共110条，共10页</div>
          <div class="pagination-box">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>

    <!--弹窗 商家入驻详情-->
    <el-dialog title="商家入驻详情" :visible.sync="dialogEnter" width="786">
      <ul class="dialogEnter-info">
        <li>
          <div class="info-title">联系人</div>
          <div class="info-content">林峰</div>
        </li>
        <li>
          <div class="info-title">门店名称</div>
          <div class="info-content">码头故事</div>
        </li>
        <li>
          <div class="info-title">详细地址</div>
          <div class="info-content">武汉市光谷步行街一期5楼B1区</div>
        </li>
        <li>
          <div class="info-title">经营品类</div>
          <div class="info-content">餐饮美食</div>
        </li>
        <li>
          <div class="info-title">创建时间</div>
          <div class="info-content">2019-03-02 11:11:42</div>
        </li>
        <template>
          <el-radio-group style="display:block;"></el-radio-group>
          <el-tabs tab-position="left">
            <el-tab-pane label="营业执照">11</el-tab-pane>
            <el-tab-pane label="卫生许可证">22</el-tab-pane>
            <el-tab-pane label="门头照">33</el-tab-pane>
            <el-tab-pane label="Logo">44</el-tab-pane>
          </el-tabs>
        </template>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Enter",
  data() {
    return {
      dialogEnter: false,
      timeStart: "",
      timeEnd: "",
      filters: {
        name: ""
      },
      currentPage: 1,
      tableData: [
        {
          id: "1",
          name: "林峰",
          shopName: "门店名称",
          site: "武汉市光谷步行街一期5楼B1区",
          kind: "餐饮美食",
          status: "已通过",
          setTime: "2019-03-02 11:11:42"
        }
      ],
      selectStatus: "",
      optionStatus: [
        {
          value: "选项1",
          label: "已通过"
        },
        {
          value: "选项2",
          label: "已驳回"
        },
        {
          value: "选项3",
          label: "待审核"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang="scss">
.dialogEnter-info {
  > li {
    display: flex;
    margin-bottom: 32px;
    .info-title {
      color: #333333;
      font-size: 20px;
      line-height: 26px;
      width: 120px;
      font-weight: 400;
      text-align: right;
    }
    .info-content {
      flex: 1;
      margin-left: 23px;
      font-size: 20px;
      color: #666;
      font-weight: 400;
      line-height: 26px;
    }
  }
}
</style>

<style lang="scss">
.dialogEnter-info {
  .el-tabs__item {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    width: 127px;
    padding: 0 7px 0 0;
    height: 58px;
    line-height: 26px; 
  }
  .el-tabs__item.is-active{
    color:#5769F0;
  }
  .el-tabs__active-bar{
    background-color:#5769F0;
  }
  .el-tabs--left .el-tabs__active-bar.is-left{
    height: 26px !important;
    width: 3px;
  }
  .el-tabs__nav-wrap::after{
    background-color:#E8E8E8;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left::after, 
  .el-tabs--left .el-tabs__nav-wrap.is-right::after, 
  .el-tabs--right .el-tabs__nav-wrap.is-left::after, 
  .el-tabs--right .el-tabs__nav-wrap.is-right::after{
    width:1px;
  }
}
</style>