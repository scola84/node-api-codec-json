const type = 'application/json';

import { default as Encoder } from './src/encoder';
import { default as Decoder } from './src/decoder';

export const codec = {
  Decoder,
  Encoder
};

export function decoder() {
  return {
    type,
    create: () => new Decoder()
  };
}

export function encoder() {
  return {
    type,
    create: () => new Encoder()
  };
}
