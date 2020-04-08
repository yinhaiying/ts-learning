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
            >
        </todo-item>
      </ul>
  </div>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoItem from "../components/todo-item.vue"
@Component({
  name: "Todo",
  components: {
    TodoItem,
  }
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
  public handleEdit(index) {
    this.editIndex = index;
  }
  public handleSave({index, content}) {
    this.list[index].text = content;
    this.editIndex = -1;
  }
  public handleCancel() {
    this.editIndex = -1;
  }
}
</script>
