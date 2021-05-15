import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AssetsGridComponent extends Component {
  @action
  addToBookMark(asset) {
    asset.toggleProperty('isAddToBookMark');
  }
}
