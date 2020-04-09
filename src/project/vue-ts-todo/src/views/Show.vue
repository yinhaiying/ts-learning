<template>
  <div class="about">
    <h1>展示store的数据</h1>
    <p v-for = "(item,index) in list" :key = "index">{{item.text}}</p>
  </div>
</template>


<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";
import {State, Mutation} from "vuex-class";
interface IList {
  text: string;
  complete: boolean;
}
@Component({
  name: "Show",
})
export default class Show extends Vue {
  @State("todoList") public list!: IList[];
}
</script>

