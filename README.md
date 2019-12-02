# Rabbie Layout Basic Theme
This Theme is convenient for your practicing any web language.

## Table of Contents
- [Available Scripts](#available-scripts)
- [Using contents](#using-content)
  - [Grid system](#grid-system)
  - [Color system](#color-system)
  - [Fontawsome](#fontawsome)
  - [Button style](#button-style)
  - [Box style](#box-style)
  - [Paragraph style](#paragraph-style)
  - [Blog style](#blog-style)
  - [Item list style](#item-list-style)
  - [Block list style](#block-list-style)
  - [Pagination style](#pagination-style)
  - [Form element style](#form-element-style)
  - [Table style](#table-style)
- [Something Missing?](#something-missing)

## SCSS Available
In the project directory, follow these script to setup SASS to auto compile the CSS file:

```sh
npm install
npm install node-sass
npm run scss
```

## Use files only without SCSS
If you don't want to use SCSS files, use these files:

```
  css/
    style.css
  js/
    function.js
    custom.js
  vendor/
    Font-Awesome-master/
    jQuery/
  index.html
```

Simple and familiar with everyone!

## Using contents
This content, you can take a look source code at [Rabbie Theme](https://rabbie-theme.hocwebchuan.com)

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

### Blog style
```html
  <div class="blog-list">
    <div class="post">
        <div class="clearfix">
            <div class="post-intro"><a href="#"><img src="images/photo01.jpg" alt=""></a></div>
            <div class="post-detail">
                <h3 class="post-title"><a href="#">Image blog post</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus.</p>
                <p class="post-read-more"><a href="#" target="_blank">Read more</a></p>
            </div>
        </div>
        <ul class="post-meta">
            <li><i class="fa fa-calendar"></i> 16 June 2017</li>
            <li><a href="#"><i class="fa fa-user"></i> Admin</a></li>
            <li><a href="#"><i class="fa fa-comments"></i> 805</a></li>
        </ul>
    </div>

    <div class="post">
        ...
    </div>
</div>
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
