const mapRes = require('./app');

test('Substitute template with value', () => {
    var map = new Map();
    map.set("key1", "value1");
    map.set("key2", "${key1}value2");
    expect(Array.from(mapRes(map))).toEqual([["key1", "value1"], ["key2", "value1value2"]]);
});

test('No template to substitute', () => {
    var map = new Map();
    map.set("key1", "value1");
    map.set("key2", "key1value2");
    expect(mapRes(map)).toEqual("Map doesn't have any template to substitute");
});

test('If key is undefined or null', () => {
    var map = new Map();
    map.set(undefined, "value1");
    map.set("key2", "{key1}value2");
    expect(mapRes(map)).toEqual("Key of value 'value1' can't be undefined or null");
});

test('If value is undefined or null', () => {
    var map = new Map();
    map.set("key1", null);
    map.set("key2", "{key1}value2");
    expect(mapRes(map)).toEqual("Value of key 'key1' can't be undefined or null");
});

test('If key is not a string', () => {
    var map = new Map();
    map.set(1, "value1");
    map.set("key2", "{key1}value2");
    expect(mapRes(map)).toEqual("'1' must be a string");
});

test('If value is not a string', () => {
    var map = new Map();
    map.set("key1", "value1");
    map.set("key2", false);
    expect(mapRes(map)).toEqual("'false' must be a string");
});