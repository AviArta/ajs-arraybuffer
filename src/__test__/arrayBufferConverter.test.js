import ArrayBufferConverter from '../arrayBufferConverter';

// eslint-disable-next-line no-undef
test('create ArrayBufferConverter', () => {
    const converter = new ArrayBufferConverter();
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    converter.load(data);
    // eslint-disable-next-line no-undef
    expect(converter.toString()).toBe(data);
});
