const path = require('path')
const makeDir = require('make-dir')
const execa = require('execa')
const installDependencies = require('./install')
const installMissingCommands = require('./install/missing-commands')
const { readFile } = require('./src/utils/fs')

const NETLIFY_BUILD_BASE = '/opt/buildhome'
const NETLIFY_CACHE_DIR = `${NETLIFY_BUILD_BASE}/cache`
const NETLIFY_REPO_DIR = `${NETLIFY_BUILD_BASE}/repo`
const CWD = process.cwd()

const directories = [
  // # language versions
  `${NETLIFY_CACHE_DIR}/node_version`,
  `${NETLIFY_CACHE_DIR}/ruby_version`,
  // # pwd caches`
  `${NETLIFY_CACHE_DIR}/node_modules`,
  `${NETLIFY_CACHE_DIR}/.bundle`,
  `${NETLIFY_CACHE_DIR}/bower_components`,
  `${NETLIFY_CACHE_DIR}/.venv`,
  `${NETLIFY_CACHE_DIR}/wapm_packages`,
  // # HOME caches
  `${NETLIFY_CACHE_DIR}/.yarn_cache`,
  `${NETLIFY_CACHE_DIR}/.cache`,
  `${NETLIFY_CACHE_DIR}/.cask`,
  `${NETLIFY_CACHE_DIR}/.emacs.d`,
  `${NETLIFY_CACHE_DIR}/.m2`,
  `${NETLIFY_CACHE_DIR}/.boot`,
  `${NETLIFY_CACHE_DIR}/.composer`,
  `${NETLIFY_CACHE_DIR}/.gimme_cache/gopath`,
  `${NETLIFY_CACHE_DIR}/.gimme_cache/gocache`,
  `${NETLIFY_CACHE_DIR}/.wasmer/cache`,
]

const globals = {
  GIMME_TYPE: 'binary',
  GIMME_NO_ENV_ALIAS: true,
  GIMME_CGO_ENABLED: true,
  NVM_DIR: '$HOME/.nvm',
  RVM_DIR: '$HOME/.rvm',
  // Pipenv configuration
  PIPENV_RUNTIME: 2.7,
  PIPENV_VENV_IN_PROJECT: 1,
  PIPENV_DEFAULT_PYTHON_VERSION: 2.7,
  // CI signal
  NETLIFY: true
}

async function runBuildFunction() {
  // Whats NETLIFY_VERBOSE do?

  /* Set Globals env vars */
  Object.keys(globals).map((key) => {
    process.env[key] = globals[key]
  })

  /* Make directories */
  const newDirPaths = await Promise.all(directories.map((dir) => {
    return makeDir(dir)
  }))
}

async function runBuild() {
  // inputs from Buildbot
  const dir = '$(dirname $0)'
  const build_dir = '$1'
  const node_version = '$2'
  const ruby_version = '$3'
  const yarn_version = '$4'
  const cmd = '$5'
  const php_version = '5.6'
  const functions_dir = '$6'
  const zisi_temp_dir = '$7'

  const BUILD_COMMAND = '$cmd'
  /*
  const BUILD_COMMAND_PARSER = $(cat <<EOF
  $cmd
  EOF
  )
  */

  await runBuildFunction()

  console.log('Installing dependencies')
  await installDependencies({
    node_version,
    ruby_version,
    yarn_version,
    php_version,
    go_version: '.shrug',
    CWD: CWD,
    NETLIFY_CACHE_DIR: NETLIFY_CACHE_DIR
  })

  /* Parse build command and try to fix missing deps */
  await installMissingCommands(CWD, NETLIFY_CACHE_DIR, BUILD_COMMAND)

  console.log('Verify run directory')
  // set_go_import_path

  /* Run the build command */
  console.log('Executing user command: $cmd')
  try {
    await execa(cmd)
  } catch (err) {
    console.log('Build Error', err)
    process.exit(1)
  }

  /* Compile serverless functions */
  // prep_functions $functions_dir $zisi_temp_dir

  /* Cache all the things */
  // cache_artifacts

  /* Report lingering process */
  // report_lingering_procs
  // https://www.npmjs.com/package/ps-list
}
