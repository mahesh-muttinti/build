# Snapshot report for `packages/build/tests/manifest/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## manifest.yml advanced YAML

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Could not parse plugin's "manifest.yml"␊
      unknown tag !<tag:yaml.org,2002:js/undefined> at line 2, column 1:␊
    ␊
          ^␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml check default value

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    defaultTest␊
    ␊
    (/file/path onPreBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## manifest.yml check required inputs

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌───────────────────────────────────────────┐␊
    │ Plugin "/file/path" invalid input "test" │␊
    └───────────────────────────────────────────┘␊
    ␊
      Error message␊
      Required inputs for plugin "/file/path": test, testTwo␊
    ␊
      Plugin inputs␊
      {}␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml check unknown property

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            test: true␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌───────────────────────────────────────────┐␊
    │ Plugin "/file/path" invalid input "test" │␊
    └───────────────────────────────────────────┘␊
    ␊
      Error message␊
      Invalid input "test" for plugin "/file/path".␊
      Check your plugin configuration to be sure that:␊
        - the input name is spelled correctly␊
        - the input is included in the plugin's available configuration options␊
        - the plugin's input requirements have not changed␊
    ␊
      Plugin inputs␊
      test: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs:␊
            test: true␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs array

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property must be an array of objects␊
    ␊
      manifest.yml␊
      name: test␊
      inputs: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs array of objects

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property must be an array of objects␊
    ␊
      manifest.yml␊
      name: test␊
      inputs: [true]␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs description is a string

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property is invalid.␊
      Input at position 0 "description" property must be a string.␊
    ␊
      manifest.yml␊
      name: test␊
      inputs:␊
        - name: name␊
          description: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs name is string

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property is invalid.␊
      Input at position 0 "name" property must be a string.␊
    ␊
      manifest.yml␊
      name: test␊
      inputs:␊
        - name: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs name is undefined

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property is invalid.␊
      Input at position 0 must contain a "name" property.␊
    ␊
      manifest.yml␊
      name: test␊
      inputs:␊
        - {}␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs required is a boolean

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property is invalid.␊
      Input at position 0 "required" property must be a boolean.␊
    ␊
      manifest.yml␊
      name: test␊
      inputs:␊
        - name: test␊
          required: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml inputs unknown property

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "inputs" property is invalid.␊
      Input at position 0 has an unknown property "unknown".␊
    ␊
      manifest.yml␊
      name: test␊
      inputs:␊
        - name: test␊
          unknown: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml missing

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: This plugin is missing a "manifest.yml".␊
      Please see the documentation at https://github.com/netlify/build#anatomy-of-a-plugin␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml name is a string

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" "name" property must be a string␊
    ␊
      manifest.yml␊
      name: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml name undefined

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" must contain a "name" property␊
    ␊
      manifest.yml␊
      inputs: []␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml node module

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: netlify-plugin-test␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────────────┐␊
    │ Plugin "netlify-plugin-test" internal error │␊
    └─────────────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" must be a plain object␊
    ␊
      manifest.yml␊
      true␊
    ␊
      Plugin details␊
      Package:        netlify-plugin-test␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/test/test.git␊
      npm link:       https://www.npmjs.com/package/netlify-plugin-test␊
      Report issues:  https://test.com/test␊
    ␊
      Error location␊
      While loading "netlify-plugin-test" from netlify.toml and package.json␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: netlify-plugin-test`

## manifest.yml not root directory

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌──────────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └──────────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: This plugin is missing a "manifest.yml".␊
      Please see the documentation at https://github.com/netlify/build#anatomy-of-a-plugin␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml parse error

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Could not parse plugin's "manifest.yml"␊
      unknown tag !<tag:yaml.org,2002:build> at line 2, column 1:␊
    ␊
          ^␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml plain object

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" must be a plain object␊
    ␊
      manifest.yml␊
      true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml root directory

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌───────────────────────────────────────────────┐␊
    │ Plugin "/file/path" invalid input "one" │␊
    └───────────────────────────────────────────────┘␊
    ␊
      Error message␊
      Invalid input "one" for plugin "/file/path".␊
      Check your plugin configuration to be sure that:␊
        - the input name is spelled correctly␊
        - the input is included in the plugin's available configuration options␊
        - the plugin's input requirements have not changed␊
    ␊
      Plugin inputs␊
      one: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml same directory

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs:␊
            one: test␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌──────────────────────────────────────────┐␊
    │ Plugin "/file/path" invalid input "one" │␊
    └──────────────────────────────────────────┘␊
    ␊
      Error message␊
      Invalid input "one" for plugin "/file/path".␊
      Check your plugin configuration to be sure that:␊
        - the input name is spelled correctly␊
        - the input is included in the plugin's available configuration options␊
        - the plugin's input requirements have not changed␊
    ␊
      Plugin inputs␊
      one: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## manifest.yml unknown properties

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Plugin's "manifest.yml" unknown property "unknown"␊
    ␊
      manifest.yml␊
      name: test␊
      unknown: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`