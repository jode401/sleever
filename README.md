# AJS Engine

A lightweight JavaScript 2D game engine for fast prototyping using DOM rendering.

---

# 📁 Project Structure

```
game/
│
├── assets/          # Images, sounds, etc.
├── module/
│   └── AJS/        # Engine core
│       ├── AJS.js
│       ├── audio.js
│       ├── gui.js
│       └── render.js
│
├── styles/
├── views/
│   └── main.html
│
├── world/          # Game logic
│   └── main.js
│
└── main.js         # Entry point
```

---

# 🚀 Getting Started

## 1. Open the project

Open:

```
views/main.html
```

Make sure it loads `main.js`.

---

## 2. Import the engine

In `world/main.js` or `main.js`:

```js
import { ajs, Keys } from "../module/AJS/AJS.js";
import { audio } from "../module/AJS/audio.js";
import { ui } from "../module/AJS/gui.js";
import { runner } from "../module/AJS/render.js";
```

---

# 🎮 Create a Game Instance

```js
const engine = new ajs(document.body);
const loop = new runner();
const keys = new Keys();
```

---

# 🧍 Sprites

```js
const player = engine.img(
    "./assets/player.png",
    100,
    100,
    64,
    64
);
```

Move sprite:

```js
player.setPosition(player.x + 10, player.y);
```

---

# ⌨️ Input

```js
keys.keybind("w", () => {
    player.setPosition(player.x, player.y - 10);
}, "keydown");
```

---

# 🎯 Game Loop

```js
loop.render((dt) => {

    player.setPosition(
        player.x + 100 * dt,
        player.y
    );

});
```

---

# 💥 Collision

```js
if (engine.collision(player, enemy)) {
    console.log("Collision detected");
}
```

---

# 🔊 Audio

```js
const soundSystem = new audio();

const shoot = soundSystem.loadSound("./assets/shoot.mp3");

soundSystem.playSound(shoot);
```

---

# 🖥 UI

```js
const uiSystem = new ui();

uiSystem.createTextUI("Score: 0");
```

Button:

```js
uiSystem.createButtonUI(
    "Play",
    "50%",
    "50%",
    () => {
        console.log("Game started");
    }
);
```

---

# 🧹 Destroy Objects

```js
engine.destroy(player);
```

---

# 📦 Minimal Example Game

```js
const engine = new ajs(document.body);
const loop = new runner();

const player = engine.img("./assets/player.png", 100, 100, 64, 64);

loop.render((dt) => {

    player.setPosition(
        player.x + 120 * dt,
        player.y
    );

});
```

---

# ⚙️ Notes

* Uses DOM rendering (`<img>`)
* Performance depends on number of elements
* Best for small 2D games / prototypes

---

# 🧭 Roadmap

* Scene system
* Camera system
* Asset loader
* Sprite animations
* Tilemaps
* Particle system

---

# 📜 License

MIT


---

## License

MIT License
