<template>
  <div class="bg-table">
    <ve-table
      style="background: rgba(42, 42, 42, 0.7);"
      :columns="columns"
      :table-data="tableData"
      :cell-style-option="cellStyleOption"
      :border-y="false"
      :border-x="false"
      :border-around="false"
      row-key-field-name="rowKey"
      :checkbox-option="checkboxOption"
      :cell-selection-option="cellSelectionOption"
    />
    <div style="color: #fff;margin: 20px 0;">
      <span class="iconfont icon-guan1" style="font-size: 24px;"></span>
      <span class="iconfont icon-zhuanfa" style="font-size: 24px;"></span>
      <span class="iconfont icon-map_icon_satellite" style="font-size: 24px;"></span>
      <span class="iconfont icon-dimianzhan-1" style="font-size: 24px;"></span>
      <span class="iconfont icon-quyu" style="font-size: 24px;"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cellSelectionOption: {
        default: true
      },
      checkboxOption: {
        // 行选择改变事件
        selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
          console.log(row, isSelected, selectedRowKeys);
        },
        // 全选改变事件
        selectedAllChange: ({ isSelected, selectedRowKeys }) => {
          console.log(isSelected, selectedRowKeys);
        }
      },
      cellStyleOption: {
        bodyCellClass: ({ row, column, rowIndex }) => {
          console.log(row, column, rowIndex)
          // if (column.field === "hobby") {
          //   return "table-body-cell-class1";
          // }

          // if (column.field === "name" && rowIndex === 2) {
          //   return "table-body-cell-class2";
          // }

          if (rowIndex % 2 === 1) {
            return "table-body-cell-class3"
          } else {
            return "table-body-cell-class4"
          }
        },
        headerCellClass: () => {
          return "table-body-cell-class3";
        }
      },
      columns: [
        {
          field: "",
          key: "a1",
          // type=checkbox
          type: "checkbox",
          title: "",
          width: 50,
          align: "center",
        },
        {
          field: "",
          key: "a",
          title: "Name",
          align: "center",
          width: 100,
          renderBodyCell: ({ row, rowIndex }) => {
            return (
              <span class="text-bold" style="color:#1890ff;">
                {++rowIndex}-{row.name}
              </span>
            );
          }
        },
        { field: "date", key: "b", title: "Date", align: "left", width: 200 },
        { field: "hobby", key: "c", title: "Hobby", align: "right", width: 300 },
        { field: "address", key: "d", title: "Address", align: "left", width: 300 }
      ],
      tableData: [
        {
          rowKey: 1001,
          name: "John",
          date:"1900-05-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shanghai",
        },
        {
          rowKey: 1002,
          name: "Dickerson",
          date:"1910-06-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Beijing",
        },
        {
          rowKey: 1003,
          name: "Larsen",
          date:"2000-07-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Chongqing",
        },
        {
          rowKey: 1004,
          name: "Geneva",
          date:"2010-08-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Xiamen",
        },
        {
          rowKey: 1005,
          name: "Jami",
          date:"2020-09-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shenzhen",
        },
        {
          rowKey: 1006,
          name: "John",
          date:"1900-05-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shanghai",
        },
        {
          rowKey: 1007,
          name: "Dickerson",
          date:"1910-06-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Beijing",
        },
        {
          rowKey: 1008,
          name: "Larsen",
          date:"2000-07-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Chongqing",
        },
        {
          rowKey: 1009,
          name: "Geneva",
          date:"2010-08-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Xiamen",
        },
        {
          rowKey: 1010,
          name: "Jami",
          date:"2020-09-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shenzhen",
        },
      ]
    }
  }
}
</script>

<style>
.bg-table{
  background-color: #121315;
  height: 100vh;
}
.table-body-cell-class1 {
  background: #91d5ff !important;
  color: #fff !important;
}

.table-body-cell-class2 {
  background: orange !important;
  color: #fff !important;
}

.table-body-cell-class3{
  background-color: rgba(255, 255, 255, 0.05) !important;
  color: #fff !important;
}
.table-body-cell-class4{
  background-color: rgba(255, 255, 255, 0) !important;
  color: #fff !important;
}
</style>