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

  @computed('asset-types', 'asset-types.length')
  get assetTypes() {
    return this['asset-types']?.length ? this['asset-types'] : [];
  }

  @computed('sort-by')
  get sortKey() {
    return this['sort-by'] === 'created-at' ? 'createAt' : 'usedTotalCount';
  }

  @sort('model', ['sortKey'], function (a, b) {
    return b[this.sortKey] - a[this.sortKey];
  })
  sortModel;

  @filter('sortModel', ['assetTypes'], function (chore) {
    return this.assetTypes.includes(chore.type);
  })
  filterModel;

  @computed('filterModel', 'sortModel', 'assetTypes')
  get assets() {
    const model =
      Array.isArray(this.assetTypes) && this.assetTypes.length
        ? this.filterModel
        : this.sortModel;
    return model.slice(0, 50);
  }

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

  onUseAsset = (asset) => {
    alert('use select', asset);
  };
}
