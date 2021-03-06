# Snapshot report for `packages/config/tests/context/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Context array merge

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "ignore": [␊
            "c",␊
            "d"␊
          ]␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context deep merge

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {␊
            "one": "one",␊
            "two": "two"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        },␊
        "one": {␊
          "sources": [␊
            "configFile"␊
          ],␊
          "value": "one"␊
        },␊
        "two": {␊
          "sources": [␊
            "configFile"␊
          ],␊
          "value": "two"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context default value

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context environment variable

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "testContext",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testContext"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context merge priority

> Snapshot 1

    `{␊
      "branch": "testBranch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTestBranch",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context with branch CLI flag

> Snapshot 1

    `{␊
      "branch": "testBranch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context with branch environment variable

> Snapshot 1

    `{␊
      "branch": "testBranch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context with branch fallback

> Snapshot 1

    `{␊
      "branch": "master",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "master"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "master"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context with branch git

> Snapshot 1

    `{␊
      "branch": "testBranch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "production"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testBranch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`

## Context with context CLI flag

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "command": "echo commandTest",␊
          "commandOrigin": "config",␊
          "environment": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "testContext",␊
      "env": {␊
        "BRANCH": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "CACHED_COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "COMMIT_REF": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "HEXADECIMAL_ID"␊
        },␊
        "CONTEXT": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "testContext"␊
        },␊
        "GATSBY_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "HEAD": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "branch"␊
        },␊
        "LANG": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "LANGUAGE": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US:en"␊
        },␊
        "LC_ALL": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "en_US.UTF-8"␊
        },␊
        "NEXT_TELEMETRY_DISABLED": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "1"␊
        },␊
        "PULL_REQUEST": {␊
          "sources": [␊
            "general"␊
          ],␊
          "value": "false"␊
        }␊
      },␊
      "siteInfo": {}␊
    }`
