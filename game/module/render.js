class runner {
    constructor() {
        this.start = null;
        this.lastTime = null; 
        this.isActive = false;
        this.codeToRun = null;
    }

    render(code) {
        this.codeToRun = code;
        this.isActive = true;
        this.start = null;
        this.lastTime = null; 
        requestAnimationFrame((t) => this._animator(t));
    }

    _animator(timestamp) {
        if (!this.isActive) return;

        if (!this.start) this.start = timestamp;
        if (!this.lastTime) this.lastTime = timestamp; 
        const dt = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp; // Save current time for the next frame calculation

        const progress = timestamp - this.start;

        if (this.codeToRun) {
            this.codeToRun(dt, progress);
        }

        requestAnimationFrame((t) => this._animator(t));
    }
}
export{runner}
