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
  let iconWidth = '18px';
  let iconHeight = iconWidth;

  switch (sizeConfig) {
    case 'medium':
      buttonWidth = '140px';
      buttonHeight = '41px';
      textSize = '12px';
      iconWidth = '22px';
      iconHeight = iconWidth;
      break;
    case 'big':
      buttonWidth = '180px';
      buttonHeight = '54px';
      textSize = '16px';
      iconWidth = '30px';
      iconHeight = iconWidth;
      break;
    default:
      return;
  }

  const styleConfig = get(styles, 'style', 'filled');
  // default style: filled
  let backgroundColor = main;
  let border = 'none';
  let textColor = negative ? light : dark;
  let iconColor = textColor;

  switch (styleConfig) {
    case 'outline':
      backgroundColor = 'transparent';
      border = 'solid 0.175em ' + main;
      textColor = main;
      iconColor = textColor;
      break;
    case 'frameless':
      backgroundColor = 'transparent';
    default:
      return;
  }

  const formatConfig = get(styles, 'format', 'rectangle');
  // default format: rectangle

  switch (formatConfig) {
    case 'square':
      buttonWidth = buttonHeight;
      break;
    case 'cover':
      break;
    default:
      return;
  }


  return {
    button: {
      backgroundColor: backgroundColor,
      border: border,
      textColor: textColor,
      textSize: textSize,
      width: buttonWidth,
      height: buttonHeight,
      format: formatConfig
    },
    icon: {
      color: iconColor,
      width: iconWidth,
      height: iconHeight
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
