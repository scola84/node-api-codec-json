const stream = require('stream');

class JsonEncoder extends stream.Transform {
  constructor() {
    super({
      objectMode: true
    });
  }

  _transform(data, encoding, callback) {
    try {
      this.push(JSON.stringify(data));
      callback();
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = JsonEncoder;
