var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      if(this._storage.includes(key))
        return true
      return false
    },

    insert: function(key, value) {
      this._storage[key]=value
  }
};
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
