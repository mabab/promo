import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TagsComponent extends Component {
  @tracked visibleTags = null;
  @tracked hideTags = null;

  /**
   * Hook did insert hidden tag container
   *
   * @param {HTMLElement} element
   */
  insertContainer = (element) => {
    this.setTagsGroups(element);
  };

  /**
   * Split all tags into hide and visible group
   *
   * @param {HTMLElement} element
   */
  setTagsGroups(element) {
    const tags = element.querySelectorAll('.tag');
    let emptyWidth = element.offsetWidth;
    let visibleTags = [];
    let hideTags = [];
    const tagsLength = tags.length;
    const freeSpace = 20;
    const gap = parseInt(getComputedStyle(element)?.columnGap || 0);

    tags.forEach((tag, index) => {
      const currentWidth = tag.offsetWidth;
      const isFirstElement = index === 0;
      const isLastElement = index === tagsLength - 1;
      emptyWidth -= currentWidth;
      if (!isFirstElement) {
        emptyWidth -= gap;
      }
      const isCanAddToShowTags =
        (isLastElement && emptyWidth >= 0) || emptyWidth > freeSpace + gap;

      if (isCanAddToShowTags) {
        visibleTags.push(tag);
      } else {
        hideTags.push(tag);
      }
    });

    this.visibleTags = visibleTags;
    this.hideTags = hideTags;
  }
}
