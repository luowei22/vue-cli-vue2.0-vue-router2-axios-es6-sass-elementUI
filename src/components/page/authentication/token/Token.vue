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
          <el-table-column prop="id" label="ID" sortable></el-table-column>
          <el-table-column prop="name" label="用户昵称"></el-table-column>
          <el-table-column prop="phone" label="电话号码"></el-table-column>
          <el-table-column prop="loginTime" label="注册时间" sortable></el-table-column>
          <el-table-column prop="lastTime" label="最近登陆时间" sortable></el-table-column>
          <el-table-column prop="number" label="累计登陆次数" sortable></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a class="operation-btn" @click="dialogForbidden=true">禁用</a>
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
    <!--弹窗 禁用-->
    <el-dialog title="提示" :visible.sync="dialogForbidden" width="540">
      <div class="dialogForbidden-info">是否确认禁用此条？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogForbidden = false">取 消</el-button>
        <el-button type="primary" @click="dialogForbidden = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      dialogForbidden: false,
      timeStart: "",
      filters: {
        name: ""
      },
      currentPage: 1,
      tableData: [
        {
          id: "1",
          name: "小小小三金",
          phone: "18677776666",
          loginTime: "2018-10-23 09:17:30",
          lastTime: "2019-03-02 11:11:42",
          number: "210"
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
.dialogForbidden-info{
  color: #555;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px; 
  margin: 30px 0;
}
</style>
