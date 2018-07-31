// "t" toggle
document.addEventListener('keypress', function (event) {
    if (event.key === 't') {
        let allOptions = document.querySelectorAll(".option");

        for (let i = 0; i < allOptions.length; i++) {
            if (allOptions[i].style.display !== "none")
                allOptions[i].style.display = "none";
            else
            allOptions[i].style.display = "";
        }
    }
});

// save button - show options
document.querySelector(".save-button").addEventListener("click", function() {
    let channels = [];
    let inputs = document.querySelectorAll("input");
    for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];
        if (input.value !== "") {
            channels.push(input.value);
        }
    }

    // console.log(inputs)
    // console.log(channels)

    let chosenLayouts;

    if (channels.length == 1) chosenLayouts = layouts1;
    if (channels.length == 2) chosenLayouts = layouts2;
    if (channels.length == 3) chosenLayouts = layouts3;

    console.log(chosenLayouts);

    let previewArea = document.querySelector(".preview");
    previewArea.innerHTML = '';

    for(let i=0; i<chosenLayouts.length; i++) {
        let layout = chosenLayouts[i];
        console.log(layout);

        let preview = generateLayout(channels.length, layout);
        previewArea.appendChild( preview );

        preview.addEventListener('click', function() {
            let realLayout = generateLayout(channels.length, layout, channels);
            document.querySelector(".view").innerHTML = '';
            document.querySelector(".view").appendChild(realLayout);
        });
    }
});

function generateLayout(num, layoutName, channels = []) {
    let div = document.createElement("div");
    div.classList.add("layout")
    div.classList.add(layoutName);

    for(let i=0; i<num; i++) {
        let child = document.createElement("div");
        div.appendChild(child);

        if (channels.length > 0) {
            // iframe
            let iframe = document.createElement("iframe");
            iframe.src = "http://player.twitch.tv/?channel=" + channels[i] + "&muted=true";
            iframe.frameBorder="0"
            iframe.scrolling = "no"
            iframe.allowFullscreen = "true"
            child.appendChild(iframe);
        }
    }

    return div;
}

let layouts1 = ["L1"];
let layouts2 = ["L2", "L3"];
let layouts3 = ["L4", "L5", "L6", "L7"];