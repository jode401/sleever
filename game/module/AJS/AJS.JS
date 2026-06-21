class ajs {
    constructor(body) {
        this.body = document.body || body;
    }

    // 1. Core Sprite Instance Factory
    img(url, top = 0, left = 0, width = 100, height = 100) {
        let imgs = document.createElement("img");
        imgs.src = url;
        imgs.style.position = "absolute";
        imgs.style.zIndex = "10";
        
        // Hard-set structural dimensions
        imgs.style.width = `${width}px`;
        imgs.style.height = `${height}px`;

        // The high-performance instance tracker
        let spriteObj = {
            element: imgs,
            x: left,
            y: top,
            width: width,
            height: height,
            setPosition(x, y) {
                this.x = x;
                this.y = y;
                // Force GPU layer composition
                this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        // Position it instantly
        spriteObj.setPosition(left, top);
        this.body.append(imgs);
        
        return spriteObj;
    }

    // 2. High-Performance Bulk Procedural Generation
    bulk(url, orientation, d, x = 0, y = 0, width = 100, height = 100) {
        let createdSprites = [];
        let currentOffset = 0;

        let limit = 0;
        if (orientation === "horizontal" || orientation === "h") {
            limit = window.innerWidth;
        } else if (orientation === "vertical" || orientation === "v") {
            limit = window.innerHeight;
        }

        while (currentOffset < limit) {
            // Calculate coordinates upfront
            let targetX = x;
            let targetY = y;

            if (orientation === "horizontal" || orientation === "h") {
                targetX = x + currentOffset;
            } else if (orientation === "vertical" || orientation === "v") {
                targetY = y + currentOffset;
            }

            // Create our optimized sprite instance
            let spriteEl = this.img(url, targetY, targetX, width, height);

            createdSprites.push(spriteEl);
            currentOffset += d;
        }

        return createdSprites;
    }

    background(url) {
        let img = document.createElement("img");
        img.src = url;
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.zIndex = "1";   
        this.body.append(img);
    }

    collision(sprite1, sprite2) {
        return (
            sprite1.x < sprite2.x + sprite2.width &&
            sprite1.x + sprite1.width > sprite2.x &&
            sprite1.y < sprite2.y + sprite2.height &&
            sprite1.y + sprite1.height > sprite2.y
        );
    }
setPos(element, x, y) {
    element.x = x;
    element.y = y;

    let rotation = element.dataset.rotation || "0deg";
    element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation})`;
}

setOrientation(element, angle) {
    element.dataset.rotation = `${angle}deg`;

    let currentX = element.x || 0;
    let currentY = element.y || 0;
    element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle}deg)`;
}
    fireFiles(eventName, data) {
        let event = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(event);
    }

    Onrecieve(eventName, callback) {
        window.addEventListener(eventName, function(e) {
            callback(e.detail);
        });
    }

destroy(sprite){
    sprite.element.remove();
}
}


class Keys {
  constructor() {
  }

  keybind(touch = "", exe,type) {
    document.addEventListener(type, (e) => {
      if (e.key === touch) {
        exe();
      }
    });
  }

}
export {ajs , Keys}
