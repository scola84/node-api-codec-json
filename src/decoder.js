import { Transform } from 'stream';

export default class JsonDecoder extends Transform {
  constructor() {
    super({
      objectMode: true
    });

    this.data = '';
  }

  _transform(data, encoding, callback) {
    this.data += data;
    callback();
  }

  _flush(callback) {
    try {
      this.push(JSON.parse(this.data));
      callback();
    } catch (error) {
      callback(error);
    }
  }
}
