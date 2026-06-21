# AJS Engine

> Lightweight JavaScript 2D Game Engine

AJS is a simple game engine built for creating 2D browser games using pure JavaScript. It focuses on ease of use, rapid prototyping, and a minimal API.

---

## Features

* Sprite Rendering
* Delta Time Game Loop
* AABB Collision Detection
* Keyboard Input
* Audio Support
* UI System
* Event System
* Rotation Support
* Procedural Generation
* Object Destruction

---

## Quick Example

```js
import { ajs, Keys } from "./ajs.js";
import { runner } from "./runner.js";

const engine = new ajs(document.body);
const gameLoop = new runner();

const player = engine.img(
    "player.png",
    100,
    100,
    64,
    64
);

const keys = new Keys();

keys.keybind("d", () => {
    player.setPosition(
        player.x + 10,
        player.y
    );
}, "keydown");

gameLoop.render((dt) => {
    player.setPosition(
        player.x + 100 * dt,
        player.y
    );
});
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ajs-engine.git
```

Import the modules:

```js
import { ajs, Keys } from "./ajs.js";
import { runner } from "./runner.js";
import { audio } from "./audio.js";
import { ui } from "./ui.js";
```

---

## Creating Sprites

```js
const player = engine.img(
    "player.png",
    100,
    100,
    64,
    64
);
```

Move a sprite:

```js
player.setPosition(300, 200);
```

---

## Collision Detection

```js
if(engine.collision(player, enemy)){
    console.log("Collision");
}
```

---

## Keyboard Input

```js
const keys = new Keys();

keys.keybind(
    "w",
    () => {
        player.setPosition(
            player.x,
            player.y - 10
        );
    },
    "keydown"
);
```

---

## Audio

Load audio:

```js
const sounds = new audio();

const laser = sounds.loadSound(
    "laser.mp3"
);
```

Play audio:

```js
sounds.playSound(laser);
```

Stop audio:

```js
sounds.stopSound(laser);
```

---

## UI

Create text:

```js
const uiSystem = new ui();

uiSystem.createTextUI(
    "Score: 0"
);
```

Create a button:

```js
uiSystem.createButtonUI(
    "Play",
    "50%",
    "50%",
    () => {
        console.log("Start");
    }
);
```

---

## Events

Send an event:

```js
engine.fireFiles(
    "enemyDefeated",
    {
        score: 100
    }
);
```

Receive an event:

```js
engine.Onrecieve(
    "enemyDefeated",
    (data) => {
        console.log(data.score);
    }
);
```

---

## Game Loop

```js
const loop = new runner();

loop.render((dt, elapsed) => {

    player.setPosition(
        player.x + 200 * dt,
        player.y
    );

});
```

---

## Destroy Objects

```js
engine.destroy(player);
```

---

## Philosophy

AJS was designed around three principles:

* Simple API
* Fast Prototyping
* Pure JavaScript

No visual editor.

No complicated setup.

Just build games.

---

## Roadmap

### Version 1.1

* Scene Management
* Camera System
* Asset Preloader

### Version 1.2

* Sprite Animations
* Tilemaps
* Particle Effects

### Version 2.0

* Physics System
* Advanced Rendering
* Plugin Support

---

## License

MIT License
