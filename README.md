# Interactive Guitar Strings

This project showcases interactive guitar strings using **HTML**, **CSS**, **JavaScript**, and the **GSAP (GreenSock Animation Platform)** library. The guitar strings dynamically respond to mouse interactions, bending and animating as though being strummed. Additionally, a custom SVG guitar pick cursor follows the mouse, adding a visually appealing and interactive experience.

Check it out here - https://arssshhh.github.io/Interactive-Guitar-Strings-webPage/

## Features

- **Responsive Design**: Works on different screen sizes i.e. the size of SVG strings sets according to the size of the browser, during webpage loading.
- **Hover Animation**: The guitar strings react to your mouse movements, simulating real-time interaction with string bending effects.
- **SVG Interactions**: The strings, rendered using SVG paths, bend based on the cursor’s movement, making the interaction feel smooth and intuitive.
- **GSAP Animations**: Powered by GSAP, the strings smoothly transition back to their original state once the mouse moves away.
- **Custom SVG Guitar Pick Cursor**: When hovering over the guitar string area, an SVG guitar pick appears and follows the mouse pointer, adding more depth to the interaction.

## How It Works

### SVG Strings Interaction
The project uses **SVG (Scalable Vector Graphics)** to create the guitar strings. Each string is an SVG `<path>` element, and the shape of the path is manipulated using mouse movements. The GSAP library is used to animate the string's bending and springing back to its original position.

- **SVG Paths**: Each string is represented by a `<path>` in the SVG, and its `d` attribute is dynamically updated based on the mouse's position.
  
- **Elastic Animations**: The strings use GSAP’s **elastic easing** to spring back to their original state when the mouse leaves the area, simulating the behavior of a real guitar string.

### Custom SVG Guitar Pick Cursor
A custom **SVG guitar pick** is introduced as a custom cursor:
- The pick **appears** when the mouse enters the main interactive area (`#main`), follows the cursor, and **disappears** when the mouse leaves.
- The movement of the pick has a smooth, animated feel, with rotation depending on the mouse’s movement direction.

## Getting Started

### Prerequisites

- A web browser that supports HTML5, CSS3, and JavaScript.
- GSAP Library, which is included via CDN in the code.

### Copy and Paste Code

Here’s the code you can copy and paste into your own project to implement the interactive guitar strings with the custom SVG guitar pick cursor:

#### **HTML**:

```html
<svg id="pick" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.988 511.988">
    <path style="fill:#ED5564;" d="M408.428,33.53c-18.547-11.155-41.156-19.655-67.217-25.28c-25.328-5.469-54-8.25-85.217-8.25 
    c-31.218,0-59.889,2.781-85.217,8.25c-26.062,5.625-48.67,14.125-67.217,25.28C63.718,57.499,42.671,93.857,42.671,138.669 
    c0,43.968,30.312,135.716,72.076,218.151c29.359,57.951,86.764,155.168,141.247,155.168c54.482,0,111.887-97.217,141.246-155.168 
    c41.766-82.436,72.076-174.184,72.076-218.151C469.316,93.857,448.27,57.499,408.428,33.53z"/>
</svg>

<div id="blank">
    <h1>Interactive Guitar Strings</h1>
    <h4>Hover your mouse over the strings</h4>
</div>
<div id="main">
    <div id="box">
        <div id="hole">
            <svg height="100" width="100">
                <circle r="30" cx="50" cy="50" fill="#c9c9c9"/>
            </svg>
        </div>
        <div id="event"></div>
        <svg id="guitar" width="100%" height="200">
            <path id="line1" d="M 0 90 Q 0 90 0 90" stroke="white" stroke-width="2px" fill="transparent"/>
            <path id="line2" d="M 0 100 Q 0 100 0 100" stroke="white" stroke-width="1.5px" fill="transparent"/>
            <path id="line3" d="M 0 110 Q 0 110 0 110" stroke="white" stroke-width="1px" fill="transparent"/>
        </svg>
    </div>
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

#pick {
    position: fixed;
    scale: 0;
    transition: transform 0.2s ease-out;
}

#main {
    padding: 200px 0;
}
```

#### **JavaScript**:

```javascript
var half = window.innerWidth / 2;

var path1 = `M 10 90 Q ${half / 2} 90 ${half} 90`;
var finalPath1 = `M 10 90 Q ${half / 2} 90 ${half} 90`;

var path2 = `M 10 100 Q ${half / 2} 100 ${half - 10} 100`;
var finalPath2 = `M 10 100 Q ${half / 2} 100 ${half - 10} 100`;

var path3 = `M 10 110 Q ${half / 2} 110 ${half - 20} 110`;
var finalPath3 = `M 10 110 Q ${half / 2} 110 ${half - 20} 110`;

var guitar = document.querySelector("#guitar");
var touchArea = document.querySelector("#event");

var touched = false;

var main = document.querySelector("#main");
var pick = document.querySelector("#pick");

gsap.to("#line1", {
    attr: { d: finalPath1 },
    duration: 0.4,
});
gsap.to("#line2", {
    attr: { d: finalPath2 },
    duration: 0.3,
});
gsap.to("#line3", {
    attr: { d: finalPath3 },
    duration: 0.3,
});
gsap.to("#hole", {
    opacity: 1,
    duration: 1,
});

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

// Custom Cursor Interaction (SVG Guitar Pick)
main.addEventListener("mousemove", function (dets) {
    if (dets.movementY > 0) {
        gsap.to(pick, {
            x: dets.x,
            y: dets.y,
            ease: "back.out(4)",
            rotate: 45,
        });
    } else {
        gsap.to(pick, {
            x: dets.x,
            y: dets.y,
            ease: "back.out(4)",
            rotate: 125,
        });
    }
});

main.addEventListener("mouseenter", function () {
    gsap.to(pick, {
        scale: 1,
    });
});

main.addEventListener("mouseleave", function () {
    gsap.to(pick, {
        scale: 0,
    });
});
```

### How to Use It

1. Copy the **HTML**, **CSS**, and **JavaScript** code blocks into your respective files.
2. Include the **GSAP** library by adding this line in your HTML file before running the JavaScript:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

3. Once you add the above code, you'll have the interactive guitar strings with a custom SVG guitar pick cursor effect on your own webpage.

### Custom Cursor Interaction Details

- The **SVG guitar pick** is a custom cursor that appears when you hover over the main guitar strings section and disappears when the mouse leaves.
- The pick rotates based on mouse movement (upward or downward) for added dynamic interaction.
- It follows the cursor smoothly, adding a more immersive user experience.

## Built With

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript (ES6)** for interaction and animation
- **GSAP (GreenSock Animation Platform)** for smooth animations
- **SVG** for scalable and responsive vector graphics
