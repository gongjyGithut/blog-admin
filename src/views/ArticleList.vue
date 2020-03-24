<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">新增</el-button>
    <el-table :data="tableData">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="keyword" label="关键字"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="create_time" label="创建日期"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="" :visible.sync="dialogVisible">
      <el-form :model="formModel">
        <el-form-item>
          <el-input v-model="formModel.title" placeholder="标题">
            <template slot="prepend">标题</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formModel.author" placeholder="作者">
            <template slot="prepend">作者</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formModel.desc" placeholder="描述">
            <template slot="prepend">描述</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formModel.keyword" placeholder="关键字">
            <template slot="prepend">关键字</template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-input v-model="formModel.title" placeholder="封面">
            <template slot="prepend">封面</template>
          </el-input>
        </el-form-item> -->
        <el-form-item>
          <el-input
            type="textarea"
            v-model="formModel.content"
            placeholder="文章内容"
          >
          </el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save"> 确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      formModel: {}
    };
  },
  mounted() {
    this.fecth();
  },
  methods: {
    async fecth() {
      const res = await this.$http.get("article");
      this.tableData = res;
    },
    async save() {
      const formModel = this.formModel;
      const res = await this.$http.post("article", formModel);
      console.log(res);
    }
  }
};
</script>
