import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AssetsGridComponent extends Component {
  /**
   * Add to book mark
   *
   * @param asset
   */
  @action
  addToBookMark(asset) {
    asset.toggleProperty('isAddToBookMark');
  }
}
