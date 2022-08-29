<div align="center">
    <img href="https://projecterror.dev" width="150" src="https://i.tasoagc.dev/c1pD" alt="Material-UI logo" />
</div>
<h1 align="center">Svelte & Lua Boilerplate</h1>

This repository is a basic boilerplate for getting started
with Svelte in NUI. It can be used for both in browser and
in game development.

Utilizing `Vite` allows us to have hot builds while developing in game
by restarting the resource, instead of having to make a production build.

This version of the boilerplate is meant for the CfxLua runtime.

## Requirements
* [Node > v10.6](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started/install) (Preferred but not required)

*A basic understanding of the modern web development workflow. If you don't 
know this yet, Svelte might not be for you just yet.*

## Getting Started

First clone the repository or use the template option and place
it within your `resources` folder

### Installation

*The boilerplate was made using `yarn` but is still compatible with
`npm`.*

Install dependencies by navigating to the `web` folder within
a terminal of your choice and type `npm i` or `yarn`.

## Features

This boilerplate comes with some utilities and examples to work off of.

### Svelte Utils

Signatures are not included for these utilities as the type definitions
are sufficient enough.

**Toggling main frame visibility**

You can exit the UI frame using the `ESC` key, if you need to forcefully
hide it you can use `visibility.set()`, visibility being an exported writable
from the Svelte store.

Before being able to use the writable you must first import it from `store/stores.ts`
```svelte
<button on:click={() => visibility.set(false)}>
  Exit
</button>
```

**useNuiEvent**

This is a custom function that is designed to intercept and handle
messages dispatched by the game scripts. This is the primary
way of creating passive listeners.


*Note: For now handlers can only be registered a single time. I haven't
come across a personal usecase for a cascading event system*

**Usage**
```svelte
<script lang="ts">
  let characterName: string;
  
  useNuiEvent<string>('myAction', (data) => {
    // the first argument to the handler function
    // is the data argument sent using SendNUIMessage
    
    // do whatever logic u want here
    characterName = data;
  })
</script>

<div>{characterName}</div>
```

**fetchNui**

This is a simple NUI focused wrapper around the standard `fetch` API.
This is the main way to accomplish active NUI data fetching 
or to trigger NUI callbacks in the game scripts.

When using this, you must always at least callback using `{}`
in the gamescripts.

*This can be heavily customized to your use case*

**Usage**
```svelte
<script lang="ts">
  let clientCoords: {x: number; y: number; z: number};

  fetchNui<{x: number; y: number; z: number}>('getClientData').then(retData => {
    console.log('Got return data from client scripts:', retData);
    clientCoords = retData
  }).catch(e => {
    console.log('Setting mock data due to error', e)
    clientCoords = {x: 500, y: 300: z: 200}
  })
</script>

<div>{clientCoords}</div>
```

**debugData**

This is a function allowing for mocking dispatched game script
actions in a browser environment. It will trigger `useNuiEvent` handlers
as if they were dispatched by the game scripts. **It will only fire if the current
environment is a regular browser and not CEF**

**Usage**
```ts
// This will target the useNuiEvent function registered with `setVisible`
// and pass them the data of `true`
<script lang="ts">
  debugData([
    {
      action: 'setVisible',
      data: true,
    }
  ])
<script
```

**Misc Utils**

These are small but useful included utilities.

* `isEnvBrowser()` - Will return a boolean indicating if the current 
  environment is a regular browser. (Useful for logic in development)

## Development Workflow


**Hot builds**
When developing in-game you can use the hot build system by running
the `dev:game` script. This will write changes to disk meaning all
that is required is a resource restart to update the game script.

For development in browser you can just run `dev` instead.

**Usage**
```sh
# yarn
yarn dev
# npm
npm run dev
```

**Production Builds**

When you are done with development phase for your resource. You
must create a production build that is optimized and minimized.

You can do this by running the following:

```sh
npm run build
yarn build 
```

## Additional Notes

Need further support? Join our [Discord](https://discord.com/invite/HYwBjTbAY5)!
