<template>
  <li>

    <div v-if = "index !== editIndex" class = "item">
      <span >{{item.text }}</span>
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
import {Prop, Watch} from "vue-property-decorator";

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

  @Watch('editIndex')
  public editIndexChange(newValue, oldValue){
    if (newValue === this.index) {
      this.editContent = this.item.text;
    } else {
      this.editContent = "";
    }
  }

  public edit() {
    this.$emit("on-edit", this.index);
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
</style>
