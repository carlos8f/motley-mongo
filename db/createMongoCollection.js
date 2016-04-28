module.exports = function container (get, set) {
  return function createMongoCollection (name, options, cb) {
    var coll = get('vendor.sosa_mongo')({
      db: get('db.mongo.db')
    })(name, options);
    set('db.' + name, coll);
    setImmediate(cb);
  }
}