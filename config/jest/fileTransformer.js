export default {
  process(sourceText, sourcePath) {
    const fileName = sourcePath.split('/').pop().split('\\').pop();
    return {
      code: `export default ${JSON.stringify(fileName)};`,
    };
  },
};
