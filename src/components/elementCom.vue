<template>
  <div style="margin-top: 10px;" @click="alert()">
    <el-popover
      placement="bottom"
      width="230"
      trigger="click">
      <div>{{ checkedCities }}
        <div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(item, index) in cities" :label="item.val" :key="index">{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <el-button slot="reference" @click="stopPropagation">select1</el-button>
    </el-popover>
    <el-popover
      placement="bottom"
      width="230"
      trigger="click"
      style="margin-left: 10px;">
      <div>{{ checkedCities }}
        <el-select v-model="checkedCities" multiple placeholder="请选择">
          <el-option
            v-for="(item, index) in cities"
            :key="index"
            :label="item.label"
            :value="item.val">
          </el-option>
        </el-select>
      </div>
      <el-button slot="reference">select</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cities: [
        {
          val: 0,
          label: '卫星111'
        },
        {
          val: 1,
          label: '卫星222'
        },
        {
          val: 2,
          label: '卫星333'
        },
        {
          val: 3,
          label: '卫星444'
        },
        {
          val: 4,
          label: '卫星555'
        }
      ],
      checkedCities: []
    }
  },
  mounted () {
    this.$axios.get('i.json').then((res) => {
      console.log(res)
    })
  },
  methods: {
    handleCheckedCitiesChange () {},
    alert () {
      alert('asdfasdfasdfsdadfa')
    },
    stopPropagation (event) {
      event.stopPropagation()
    }
  }
}
</script>

<style>

</style>