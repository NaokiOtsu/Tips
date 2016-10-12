module.exports = {
  use: ['postcss-nested', 'autoprefixer', 'cssnano'],
  input: './css/style.css',
  output: './css/style.min.css',
  autoprefixer: {
    browsers: ['last 2 versions', 'android >= 2']
  }
};