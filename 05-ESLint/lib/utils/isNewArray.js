module.exports = isNewArray = (node) => {
  const callee = node.callee;
  
  return node.type === 'NewExpression' &&
    callee.type === 'Identifier' &&
    callee.name === 'Array';
};
