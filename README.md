# Rabbie Layout Basic Theme
This Theme is convenient for your practicing any web language.

## Table of Contents
- [Using contents](#using-content)
  - [Grid system](#grid-system)
  - [Button style](#button-style)
  - [Box style](#box-style)
  - [Form element style](#form-element-style)
  - [Table style](#table-style)
  - [List style](#list-style)
- [Available Scripts](#available-scripts)
- [Something Missing?](#something-missing)

## Available Scripts to use SCSS parts
In the project directory, follow these script to setup SASS to auto compile the CSS file:

```sh
npm install
npm install node-sass
npm run scss
```

## HTML and CSS file only
If you don't want to use SCSS files, just keep HTML and CSS files:

```
  css/
    style.css
  index.html
```

## CSS file only
Just get CSS file: `css/style.css` then use this code in your HTML file:

```html
<link href="css/style.css" rel="stylesheet" media="all">
```

Simple and familiar with everyone!

### Grid system
Similar to Bootstraps, but we use simple ways, which is suitable for small templates.

#### Default

```html
  <div class="row">
      <div class="col-6">...</div>
      <div class="col-6">...</div>
  </div>
```

#### With margin

```html
  <div class="row row-spacing">
      <div class="col-6">...</div>
      <div class="col-6">...</div>
  </div>
```

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

If you have any problems, [let me know](https://github.com/hocwebchuan/Layout-theme-basic/issues).<br>
Thanks for using it!
