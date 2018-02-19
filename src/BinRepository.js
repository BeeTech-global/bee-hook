const faker = require('faker');

class BinRepository {
  constructor() {
    this.bins = {};
  }

  getAll() {
    const bins = Object.entries(this.bins)
      .map(([hash, { created_at, last_update, total }]) => (
        {
          hash,
          created_at,
          last_update,
          total
        }
      ));

    return Promise.resolve(bins);
  }

  getByHash(hash) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    return Promise.resolve(this.bins[hash]);
  }

  create(hash, { body, headers, method, query }) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    this.bins[hash].bins.push({
      method,
      body,
      query,
      headers,
      created_at: new Date().toISOString()
    });

    this.bins[hash].last_update = new Date().toISOString();
    this.bins[hash].total = this.bins[hash].bins.length;

    return Promise.resolve();
  }

  deleteHash(hash) {
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
        last_update: new Date().toISOString(),
        bins: []
      };
    }

    return Promise.resolve(hash);
  }
}

module.exports = BinRepository;