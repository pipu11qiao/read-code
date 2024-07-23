module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // 查找所有的 if 语句
  root.find(j.IfStatement, {
    test: {
      type: 'Identifier',
      name: '__DEV__'
    }
  }).forEach(path => {
    // 移除 if 语句和其包含的代码块
    j(path).remove();
  });

  return root.toSource();
};