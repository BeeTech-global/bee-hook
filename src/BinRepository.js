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

  getById(hash, id) {
    return this.getByHash(hash)
      .then(bin => {
        const item = bin.bins.find(bin => bin.id === id);

        if (!item) {
          return Promise.reject(`Resource not found: ${hash}/${id}`);
        }

        return item;
      });
  }

  create(hash, req) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    return this.generateHash()
      .then((id) => {
        const { body, headers, method, query, socket } = req;
        const origin = socket.remoteAddress;
        const host = req.get('host');

        this.bins[hash].bins.push({
          id,
          method,
          body,
          query,
          headers,
          host,
          origin,
          created_at: new Date().toISOString()
        });

        this.bins[hash].last_update = new Date().toISOString();
        this.bins[hash].total = this.bins[hash].bins.length;

        return id;
      });
  }

  deleteHash(hash) {
    if (!this.bins[hash]) {
      return Promise.reject(`Resource not found: ${hash}`);
    }

    delete this.bins[hash];

    return Promise.resolve();
  }

  createBin() {
    return this.generateHash()
      .then((hash) => {
        this.bins[hash] = {
          created_at: new Date().toISOString(),
          last_update: new Date().toISOString(),
          bins: [],
          total: 0
        };

        return hash;
      });
  }

  generateHash() {
    const hash = faker.random.alphaNumeric(10);

    return Promise.resolve(hash);
  }
}

module.exports = BinRepository;