const faker = require('faker');

class BinRepository {
  constructor() {
    this.bins = {};
  }

  getAll() {
    return Promise.resolve(Object.keys(this.bins));
  }

  getByHash(hash) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    return Promise.resolve(this.bins[hash]);
  }

  create(hash, { body, headers }) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    this.bins[hash].bins.push({
      body, 
      headers,
      created_at: new Date().toISOString() 
    });

    return Promise.resolve();
  }

  deleteHash(hash){
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    delete this.bins[hash];

    return Promise.resolve();
  }

  generateHash() {
    const hash = faker.random.alphaNumeric(10);
    if (this.bins[hash]) {
      this.generateHash();
    } else {
      this.bins[hash] = {
        created_at: new Date().toISOString(),
        bins: []
      };
    }

    return Promise.resolve(hash);
  }
}

module.exports = BinRepository;