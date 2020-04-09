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
@Component({
  name: "Todo",
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {
  public editIndex: number = -1;
  public list = [
    {
      text: "typescript",
      complete: false,
    },
    {
      text: "flutter",
      complete: false,
    },
  ];
  public handleEdit(index: number) {
    this.editIndex = index;
  }
  public handleSave(obj: {index: number, content: string}) {
    this.list[obj.index].text = obj.content;
    this.editIndex = -1;
  }
  public handleCancel() {
    this.editIndex = -1;
  }
  public handleComplete(index: number) {
    console.log(111);
    console.log(index);
    console.log(this.list[index])
    this.list[index].complete = true;
  }
}
</script>
