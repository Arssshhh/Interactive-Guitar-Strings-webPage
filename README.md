# Interactive Guitar Strings

This project is a showcase of interactive guitar strings using **HTML**, **CSS**, **JavaScript**, and the **GSAP (GreenSock Animation Platform)** library. The guitar strings dynamically respond to mouse interactions, bending and animating as though being strummed, providing a fun, interactive experience for users.

Check it out here - https://arssshhh.github.io/Interactive-Guitar-Strings-webPage/

## Features

- **Responsive Design**: Works on different screen sizes i.e. the size of SVG strings sets according to the size of the browser, during webpage loading.
- **Hover Animation**: The guitar strings react to your mouse movements, simulating a real-time interaction.
- **SVG Interactions**: The strings, rendered using SVG paths, bend based on the cursor’s movement, making the interaction feel smooth and intuitive.
- **GSAP Animation**: Powered by GSAP, the strings smoothly transition back to their original state once the mouse moves away.

## How It Works

This project uses **SVG (Scalable Vector Graphics)** to create the guitar strings. Each string is an SVG `<path>` element, and the shape of the path is manipulated using mouse movements. The GSAP library is used to animate the string's bending and springing back to its original position.

- **SVG Paths**: Each string is represented as a `<path>` in the SVG, and the `d` attribute of these paths is updated dynamically based on mouse coordinates, which gives the appearance of the string bending as you hover over it.
- **GSAP Animations**: GSAP handles the smooth transitions and elastic effects when the string bends or returns to its original position. The library ensures fluid animations that mimic the real-life motion of guitar strings.

## Getting Started

### Prerequisites

- A web browser that supports HTML5, CSS3, and JavaScript.
- GSAP Library, which is included via CDN in the code.

### Copy and Paste Code

Here’s the code you can copy and paste into your own project to implement the interactive guitar strings:

#### **HTML**:

```html
<div id="box">
    <div id="hole">
        <svg height="100" width="100">
            <circle r="30" cx="50" cy="50" fill="#c9c9c9" />
        </svg>
    </div>
    <div id="event"></div>
    <svg id="guitar" width="100%" height="200">
        <path id="line1" d="M 0 90 Q 0 90 0 90" stroke="white" stroke-width="2px" fill="transparent" />
        <path id="line2" d="M 0 100 Q 0 100 0 100" stroke="white" stroke-width="1.5px" fill="transparent" />
        <path id="line3" d="M 0 110 Q 0 110 0 110" stroke="white" stroke-width="1px" fill="transparent" />
    </svg>
</div>
```

#### **CSS**:

```css
#box {
    position: relative;
    width: 100%;
    height: 200px;
}

#guitar {
    position: absolute;
    top: 0px;
}

#event {
    height: 40px;
    width: 100%;
    position: relative;
    top: -25px;
    z-index: 1;
}

#hole {
    position: relative;
    top: 50px;
    z-index: -2;
    opacity: 0;
}
```

#### **JavaScript**:

```javascript
var half = window.innerWidth / 2;

var path1 = `M 10 90 Q ${half/2} 90 ${half} 90`;
var finalPath1 = `M 10 90 Q ${half/2} 90 ${half} 90`;

var path2 = `M 10 100 Q ${half/2} 100 ${half - 10} 100`;
var finalPath2 = `M 10 100 Q ${half/2} 100 ${half - 10} 100`;

var path3 = `M 10 110 Q ${half/2} 110 ${half - 20} 110`;
var finalPath3 = `M 10 110 Q ${half/2} 110 ${half - 20} 110`;

var guitar = document.querySelector("#guitar");
var touchArea = document.querySelector("#event");

var touched = false;

touchArea.addEventListener("mouseenter", function () {
    touched = true;
});

guitar.addEventListener("mouseleave", function () {
    gsap.to("#line1", {
        attr: { d: finalPath1 },
        duration: 1,
        ease: "elastic.out(2,0.1)",
    });
    gsap.to("#line2", {
        attr: { d: finalPath2 },
        duration: 1,
        ease: "elastic.out(2,0.1)",
    });
    gsap.to("#line3", {
        attr: { d: finalPath3 },
        duration: 1,
        ease: "elastic.out(2,0.1)",
    });
    touched = false;
});

guitar.addEventListener("mousemove", function (dets) {
    if (touched) {
        path1 = `M 10 90 Q ${dets.offsetX} ${dets.offsetY} ${half} 90`;
        path2 = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} ${half - 10} 100`;
        path3 = `M 10 110 Q ${dets.offsetX} ${dets.offsetY} ${half - 20} 110`;

        gsap.to("#line1", { attr: { d: path1 } });
        gsap.to("#line2", { attr: { d: path2 } });
        gsap.to("#line3", { attr: { d: path3 } });
    }
});
```

### How to Use It

1. Copy the **HTML**, **CSS**, and **JavaScript** code blocks into your respective files.
2. Include the **GSAP** library by adding this line in your HTML file before running the JavaScript:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

3. Once you add the above code, you'll have the interactive guitar strings effect on your own webpage.

### SVG and GSAP Interaction

- **SVG Paths**: Each string is an SVG `<path>`, and its `d` attribute is manipulated based on mouse movements. The `Q` command in the path defines the curve (bend) of the string based on the cursor's location.
  
- **Elastic Animations**: Using GSAP’s **elastic** easing, the strings "snap back" to their original position when the mouse leaves the interaction area. The result is a realistic, springy effect similar to plucking a real guitar string.

## Built With

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript (ES6)** for interaction and animation
- **GSAP (GreenSock Animation Platform)** for smooth animations
- **SVG** for scalable and responsive vector graphics

