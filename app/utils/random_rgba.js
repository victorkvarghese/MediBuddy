export const random_rgba = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;

  const labelColor =
    'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';

  const buttonColor = labelColor.replace(',1)', ',0.1)');

  return { labelColor, buttonColor };
};
