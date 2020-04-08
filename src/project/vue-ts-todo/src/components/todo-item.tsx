import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

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
  protected render() {
    return (
    <li>{this.item.text}</li>
    );
  }
}
