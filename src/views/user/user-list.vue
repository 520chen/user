<template>
<div class="user">
  <!-- 搜索 -->
  <el-form ref="searchForm" :model="searchForm" label-width="80px" inline>
    <el-form-item label="英雄名">
      <el-input v-model="searchForm.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="searchForm.address" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getList">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="reset">重置</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="showDialog('新增')">新增</el-button>
    </el-form-item>
  </el-form>
  <!-- 表格 -->
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="id" label="id" align="center" width="80"></el-table-column>
    <el-table-column prop="name" label="英雄名" align="center" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" align="center"></el-table-column>
    <el-table-column label="操作" align="center" width="220">
      <template slot-scope="scope">
        <el-button type="primary" @click="showDialog('编辑',scope.row)">编辑</el-button>
        <el-button type="danger" @click="deletUser(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 新增 -->
  <el-dialog :title="title" :visible.sync="dialogVisible" width="600px">
    <el-form ref="addForm" :model="addForm" :rules="addRules">
      <el-form-item label="英雄名" label-width="100px" prop="name">
        <el-input v-model="addForm.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="地址" label-width="100px" prop="address">
        <el-input v-model="addForm.address" clearable></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="submitForm">确定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import {
  getUser,
  addUser,
  editUser,
  deletUser
} from '../../request/api'
export default {
  name: 'user-list',
  data() {
    return {
      tableData: [],
      searchForm: {
        name: '',
        address: ''
      },
      dialogVisible: false,
      title: '',
      addForm: {
        name: '',
        address: '',
      },
      addRules: {
        name: [{
          required: true,
          message: '英雄名不能为空！'
        }],
        address: [{
          required: true,
          message: '地址不能为空！'
        }]
      },
      editForm: {}
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      getUser(this.searchForm).then(res => {
        this.tableData = res
      })
    },
    reset() {
      this.searchForm = {};
      this.getList()
    },
    showDialog(type, row) {
      if (type == '新增') {
        this.title = '新增'
      } else if (type == '编辑') {
        this.title = '编辑';
        this.addForm = {
          id: row.id,
          name: row.name,
          address: row.address
        }
      }
      this.dialogVisible = true
    },
    submitForm() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          if (this.title == '新增') {
            addUser(this.addForm).then(res => {
              if (res.code == '200') {
                this.$message.success('新增成功！');
                this.dialogVisible = false;
                this.reset()
              }
            })
          } else if (this.title == '编辑') {
            editUser(this.addForm).then(res => {
              if (res.code == '200') {
                this.$message.success('编辑成功！');
                this.dialogVisible = false;
                this.reset()
              }
            })
          }
        }
      })
    },
    editUser(row) {
      console.log(row)
    },
    deletUser(id) {
      this.$confirm('确定删除当前英雄吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deletUser({
          id: id
        }).then(res => {
          if (res.code == '200') {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.reset()
          }
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style>

</style>
