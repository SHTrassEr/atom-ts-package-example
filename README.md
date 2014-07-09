# Sample atom.io package in typescript.

## Quickstart

    npm install --save-dev
    cd src &&  ../node_modules/.bin/tsd update -so
    grunt

You must then copy the folder into your .atom/packages directory, or run:

    apm install .

From the cloned folder.

For development purposes it's convenient to create a symbolic link to that
folder.

Then run 'grunt watch'; don't forget to use the system appropriate reload-editor
to see changes (on mac: control-option-command-l).
