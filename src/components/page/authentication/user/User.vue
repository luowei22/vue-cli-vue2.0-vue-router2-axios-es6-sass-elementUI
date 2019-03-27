<template>
  <div class="c-box">
    <div class="c-data">
      <h3>数据概览</h3>
      <ul class="data-profile">
        <li>
          <h2>24971,00</h2>
          <p>真实用户总数（人）</p>
          <div class="data-arrows"></div>
          <div class="data-wave"></div>
        </li>
        <li>
          <h2>3681,00</h2>
          <p>今日新注册用户总数（人）</p>
          <div class="data-arrows"></div>
          <div class="data-wave"></div>
        </li>
      </ul>
    </div>
    <div class="c-table">
      <div class="table-title">
        <div class="title-left">
          <el-button type="primary" icon="el-icon-upload2" style="margin-right:28px;">导出</el-button>
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
          <el-table-column prop="loginTime" label="注册时间" min-width="180" sortable></el-table-column>
          <el-table-column prop="recentlyTime" label="最近登陆时间" min-width="180" sortable></el-table-column>
          <el-table-column prop="number" label="累计登陆次数" min-width="180" sortable></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a class="operation-btn">编辑</a>
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
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
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
          loginTime: "2018-10-23 09:17:30",
          recentlyTime: "2019-03-02 11:11:42",
          number: "102"
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
// .c-data {
//   margin-bottom: 24px;
//   padding: 26px 30px;
//   background: #fff;
//   border-radius: 5px;
//   > h3 {
//     color: #000;
//     font-size: 20px;
//     line-height: 26px;
//     font-weight: 500;
//   }
//   .data-profile {
//     display: flex;
//     margin-top: 19px;
//     > li:first-child {
//       margin-right: 18px;
//       background: linear-gradient(
//         90deg,
//         rgba(254, 106, 135, 1) 0%,
//         rgba(254, 154, 141, 1) 100%
//       );
//       .data-arrows{
//         background: url(../../../../assets/images/arrow1.png) no-repeat;
//       }
//       .data-wave{
//         background: url(../../../../assets/images/wave1.png) no-repeat;
//       }
//     }
//     > li {
//       flex: 1;
//       height: 170px;
//       border-radius: 8px;
//       position: relative;
//       background: linear-gradient(
//         90deg,
//         rgba(108, 127, 254, 1) 0%,
//         rgba(39, 208, 252, 1) 100%
//       );
//       > h2 {
//         color: #fff;
//         font-size: 54px;
//         font-weight: bold;
//         position: absolute;
//         left: 50px;
//         top: 43px;
//         line-height: 26px;
//         z-index: 9;
//       }
//       > p {
//         color: #fff;
//         font-size: 16px;
//         font-weight: 400;
//         position: absolute;
//         left: 49px;
//         bottom: 35px;
//         line-height: 26px;
//         z-index: 9;
//       }
//       .data-arrows {
//         position: absolute;
//         right: 72px;
//         top: 24px;
//         width: 123px;
//         height: 76px;
//         background: url(../../../../assets/images/arrow2.png) no-repeat;
//         z-index: 2;
//       }
//       .data-wave {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         height: 62px;
//         background: url(../../../../assets/images/wave2.png) no-repeat;
//         z-index: 2;
//       }
//     }
//   }
// }
</style>
