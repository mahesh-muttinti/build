'use strict'

module.exports = {
  onBuild({
    utils: {
      build: { failBuild },
    },
  }) {
    failBuild('error')
  },
}
