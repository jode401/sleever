class ui {
    constructor(){

    }
// Create a text layout element (Score, Health, Dialogue)
createTextUI(text, top = "20px", left = "20px", color = "white", fontSize = "24px") {
    let el = document.createElement("div");
    el.innerText = text;
    el.style.position = "fixed"; // Locks it to the viewport screen, ignoring movement
    el.style.top = top;
    el.style.left = left;
    el.style.color = color;
    el.style.fontSize = fontSize;
    el.style.fontFamily = "'Courier New', Courier, monospace"; // Game-style font fallback
    el.style.zIndex = "100"; // Ensures it sits completely on top of game sprites
    
   document.body.append(el);
    return el;
}

createButtonUI(text, top = "50%", left = "50%", onClickFunction) {
    let btn = document.createElement("button");
    btn.innerText = text;
    btn.style.position = "fixed";
    btn.style.top = top;
    btn.style.left = left;
    btn.style.transform = "translate(-50%, -50%)"; 
    btn.style.zIndex = "100";
    
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", onClickFunction);

   document.body.append(btn);
    return btn;
}
}
export {ui}
