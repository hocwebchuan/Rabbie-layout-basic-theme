# Layout-template
This template is convenient for your practicing any web language.

## Table of Contents
- [Available Scripts](#available-scripts)
- [Something Missing?](#something-missing)

## Available Scripts to use SCSS parts
In the project directory, follow these steps to setup SASS auto compile the CSS file:

```sh
npm install
npm install node-sass
npm run scss
```

## Content
If you don't want SCSS files, you just keep these files:
```
  css/
    style.css
  index.html
```

Simple and familiar with everyone!

### Button style
```html
  <button class="btn btn-red">Button</button>
  <button class="btn btn-light-red">Button</button>
  <button class="btn-lg btn-light-green">Button</button>
```

### Box style
```html
  <div class="box">...</div>
  <div class="box bdr-blue">...</div>
```

### Form element style
```html
  <input type="text" id="type-text" placeholder="Your placeholder">
  <label for="type-checkbox01">Checkbox <input type="checkbox" id="type-checkbox01" checked="checked"></label>
  <textarea rows="3" id="type-textarea" placeholder="Your placeholder"></textarea>
```

### Table style
```html
  <table class="hor-style">
    <tr>
        <th>Table Head 1</th>
        <th>Table Head 2</th>
    </tr>

    <tr>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Quisque volutpat faucibus arcu, eget consectetur felis pharetra quis.</td>
    </tr>
  </table>

  <table class="ver-style">
    <tr>
        <th>Table Head 1</th>
        <td>Lorem ipsum dolor.</td>
    </tr>

    <tr>
        <th>Table Head 2</th>
        <td>Volutpat faucibus</td>
    </tr>
```

### List style
```html
  <ul class="item-list">
    <li>Lorem ipsum dolor.</li>
    <li>Consectetur adipiscing.</li>
    <li>
        <div>Curabitur consequat bibendum</div>
        <ul>
            <li>Scelerisque sapien.</li>
            <li>Bibendum tellus.</li>
        </ul>
    </li>
    <li>Etiam aliquet orci.</li>
    <li>Quisque volutpat.</li>
  </ul>
```

## Something missing?

If you have any problems, [let me know](https://github.com/hocwebchuan/SCSS-template/issues).<br>
Thanks for using it!