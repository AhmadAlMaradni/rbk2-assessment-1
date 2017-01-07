var Stack = function() {
  var _storage = {}
  var size= 0
  _storage.add = function (value) {
    _storage[size++]=value
  }

  _storage.remove = function () {
    var temp = _storage[size-1]
    delete _storage[size-1]
    size--;
    return temp

  }
  return _storage
};