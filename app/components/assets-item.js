import Component from '@glimmer/component';

export default class AssetsItemComponent extends Component {
  get asset() {
    return this.args.asset;
  }
}
