import { StyleSheet } from 'react-native';
export const palette = {
  primary: '#1c73e5',
  secondary: '#aed40f',
};

export const padding = {
  default: 10,
};

export const font = {
  family: {
    RokkittBold: 'Rokkitt-Bold',
    Rokkitt: 'Rokkitt-Regular',
  },
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 20,
  },
};

/**
 * A set of default styles that a majority of pages use
 * @type {Object}
 */
const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  listHeader: {
    backgroundColor: '#333',
    color: palette.primary,
    display: 'flex',
    flexDirection: 'row',
    fontSize: font.size.lg,
    fontWeight: 'bold',
    padding: padding.default,
  },
  listItem: {
    color: palette.secondary,
    display: 'flex',
    flexDirection: 'row',
    fontSize: font.size.md,
    fontWeight: 'bold',
    padding: 10,
  },
  page: {
    height: '100%',
    margin: 0,
    marginTop: 25,
    padding: 0,
  },
  pageHeader: {
    color: '#FFF',
    fontSize: font.size.xl,
    fontFamily: font.family.RokkittBold,
    fontWeight: '800',
    padding: 20,
  },
});

export default defaultStyles;
