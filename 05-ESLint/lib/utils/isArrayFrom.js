module.exports = isArrayFrom = (node) => {
  const callee = node.callee;
  
  return node.type === 'CallExpression' &&
    callee.type === 'MemberExpression' &&
    callee.computed === false &&
    callee.object.type === 'Identifier' &&
    callee.object.name === 'Array' &&
    callee.property.type === 'Identifier' &&
    callee.property.name === 'from';
};
