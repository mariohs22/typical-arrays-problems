
exports.min = function min (array) {
  if (!array) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!array) return 0;
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  var avg = total / array.length;
  return 0;
}
