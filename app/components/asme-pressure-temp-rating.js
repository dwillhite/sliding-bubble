import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AsmePressureTempRatingComponent extends Component {

@tracked inputOne;
@tracked inputTwo;
@tracked inputProjectNumber;

get sumOneTwo() {
  return +this.inputOne + +this.inputTwo;
}
}
