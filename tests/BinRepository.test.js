const BinRepository = require('../src/BinRepository');

beforeEach(() => {
  this.binRepository = new BinRepository();
});

describe('#BinRepository', () => {
  test('Should initialize with bins as empty object', () => {
    expect(this.binRepository.bins).toEqual({});
  });

  describe('#getAll', () => {
    beforeEach(() => {
      return Promise.all([
        this.binRepository.createBin(),
        this.binRepository.createBin(),
        this.binRepository.createBin()
      ]);
    });

    test('Should returns 3 items', () => {
      return this.binRepository.getAll()
        .then(bins => {
          expect(bins).toHaveLength(3);
          expect(bins).toHaveLength(3);
          bins.forEach(bin => {
            expect(bin).toHaveProperty('hash');
            expect(bin).toHaveProperty('created_at');
            expect(bin).toHaveProperty('last_update');
            expect(bin).toHaveProperty('total');
            expect(bin.total).toEqual(0);
          });
        });
    });
  });
});