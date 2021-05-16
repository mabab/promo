import Component from '@glimmer/component';
import { ASSET_TYPES } from '../../models/asset';

export default class UiAssetTypeViewComponent extends Component {
  /**
   * Get asset type name by assetTypeId
   *
   * @returns {*}
   */
  get name() {
    const item = Object.entries(ASSET_TYPES).find(
      ([, value]) => value === this.args.assetTypeId
    );
    return item?.[0].toLowerCase();
  }
}
