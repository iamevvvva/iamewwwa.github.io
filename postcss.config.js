module.exports = {
  syntax: 'postcss-scss', // Указание на использование SCSS-синтаксиса
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
    }),
  ],
};
