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
          <el-table-column prop="id" label="ID" sortable min-width="80"></el-table-column>
          <el-table-column prop="name" label="用户昵称" min-width="120"></el-table-column>
          <el-table-column prop="phone" label="电话号码" min-width="180"></el-table-column>
          <el-table-column prop="feedbackTime" label="提交反馈时间" min-width="180" sortable></el-table-column>
          <el-table-column prop="feedbackInfo" label="反馈内容" min-width="180" sortable></el-table-column>
          <el-table-column label="操作" min-width="120">
            <template slot-scope="scope">
              <a class="operation-btn" @click="dialogFeedback=true">查看详情</a>
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
    <!--弹窗 反馈详情-->
    <el-dialog title="反馈详情" :visible.sync="dialogFeedback" width="786">
      <ul class="dialogFeedback-info">
        <li>
          <div class="info-title">发起人</div>
          <div class="info-content">18277776666</div>
        </li>
        <li>
          <div class="info-title">提交时间</div>
          <div class="info-content">2019-03-03 11:11:42</div>
        </li>
        <li>
          <div class="info-title">反馈内容</div>
          <div class="info-content">砍价的商品价格差距不是特别大，所以通过砍价并没有节省多少钱，这样可能会有更多的用户流失。</div>
        </li>
        <li>
          <div class="info-title">图片</div>
          <div class="info-content"><img src="" alt=""></div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      dialogFeedback: false,
      timeStart: "",
      filters: {
        name: ""
      },
      currentPage: 1,
      tableData: [
        {
          id: "1",
          name: "will",
          phone: "18277776666",
          feedbackTime: "2018-10-23 09:17:30",
          feedbackInfo: "使用享7小程序过程中，有时候有些卡"
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
.dialogFeedback-info{
  >li{
    display:flex;
    margin-bottom: 32px;
    .info-title{
      color: #333333;
      font-size: 20px;
      line-height: 26px;
      width: 100px;
      font-weight: 400;
      text-align: right;
    }
    .info-content{
      flex: 1;
      margin-left: 23px;
      font-size: 20px;
      color:#666;
      font-weight: 400;
      line-height: 26px;
    }
  }
}
</style>

