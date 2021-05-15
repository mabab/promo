import Transform from '@ember-data/serializer/transform';

export default class ArrayStringTransform extends Transform {
  deserialize(serialized) {
    const array = Array.isArray(serialized) ? serialized : [];
    return array.filter((item) => typeof item === 'string');
  }

  serialize(deserialized) {
    return deserialized;
  }
}
