All the gift registry apps my wife tried out looked pretty horrible, so I made this one.

## To run it yourself

You'll need [node](https://iojs.org/) installed.

```sh
git clone https://github.com/TehShrike/communal-checklist.git
cd communal-checklist
npm install
npm run build
npm run start
```

## To do

- bug: can't save when you're editing lists
- bug: sometimes can't save category details after creating a fresh list
- bug: support paragraph breaks in category descriptions
- ffs: get rid of all the ordered arguments in socket.io methods
- adding a new category should scroll you down so you can see it
- add a margin at the bottom of the list screen
- add a note about why you should only share the "share" link
- update the animated gifs
- logo on home page and in places
- store seen lists in localstorage
