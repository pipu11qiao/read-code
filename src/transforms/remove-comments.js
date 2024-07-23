module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // 移除所有注释
  root.find(j.Comment).forEach((path) => {
    j(path).remove();
  });

  // 移除所有块注释
  root.find(j.Block).forEach((path) => {
    j(path).remove();
  });

  return root.toSource();
};
