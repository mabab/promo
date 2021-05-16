import Component from '@glimmer/component';
import { ASSET_TYPES } from 'promo-republic/models/asset';
import { action } from '@ember/object';

export default class AssetsFilterComponent extends Component {
  get assetTypes() {
    return ASSET_TYPES;
  }

  /**
   * On change checkbox state
   *
   * @param event
   */
  @action
  onChange(event) {
    this.args.updateAssetTypeState(+event.target.value, event.target.checked);
  }
}
