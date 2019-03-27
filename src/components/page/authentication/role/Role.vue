<template>
  <div class="c-box">
    <div class="c-table">
      <div class="table-title">
        <div class="title-left">
          <el-button @click="dialogAddRole = true" type="primary" icon="el-icon-plus">添加</el-button>
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
          <el-table-column prop="name" label="角色名"></el-table-column>
          <el-table-column prop="code" label="Code"></el-table-column>
          <el-table-column prop="time" label="创建时间" sortable width="180px"></el-table-column>
          <el-table-column label="操作" width="180px">
            <template slot-scope="scope">
              <a class="operation-btn" @click="dialogEdit=true">编辑</a>
              <a class="operation-btn" @click="dialogDel=true">删除</a>
              <a class="operation-btn" @click="dialogPrivilege=true">权限管理</a>
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
      <!--弹窗 添加角色-->
      <el-dialog title="添加角色" :visible.sync="dialogAddRole" width="540px">
        <el-form>
          <el-form-item label="角色名" label-width="80px">
            <el-input autocomplete="off" placeholder="请输入角色名"></el-input>
          </el-form-item>
          <el-form-item label="Code" label-width="80px">
            <el-input autocomplete="off" placeholder="请输入Code"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddRole = false">取消</el-button>
          <el-button type="primary" @click="dialogAddRole = false">保存</el-button>
        </div>
      </el-dialog>
      <!--弹窗 编辑-->
      <el-dialog title="编辑角色" :visible.sync="dialogEdit" width="540px">
        <el-form>
          <el-form-item label="角色名" label-width="80px">
            <el-input autocomplete="off" placeholder="请输入角色名"></el-input>
          </el-form-item>
          <el-form-item label="Code" label-width="80px">
            <el-input autocomplete="off" placeholder="请输入Code"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="80px">
            <el-input autocomplete="off" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEdit = false">取消</el-button>
          <el-button type="primary" @click="dialogEdit = false">保存</el-button>
        </div>
      </el-dialog>
      <!--弹窗 删除-->
      <el-dialog title="提示" :visible.sync="dialogDel" width="540px">
        <div style="color:#555555; font-size:20px; margin:30px 0;">是否确认删除此条？</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogDel = false">取消</el-button>
          <el-button type="primary" @click="dialogDel = false">保存</el-button>
        </div>
      </el-dialog>
      <!--弹窗 权限管理-->
      <el-dialog title="添加权限" :visible.sync="dialogPrivilege" width="540px">
        <el-tree
          :data="dataTree"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
        ></el-tree>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogPrivilege = false">取消</el-button>
          <el-button type="primary" @click="dialogPrivilege = false">保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogAddRole: false, //添加角色弹窗
      dialogEdit: false, //编辑弹窗
      dialogDel: false, //删除弹窗
      dialogPrivilege: false, //权限管理弹窗
      timeStart: "",
      timeEnd: "",
      filters: {
        name: ""
      },
      currentPage: 1,
      tableData: [
        {
          id: "1",
          name: "管理员",
          code: "admin",
          time: "2019-03-02 11:11:42"
        }
      ],
      dataTree: [
        {
          label: "认证中心",
          children: [
            {
              label: "角色管理"
            },
            {
              label: "用户管理"
            },
            {
              label: "用户反馈"
            },
            {
              label: "商家入驻"
            },
            {
              label: "Token管理"
            }
          ]
        },
        {
          label: "运营中心",
          children: [
            {
              label: "商品上架"
            },
            {
              label: "商家列表"
            },
            {
              label: "订单列表"
            }
          ]
        },
        {
          label: "财务管理"
        },
        {
          label: "运营监控"
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
</style>
