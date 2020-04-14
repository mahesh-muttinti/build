const {
  cyanBright: { bold: cyanBrightBold },
  cyan: { bold: cyanBold },
  cyan,
  redBright: { bold: redBrightBold },
  red: { bold: redBold },
  gray,
} = require('chalk')

// Color theme. Please use this instead of requiring chalk directly, to ensure
// consistent colors.
const THEME = {
  // Main headers
  header: cyanBrightBold,
  // Single lines used as subheaders
  subHeader: cyanBold,
  // Main headers indicating an error
  errorHeader: redBrightBold,
  // Single lines used as subheaders indicating an error
  errorSubHeader: redBold,
  // One of several words that should be highlighted inside a line
  highlightWords: cyan,
  // One of several words that should be dimmed inside a line
  dimWords: gray,
}

module.exports = { THEME }