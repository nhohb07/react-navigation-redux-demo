import color from 'color';

const mainColor = '#063350';

export default {
  mainColor,
  get androidStatusBarColor() {
    return color(mainColor).darken(0.2).hex();
  },
}