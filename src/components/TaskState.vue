<template>
  <el-table
    :data="tableData"
    style="width: 100%;margin: 10px">
    <el-table-column
      prop="task_type"
      label="任务类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="task_state"
      label="任务状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      name: "TaskState",
      data() {
        return {
          tableData: [{
            date: '2019-05-02',
            task_state: '解析数据',
            task_type: '图像识别'
          }, {
            date: '2019-06-04',
            task_state: '训练中',
            task_type: '图像语意分割'
          }, {
            date: '2019-07-01',
            task_state: '训练完成',
            task_type: '图像实例分割'
          }, {
            date: '2019-08-03',
            task_state: '训练完成',
            task_type: '图像目标检测'
          }]
        }
      }
    }
</script>

<style scoped>

</style>
