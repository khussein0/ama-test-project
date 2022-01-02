var map = new Map();
map.set("key1", "value1");
map.set("key2", "${key1}value2");

function valueSub(map){
    var message = "Map doesn't have any template to substitute";
    Array.from(map.keys()).map(key => {
        if(map.get(key).includes("$")){
            message = "Success";
            for(var keys of map.keys()){
                map.set(key, map.get(key).replace('${' + keys + '}', map.get(keys)));
            };
        };
    });
    return message === "Success" ? map : message;
};

function mapRes(map){
    for(const[key, value] of map.entries()){
        if(key === undefined || key === null) return "Key of value '" + value + "' can't be undefined or null";
        if(value === undefined || value === null) return "Value of key '" + key + "' can't be undefined or null";
        if(typeof(key) !== "string") return "'" + key + "' must be a string";
        if(typeof(value) !== "string") return "'" + value + "' must be a string";
    };
    return valueSub(map);
};

mapRes(map);

module.exports = mapRes;