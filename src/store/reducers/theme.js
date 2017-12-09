import get from 'lodash/get';
import color from 'color';

const themeColors = (styles = {}) => {
  const main = get(styles, 'main', '#2B8AC6');
  const highlight = get(styles, 'highlight');

  const light = '#fff';
  const dark = '#000';
  const grey = '#333';

  const luminosity = color(main).luminosity();
  const negative = luminosity < 0.25;

  const fallbackColor = (first, second) => first || second;

  const sizeConfig = get(styles, 'size', 'small');
  // deftault size: small
  let buttonWidth = '108px';
  let buttonHeight = '27px';
  let textSize = '10px';

  switch (sizeConfig) {
    case 'medium':
      buttonWidth = '140px';
      buttonHeight = '41px';
      textSize = '12px';
      break;
    case 'big':
      buttonWidth = '180px';
      buttonHeight = '54px';
      textSize = '16px';
      break;
    default:
      return;
  }

  const styleConfig = get(styles, 'style', 'filled');
  // default style: filled
  let backgroundColor = main;
  let border = 'none';
  let textColor = negative ? light : dark;
  let iconColor = negative ? light : dark;

  switch (styleConfig) {
    case 'outline':
      backgroundColor = 'transparent';
      border = 'solid 0.175em ' + main;
      textColor = main;
      iconColor = main;
      break;
    case 'frameless':
      backgroundColor = 'transparent';
  }

  return {
    button: {
      backgroundColor: backgroundColor,
      border: border,
      iconColor: iconColor,
      textColor: textColor,
      textSize: textSize,
      width: buttonWidth,
      height: buttonHeight
    }
  }
};

const theme = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return Object.assign({}, state, themeColors(get(action.payload, 'theme')));
    case 'SET_THEME':
      return Object.assign({}, state, themeColors(action.payload));
    default:
      return state;
  }
};

export {
  theme
}
