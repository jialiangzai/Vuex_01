<template>
  <div>
    <h1>state测试:{{ $store.state.count }}</h1>
    <ul>
      <li>用计算属性：{{ count1 }}</li>
      <li>辅助：{{ msg }}</li>
      <li>
        <button @click="changeCount">修改count</button>
      </li>
      <li>
        <button @click="changeMsg">修改msg</button>
      </li>
      <li v-for="it in list" :key="it">{{ it }}</li>
      <li>getters原始:{{ $store.getters.addName }}</li>
      <li>
        <button @click="changeAdds">修改getters</button>
      </li>
      <li>{{ nameL }}</li>
      <li>模块化之原user：{{ $store.state.user.token }}</li>
      <li>模块化之原setting：{{ $store.state.setting.name }}</li>
      <!-- <li>模块化之getters:{{token}}</li>
      <li>模块化之getters:{{setting}}</li> -->
      <li>{{$store.state.user.age}}</li>
      <li><button @click="changeU">修改user</button></li>
      <li><button @click="changeS">修改setting</button></li>
      <li>{{age}}</li>
      <li>{{title}}</li>
    </ul>
  </div>
</template>

<script>
// 使用vuex提供的工具函数辅助获取
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      num: 0
    }
  },
  computed: {
    //   如果需要vuex中的多个数据的这时候，这样写就太啰嗦
    // 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余
    count1 () {
      return this.$store.state.count
    },
    // mapState(['count'])返回对象放到计算属性是不可取的
    ...mapGetters(['token', 'setting']),
    ...mapState(['msg', 'list', 'count', 'nameL']),
    ...mapState('user',['age']),
    ...mapState('setting',['title'])
  },
  // 对象形式
  /*     computed:{
        1.count1:function(){
          return store.state.count
        },
       2. count2:'count',
        3.count3:(count)=>store.state.count
        4.myCount (state) {
        return state.count + num
      }
      }
      
   */
  methods: {
    ...mapMutations(['setCount', 'setadds']),
    ...mapActions(['getData']),
    ...mapMutations(['user/setUser']),
    ...mapMutations('setting',['setSetting']),
    // ...mapMutations('user',['setUser']),
    // ...mapMutations('setting',[ 'setSetting']),
    changeU () {
      // this.setUser(16)
       // 完整写法，必须是中括号加引号，不能用点的形式
      this['user/setUser']('18')
    },
    changeS () {
      console.log(this.$store);
      this.setSetting('加油，奥列给')
    },
    changeCount () {
      // this.$store.commit('setCount',Math.floor(Math.random()*10))
      this.setCount(Math.floor(Math.random() * 10))
    },
    changeMsg () {
      // this.$store.dispatch('setList', [1,2,3,4,56,7,8,9])
      this.getData()
    },
    changeAdds () {
      this.setadds('小李')
    }
  },
}
</script>

<style scoped>
li {
  margin: 10px;
}
</style>