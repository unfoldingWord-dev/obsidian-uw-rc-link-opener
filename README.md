# Obsidian uW RC Link Opener

This is a plugin for Obsidian (https://obsidian.md).

Opens the file locally that an  RC links in a Markdown file refers to, creating it if it doesn't exist

This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

This plugin does the following:

Takes a Markdown link like `[God](rc://en/tw/dict/bible/kt/god)` and finds that locally in the same valud as en_tw/bible/kt/god.md

### Using this plugin

To use:

- Clone your repo to your Obsidian vault's `.obsidian/plugins` directory (create if doesn't exist). Should result in a subdirectory with the path of `<Vault Dir>/.obsidian/plugins/obsidian-uw-rc-link-opener`.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run build` to compile this plugin from `main.ts` to `main.js`.
- If you want to develop and see you changes get compiled in real-time, run `npm run dev`
