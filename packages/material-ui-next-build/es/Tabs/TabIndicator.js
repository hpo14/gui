var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    position: 'absolute',
    height: 2,
    bottom: 0,
    width: '100%',
    transition: theme.transitions.create(),
    willChange: 'left, width'
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main
  }
});

/**
 * @ignore - internal component.
 */
function TabIndicator(props) {
  const { classes, className: classNameProp, color, style: styleProp } = props;
  const colorPredefined = ['primary', 'secondary'].indexOf(color) !== -1;
  const className = classNames(classes.root, {
    [classes[`color${capitalize(color)}`]]: colorPredefined
  }, classNameProp);

  const style = colorPredefined ? styleProp : _extends({}, styleProp, {
    backgroundColor: color
  });

  return React.createElement('span', { className: className, style: style });
}

TabIndicator.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['primary', 'secondary'])]),
  /**
   * @ignore
   * The style of the root element.
   */
  style: PropTypes.object
};

export default withStyles(styles, { name: 'MuiTabIndicator' })(TabIndicator);