# taunus-actions

> Link controllers to partials and (optionally) limit the scope of the viewModel

# Install

```shell
npm install taunus-actions --save
```

# Setup

Use `actions.configure` to give `taunus-actions` a reference of your `taunus` object to set it up.

```js
var actions = require('taunus-actions');

actions.configure({
  taunus: taunus
});
```

# Usage

Imagine you have this piece of markup which represents a user's profile. And you want to have a controller linked to it. Then you can use the `data-taunus-action` property to specify which controller to link to. Also, you can (optionally) use the `data-taunus-model` property which allows you to provide only part of the viewModel to the linked controller.

```html
<div class="user-profile" data-taunus-action="user/profile" data-taunus-model="user">
  <img src="{{ user.picture }}" alt="{{ user.name }}">
  <span>{{ user.name }}</span>
</div>
```

So, if the viewModel is something like:
```json
{
  "foo": "bar",
  "baz": [],
  "user": {
    "name": "John Doe",
    "picture": "https://www.gravatar.com/avatar/foo"
  }
}
```

The `user/profile` controller will get just:
```json
{
  "name": "John Doe",
  "picture": "https://www.gravatar.com/avatar/foo"
}
```
