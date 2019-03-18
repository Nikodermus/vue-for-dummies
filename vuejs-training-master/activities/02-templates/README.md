# Instructions

- Use the Vue CLI to create a new project
- In `App.vue`, add a `data()` option with some data that looks like this (feel free to substitute your own names, color, etc.):
```
{
    name: 'Andre',
    favoriteColor: 'purple',
    familyMembers: [
        {
            name: 'Laura',
            type: 'human'
        },
        {
            name: 'Paige',
            type: 'human'
        },
        {
            name: 'Wyatt',
            type: 'human'
        },
        {
            name: 'Ninja',
            type: 'cat'
        },
        {
            name: 'Pup',
            type: 'dog'
        },
        {
            name: 'Edd',
            type: 'roach'
        }
    ]
}
```
- Change the template to display all of the information with labels.
- If `favoriteColor` is blue, display "Blue?  Really?  Mine too!"
- If `favoriteColor` is not blue, display "Darn, mine's blue..."
- For each `familyMember`, display the name and an emoji character for the type.  You can use (https://unicode.org/emoji/charts/full-emoji-list.html) to find appropriate emojis.
