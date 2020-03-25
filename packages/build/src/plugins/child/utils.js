const cacheUtils = require('@netlify/cache-utils')
const runUtils = require('@netlify/run-utils')
const functionsUtils = require('@netlify/functions-utils')

const { failBuild, failPlugin, cancelBuild } = require('../error')

// Some utilities need to perform some async initialization logic first.
// We do it once for all plugins in the parent process then pass it to the child
// processes.
const startUtils = async function() {
  return {}
}

// Retrieve the `utils` argument.
const getUtils = function({ constants: { FUNCTIONS_SRC } }) {
  const buildUtils = { failBuild, failPlugin, cancelBuild }
  const add = src => functionsUtils.add(src, FUNCTIONS_SRC, { fail: failBuild })
  const functions = { add }
  const utils = {
    build: buildUtils,
    cache: cacheUtils,
    run: runUtils,
    functions,
  }

  // Older names, kept for backward compatibility. Non-enumerable.
  // TODO: remove after beta is done
  Object.defineProperty(utils.build, 'fail', { value: utils.build.failBuild })
  Object.defineProperty(utils.build, 'cancel', { value: utils.build.cancelBuild })

  return utils
}

module.exports = { startUtils, getUtils }
