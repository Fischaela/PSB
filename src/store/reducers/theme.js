import get from 'lodash/get';
import color from 'color';

const themeColors = (styles = {}) => {
  const main = get(styles, 'main', '#2B8AC6');
  const mainColor = color(main);
  const highlight = get(styles, 'highlight');

  const light = '#fff';
  const dark = '#000';
  const grey = '#333';

  const luminosity = color(main).luminosity();
  console.log('Luminosity', color(main).luminosity());
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
  }

  const styleConfig = get(styles, 'style', 'filled');
  // default style: filled
  let backgroundColor = main;
  let unthemedBackgroundColor = backgroundColor;
  let backgroundColorHover = getHoverColor();
  let unthemedBackgroundColorHover = backgroundColorHover;
  let border = 'none';
  let borderHover = 'none';
  let textColor = getContrastColor(mainColor);
  let unthemedTextColor = textColor;
  let textColorHover = negative ? backgroundColorHover.lighten(0.7) : backgroundColorHover.darken(0.5);
  let unthemedTextColorHover = textColorHover;
  let iconColor = textColor;
  let iconColorHover = textColorHover;

  switch (styleConfig) {
    case 'outline':
      backgroundColor = 'transparent';
      backgroundColorHover = 'transparent';
      border = 'solid 0.175em ' + main;
      borderHover = 'solid 0.175em ' + getHoverColor();
      textColor = main;
      textColorHover = getHoverColor();
      iconColor = textColor;
      iconColorHover = textColorHover;
      break;
    case 'frameless':
      backgroundColor = 'transparent';
      backgroundColorHover = 'transparent';
      break;
  }

  const formatConfig = get(styles, 'format', 'rectangle');
  // default format: rectangle

  switch (formatConfig) {
    case 'square':
      buttonWidth = buttonHeight;
      break;
    case 'cover':
      break;
  }

  function getHoverColor() {
    return negative ? mainColor.lighten(0.15) : mainColor.darken(0.1);
  }

  function getContrastColor(inputColor) {
    let newColor;

    if (color(inputColor).luminosity() >= 0.9 ) {
      newColor = inputColor.darken(0.6);
    } else if (color(inputColor).luminosity() >= 0.6 && color(inputColor).luminosity() < 0.9) {
      newColor = inputColor.darken(0.3);
    } else if (color(inputColor).luminosity() >= 0.6 && color(inputColor).luminosity() < 0.9) {
      newColor = inputColor.lighten(0.3);
    } else {
      newColor = inputColor.lighten(0.6);
    }

    return newColor;
  }

  return {
    button: {
      backgroundColor: backgroundColor,
      backgroundColorHover: backgroundColorHover,
      border: border,
      borderHover: borderHover,
      textColor: textColor,
      textColorHover: textColorHover,
      textSize: textSize,
      width: buttonWidth,
      height: buttonHeight,
      format: formatConfig
    },
    cover: {
      width: buttonWidth,
      height: buttonWidth
    },
    icon: {
      color: iconColor,
      colorHover: iconColorHover,
      width: iconWidth,
      height: iconHeight
    },
    unthemedButton: {
      backgroundColor: unthemedBackgroundColor,
      backgroundColorHover: unthemedBackgroundColorHover,
      textColor: unthemedTextColor,
      textColorHover: unthemedTextColorHover
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
