# Variables
```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
$button-width: 150px;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

# Nesting
## Example 1
```scss
.navigation {
    list-style: none;

    li {
        display: inline-block;
        margin-left: 30px;

        &:first-child { // .navigation li:first-child, & means parent element
            margin: 0;
        }

        a {
            text-decoration: none;
            text-transform: uppercase;
        }
    }
}
```

## Example 2
```scss
.btn-main {
    &:link {
        background-color: $color-primary;
    }

    &:hover {
        background-color: darken($color-primary, 15%); // darken is a built-in function
    }
}
```

# Mixins
## Basic use
```scss
@mixin clearfix {
    &::after {
        content: "";
        clear: both;
        display: table;
    }
}

nav {
    @include clearfix;
}
```

## With arguments
```scss
@mixin style-link-text($color: #fff) {
    text-decoration: none;
    text-transform: uppercase;
    color: $color;
}

.btn-main {
    @include style-link-text($text-color-dark);
}

.btn-secondary {
    @include style-link-text($text-color-light);
}
```

# Functions
```scss
@function divide($a, $b) {
    @return $a / $b;
}

nav {
    margin: divide(60, 2) * 1px;
}
```

# Extend & Placeholder
```scss
%btn-placeholder {
    padding: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    width: 150px;
}

.btn-main {
    &:link {
        @extend %btn-placeholder;
        background-color: $color-secondary;
    }
}

.btn-outline {
    &link {
        @extend %btn-placeholder;
        background-color: $color-outline;
    }
}
```