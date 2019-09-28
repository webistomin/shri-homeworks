module.exports = isIdentifierArray = (node, scope) => {
  const name = node.name;
  const variable = scope.set.get(name) || scope.upper.set.get(name);
  
  return variable.defs[variable.defs.length - 1].node.init.type === 'ArrayExpression';
};
