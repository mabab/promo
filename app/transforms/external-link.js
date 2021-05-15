import Transform from '@ember-data/serializer/transform';

export default class ExternalLinkTransform extends Transform {
  deserialize(serialized) {
    if (!serialized) {
      return {};
    }

    return {
      href: serialized?.href,
      title: serialized?.title,
    };
  }

  serialize(deserialized) {
    return deserialized;
  }
}
