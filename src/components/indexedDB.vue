<template>
  <div>
    <button @click="addIndex">增加</button>
    <button @click="changeIndex">修改</button>
    <button @click="deleteIndex">删除</button>
    <p>
      是是是是
    </p>
  </div>
</template>

<script>
export default {
  mounted () {},
  methods: {
    addIndex () {
      this.$db.add('Users', {
        userId: 0,
        w: 'wang2',
        c: 'chao2'
      }).then((res) => {
        console.log('增加success', res)
      }).catch((err) => {
        console.log('增加error', err)
      })
    },
    deleteIndex () {
      this.$db.delete('Users', 0).then((res) => {
        console.log('删除success', res)
      }).catch((err) => {
        console.log('删除error', err)
      })
    },
    changeIndex () {
      this.$db.put('Users', {
        userId: 0,
        w: 'wang2--',
        c: 'chao2--'
      }).then((res) => {
        console.log('修改success', res)
      }).catch((err) => {
        console.log('修改error', err)
      })
    }
  }
}
</script>

<style>

</style>