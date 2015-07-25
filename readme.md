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

- Make the editing-list-item-details ux not suck by trying to auto-save when you kill focus on one of the two items (support hitting enter instead)
- bug: when clicking the "Save" button while editing list items, the name disappears
    - this seems to only happen if no changes occurred to the name
    - the same thing happens in the add link field
- support deleting delete Categories
- change "Dummy name" to something else, and make sure it's hidden on single-category lists
- adding a new category should scroll you down so you can see it
- add a note about why you should only share the "share" link
- update the animated gifs
- logo on home page and in places
- store seen lists in localstorage
