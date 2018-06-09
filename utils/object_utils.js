const removeEmptyProperties = (obj) => {
  const o = JSON.parse(JSON.stringify(obj)); // Clone source oect.

  Object.keys(o).forEach(key => {
    if (o[key] && typeof o[key] === 'object')
      o[key] = removeEmptyProperties(o[key]);  // Recurse.
    else if (o[key] === undefined || o[key] === null)
      delete o[key]; // Delete undefined and null.
    else
      o[key] = o[key];  // Copy value.
  });

  return o; // Return new object.
};

module.exports.removeEmptyProperties = removeEmptyProperties;