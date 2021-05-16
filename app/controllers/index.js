import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort, filter } from '@ember/object/computed';

export default class IndexController extends Controller {
  queryParams = [
    {
      'sort-by': {
        type: 'string',
      },
      'asset-types': {
        type: 'array',
      },
    },
  ];

  /**
   * Get assetTypes from queryParams
   *
   * @returns {[]}
   */
  @computed('asset-types', 'asset-types.length')
  get assetTypes() {
    return this['asset-types']?.length ? this['asset-types'] : [];
  }

  /**
   * Get sortKey from queryParams
   *
   * @returns {string}
   */
  @computed('sort-by')
  get sortKey() {
    return this['sort-by'] === 'created-at' ? 'createdAt' : 'usedTotalCount';
  }

  /**
   * Sort get model by sortKey
   */
  @sort('model', ['sortKey'], function (a, b) {
    return b[this.sortKey] - a[this.sortKey];
  })
  sortModel;

  /**
   * Filter get model by assetTypes
   */
  @filter('sortModel', ['assetTypes'], function (chore) {
    return this.assetTypes.includes(chore.type);
  })
  filterModel;

  /**
   * Get limit assets list after sort and filter the model
   *
   * @returns {*}
   */
  @computed('filterModel', 'sortModel', 'assetTypes')
  get assets() {
    const model =
      Array.isArray(this.assetTypes) && this.assetTypes.length
        ? this.filterModel
        : this.sortModel;
    return model.slice(0, 50);
  }

  /**
   * update query param assetType
   *
   * @param {number} assetType
   * @param {boolean} isAdd
   */
  updateAssetTypeState = (assetType, isAdd) => {
    const currentAssetType = this.assetTypes;
    let newState = Array.isArray(currentAssetType)
      ? [].concat(currentAssetType)
      : [];
    newState = newState.filter((item) => item !== assetType);

    if (isAdd) {
      newState.push(assetType);
    }

    this.set('asset-types', newState);
  };

  /**
   * Custom action on click a use buttton
   *
   * @param asset
   */
  onUseAsset = (asset) => {
    alert('use select', asset);
  };
}
