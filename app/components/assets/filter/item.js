import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AssetsFilterItemComponent extends Component {
  constructor(app, args) {
    super(app, args);
    this.isChecked = args.currentState?.includes(args.value);
  }

  @tracked isChecked = false;
}
