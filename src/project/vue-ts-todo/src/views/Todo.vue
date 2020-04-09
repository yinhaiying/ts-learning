<template>
  <div class="todo-page">
      <ul>
        <todo-item
            v-for = "(item,index) in list" :key = "index"
            :item = "item"
            :index = "index"
            :edit-index = "editIndex"
            @on-edit = "handleEdit"
            @on-save = "handleSave"
            @on-cancel = "handleCancel"
            @on-complete = "handleComplete"
            >
        </todo-item>
      </ul>
  </div>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoItem from "../components/todo-item.vue";
import { Mutation, State } from 'vuex-class';
interface IList {
  text: string;
  complete: boolean;
}
@Component({
  name: "Todo",
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {
  @State("todoList") public list!: IList[];
  // 表示调用state中的mutation中的updateTodoList方法。并且在当前类中命名为updateList
  @Mutation("updateTodoList") public updateList;

  public editIndex: number = -1;
  public handleEdit(index: number) {
    this.editIndex = index;
  }
  public handleSave(obj: {index: number, content: string}) {
    //
    this.updateList({index: obj.index, content: obj.content})
    // this.list[obj.index].text =  obj.content;
    this.editIndex = -1;
  }
  public handleCancel() {
    this.editIndex = -1;
  }
  public handleComplete(index: number) {
    this.list[index].complete = true;
  }
}
</script>
