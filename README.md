# Do nothing script
Inspired by [Do-nothing scripting: the key to gradual automation](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/) by [Dan Slimmon](https://blog.danslimmon.com/). All credit to Dan, I just wanted a version that utilised [Deno](https://deno.com/runtime) for my own use.

## Preamble
This is a script that doesn't really do much as it is but consider it a template. It has steps (represented by a function per step) and it executes each of these steps in a set order which prints out instructions. It waits for user confirmation for each step and lets the user know when all steps have been executed.

Refer to the article above to find out why this is useful (it convinced me!).

## Why Deno?
To eliminate as much configuration friction as possible. Deno supports TypeScript out of the box and includes linting and running tests without adding additional packages and config files. Node is great but it's a faff for scripting.

This should probably be a bash script but I'll prefer using TypeScript when converting manual steps to be automated.

## Prerequisites
- Install the latest version of [Deno](https://deno.com/manual@v1.34.2/getting_started/installation).
- Verify installation using `deno --version` (This will print the version you installed).
- To modify scripts [configure your editor for Deno](https://deno.com/manual@v1.34.2/getting_started/setup_your_environment) and get stuck in.

## Commands
Run the script:
```bash
deno run main.ts
```

Linting:
```bash
deno lint
```

## Usage in the real world
- Rename `main.ts` to the name of your task e.g. `do-a-thing.ts`.
- Rename/add steps to represents the steps of your tasks.
- Replace the content of each step function to print out the manual instructions for that step.
- When a step can be automated, replace the manual step output with the automation itself. This means you can have a mix of automated and manual steps with the aim of full automation eventually.

## License
[MIT](https://choosealicense.com/licenses/mit/)