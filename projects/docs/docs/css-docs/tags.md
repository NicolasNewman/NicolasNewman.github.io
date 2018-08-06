# Background Images
## [background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
```css
background-image: url(path/to/img.jpg);
background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(path/to/img.jpg);
```

## [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
```css
background-size: contain;
background-size: cover;
background-size: 30%;
```

* **contain**: Scales the image as large as possible without cropping or stretching the image.
* **cover**: Scales the image as large as possible without stretching the image. If the proportions of the image differ from the element, it is cropped either vertically or horizontally so that no empty space remains.

## [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
```css
background-position: top;
background-position: left;
background-position: center;
background-position: right 35% bottom 45%;
```

## [background-attatchment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
```css
// parallax effect
background-attachment: fixed;
```

# [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
## Absolute
An absolutely positioned element is an element whose computed position value is absolute or fixed. The top, right, bottom, and left properties specify offsets from the edges of the element's containing block.
```css
position: absolute;
top: 0px; left: 0px;
```

# [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
```css
transform: translate(-50%, -50%);
transform: scale(2, 0.5);
transform: rotate(180deg);
transform: skew(30deg, 20deg);
```

## Centering with transform
```css
.container {
	position: relative;
}

.box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

# [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
```css
.button {
	width: 100px;
	transition: width 1s;
}

.button: hover {
	width: 200px;
}
```

```css
.button {
	background: white;
	color: blue;

	transition-property: background, color;
	transition-duration: 1s, 1s;
}

.button:hover {
	background: blue;
	color: white;
}
```


# [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
[Generator](https://bennettfeely.com/clippy/)
```css
clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
```

# [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
```css
@media only screen and (max-width: 1200px) {
    p {
    	color: #fff;
    }
}
```

# [@keyframe and animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
```css
div {
	animation-name: moveInLeft;
	animation-duration: 1s;
	animation-timing-function: ease-out;

	animation: moveInRight 1s ease-out;

	animation-delay: 3s;
	animation-iteration-count: 3;
}

@keyframes moveInLeft {
	0% {
		opacity: 0;
		transform: translateX(-100px);
	}

	80% {
		transform: translateX(10px);
	}

	100% {
		opacity: 1;
		transform: translate(0);
	}
}
```