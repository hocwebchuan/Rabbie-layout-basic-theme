# Rabbie Layout Basic Theme
This Theme is convenient for your practicing any web language.

## Table of Contents
- [Using contents](#using-content)
  - [Grid system](#grid-system)
  - [Fontawsome](#fontawsome)
  - [Box style](#box-style)
  - [Paragraph style](#paragraph-style)
  - [Item list style](#item-list-style)
  - [Block list style](#block-list-style)
  - [Pagination style](#pagination-style)
  - [Button style](#button-style)
  - [Form element style](#form-element-style)
  - [Table style](#table-style)
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

Simple and familiar with everyone!

### Grid system
#### Syntax
Similar to Bootstraps, but we use simple ways.
1 column: `col-1`
2 columns: `col-2`
3 columns: `col-3`
4 columns: `col-4`
...
12 columns: `col-12`

Responsive grid system
 - col-i (e.g. `col-4`)
 - col-md-i (e.g. `col-md-3`)
 - col-xs-i (e.g. `col-xs-2`)
 - col-lg (e.g. `col-lg`)

#### Default
```html
  <div class="row">
      <div class="col-2">...</div>
      <div class="col-2">...</div>
  </div>
```

#### With margin
```html
  <div class="row row-spacing">
      <div class="col-2">...</div>
      <div class="col-2">...</div>
  </div>
```

#### Responsive
```html
  <div class="row row-spacing">
      <div class="col-4 col-md-3 col-xs-2 col-lg">...</div>
      <div class="col-4 col-md-3 col-xs-2 col-lg">...</div>
      <div class="col-4 col-md-3 col-xs-2 col-lg">...</div>
      <div class="col-4 col-md-3 col-xs-2 col-lg">...</div>
  </div>
```

### Color system
 - Dark color (e.g. `red`)
 - Light color (e.g. `light-red`)
 - More light color (e.g. `light-red-ml`)
 - Max light color (e.g. `light-red-xl`)


### Fontawsome
We have included latest version 5.11.2.

### Button style
#### Default
```html
  <button class="btn btn-red">Button</button>
  <button class="btn btn-light-red">Button</button>
```

#### Large button
```html
  <button class="btn-lg btn-green">Button</button>
```

### Box style
```html
  <div class="box">...</div>
  <div class="box bdr-blue">...</div>
```

### Paragraph style
```html
  <h3 class="align-c">Align Left</h3>
  <p class="align-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
```

### Item list style
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
  </ul>
```

### Block list style
```html
  <ul class="block-list row-spacing-2">
    <li class="col-2 col-lg">
        <h4>Block Title 01</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
    </li>

    <li class="col-2 col-lg">
        <h4>Block Title 02</h4>
        <div>Quisque volutpat faucibus arcu, eget consectetur...</div>
    </li>

    <li class="col-2 col-lg">
        <h4>Block Title 03</h4>
        <div>Curabitur consequat bibendum tellus egestas porta...</div>
    </li>
  </ul>
```

### Pagination style
```html
  <nav class="pagination align-c">
    <ul>
        <li>
            <a href="#">
                <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
            </a>
        </li>
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
            <a href="#">
                <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
            </a>
        </li>
    </ul>
  </nav>
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
  </table>
```

## Something missing?
If you have any problems, [let me know](https://github.com/hocwebchuan/Layout-theme-basic/issues).<br>
Thanks for using it!
