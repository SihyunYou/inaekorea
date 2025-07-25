module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;

      const cssRuleIndex = oneOfRule.findIndex(
        rule => rule.test && rule.test.toString().includes('css')
      );

      // slick-carousel css를 제외한 postcss-loader 적용
      oneOfRule.splice(cssRuleIndex, 0, {
        test: /\.css$/,
        include: /node_modules\/slick-carousel/,
        use: ['style-loader', 'css-loader'],  // postcss-loader 제외
      });

      return webpackConfig;
    },
  },
};
