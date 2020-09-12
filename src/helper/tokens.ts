import uuid from 'uuid';

export const tokens = Object.freeze({
  generate() {
    return uuid.v4();
  },
});
