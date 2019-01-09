var settings = {
    bubbles: {
        count: 260,
        size: 25,
        randomize: true
    }
};

// Tags
var block = document.getElementById("block");

function init() {
    // Generate colors
    settings.bubbles.colors = colors(50);

    // Generate bubbles
    for (var i = 0; i < settings.bubbles.count; i++) {
        // Make new bubble
        var bubble = document.createElement("div");
        // Set class
        bubble.setAttribute("class", "bubble");

        // Set size (H; V)
        bubble.style.width = settings.bubbles.size + "px";
        bubble.style.height = settings.bubbles.size + "px";

        if (settings.bubbles.randomize) {
            var index = randomNumber(settings.bubbles.colors.length);
            var color = settings.bubbles.colors[index];

            //bubble.style.backgroundColor = "rgb(0, 155, 255)";
            bubble.style.backgroundColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
        }

        // Add to block
        block.appendChild(bubble);

        bubble.onclick = onBubbleClick;
    }
}

function fakeBubble() {
    // Make new bubble
    var bubble = document.createElement("div");
    // Set class
    bubble.setAttribute("class", "bubble fake");
    // Set size (H; V)
    bubble.style.width = settings.bubbles.size + 2 + "px";
    bubble.style.height = settings.bubbles.size + 2 + "px";

    return bubble;
}

function onBubbleClick() {
    // "this" - target object (div).
    //console.log(this);

    if (this.getAttribute("class").indexOf("fake") < 0) {
        this.parentNode.replaceChild(fakeBubble(), this);
    }
}

// Invoke initialization
init();