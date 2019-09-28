'use strict';

const isIdentifierArray = require('../utils/isIdentifierArray');
const isArrayFrom = require('../utils/isArrayFrom');
const isNewArray = require('../utils/isNewArray');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  
  meta: {
    type: 'suggestion',
    
    docs: {
      description: '_.map to native Array#map',
      category: '',
      recommended: true,
      url: ''
    },
    
    fixable: 'code',
  
    messages: {
      errorMsg: 'Replace lodash with native Array#map'
    }
  },
  
  create(context) {
    let isLodashOverwritten = false;
    let isLodashExists = false;
  
    const fixCode = (fixer, node) => {
      const sourceCode = context.getSourceCode();
      const array = sourceCode.getText(node.arguments[0]);
      const fn = sourceCode.getText(node.arguments[1]);
      return fixer.replaceText(node, `${array}.map(${fn})`);
    };
    
    const reportError = (node) => {
      return context.report({
        node,
        messageId: 'errorMsg',
        data: {
          identifier: node.name
        },
        fix(fixer) {
          return fixCode(fixer, node)
        }
      });
    };
  
    return {
      'VariableDeclaration'(node) {
        context.getDeclaredVariables(node).forEach((item) => {
          if (item.name === '_') {
            isLodashOverwritten = true
          }
        })
      },
      
      'CallExpression'(node) {
        const callee = node.callee;
        const firstArgument = node.arguments[0];
        const firstArgumentType = firstArgument.type;
        isLodashExists = (callee.object.type === 'Identifier' && callee.object.name === '_') ||
          (node.parent.callee && node.parent.callee.object.name === '_' && node.parent.callee.object.type === 'Identifier');
  
        if (isLodashOverwritten || !isLodashExists || firstArgumentType === 'ObjectExpression') {
          return;
        }
        
        if (isArrayFrom(firstArgument) || isNewArray(firstArgument)) {
          reportError(node);
          return;
        }
        
        switch (firstArgumentType) {
          case 'ArrayExpression':
            reportError(node);
            break;
            
          case 'Identifier':
            const scope = context.getScope(node);
            const isArray = isIdentifierArray(firstArgument, scope);
            
            if (isArray) {
              reportError(node);
            }
            break;
        }
      }
    };
  }
};
