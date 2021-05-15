import Model, { attr } from '@ember-data/model';

export const ASSET_TYPES = {
  template: 0,
  image: 1,
  video: 2,
  pdf: 3,
  gif: 4,
  article: 5,
};

export default class AssetModel extends Model {
  @attr('number') type;
  @attr('string') title;
  @attr('number') usedTotalCount;
  @attr('number') createdAt;
  @attr('string') description;
  @attr('arrayString') tags;
  @attr('string') previewImage;
  @attr('externalLink') externalLink;
  @attr('string') originalFileSrc;
  @attr('boolean') isAddToBookMark;

  get isArticleType() {
    return this.type === ASSET_TYPES.article;
  }

  get isPDFType() {
    return this.type === ASSET_TYPES.pdf;
  }
}
