<template>
  <li @click = "complete">

    <div v-if = "index !== editIndex" class = "item">
      <span :class = "[item.complete ? 'complete':'']">{{item.text }}</span>
      <a-icon class = "edit-icon" type = "edit" @click.native = "edit"></a-icon>
    </div>
    <div v-else class = "item">
      <a-input class = "edit-input" v-model = "editContent"></a-input>
      <a-icon class = "edit-icon" type = "check" @click.native = "saveEdit"></a-icon>
      <a-icon class = "edit-icon" type = "close" @click.native = "cancelEdit"></a-icon>
    </div>
  </li>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Emit, Prop, Watch} from "vue-property-decorator";

interface Item {
  text: string;
  complete: boolean;
}
@Component({
  name: "TodoItem",
})
export default class TodoItem extends Vue {
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public editIndex!: number;
  public editContent: string = "";

  @Watch("editIndex")
  public editIndexChange(newValue: number, oldValue: number) {
    if (newValue === this.index) {
      this.editContent = this.item.text;
    } else {
      this.editContent = "";
    }
  }
  public complete() {
    this.$emit("on-complete", this.index);
  }

  // public edit() {
  //   this.$emit("on-edit", this.index);
  // }
  @Emit("on-edit")
  public edit() {
    return this.index;
  }
  public saveEdit() {
    this.$emit("on-save", {index: this.index, content: this.editContent});
  }
  public cancelEdit() {
    this.$emit("on-cancel");
  }

}
</script>

<style lang="less">
li{
  border:1px solid #e2e2e2;
  border-radius:4px;
  width:300px;
  margin-bottom:10px;
}
.item{
  display:flex;
  align-items: center;
  padding:10px;
  .edit-input{
    width:300px;
  }
  .edit-icon{
    margin-left:20px;
  }
}

.complete{
  text-decoration-line: line-through;
}
</style>
