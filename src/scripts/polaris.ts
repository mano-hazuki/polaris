import {Scene} from "./scene/scene";
import {SceneTitle} from "./scene/sceneTitle";

let scene: Scene = new SceneTitle();

let now: number = 0;
let lastUpdated: number = 0;
let framePerSecond: number = 0;

const init = (): void => {
    scene.onInit();

    document.addEventListener("keydown", (e: KeyboardEvent): void => {
        scene.onKeyPressed(e);
    });
    document.addEventListener("keyup", (e: KeyboardEvent): void => {
        scene.onKeyReleased(e);
    });
};

const render = (): void => {
    now = performance.now();
    framePerSecond = 1.0 / ((now - lastUpdated) / 1000.0);
    scene.onRender();
    lastUpdated = now;
    requestAnimationFrame(render);
};

export const run = (): void => {
    init();
    render();
};

export const getNow = (): number => now;

export const getLastUpdated = (): number => lastUpdated;

export const getFramePerSecond = (): number => framePerSecond;

export const getRefreshRate = (fps: number): number => {
    if (fps > 60 && fps <= 75) {
        const dist60 = Math.abs(fps - 60);
        const dist75 = Math.abs(fps - 75);

        if (dist60 > dist75) {
            return 75;
        } else {
            return 60;
        }
    } else if (fps > 75 && fps <= 120) {
        const dist75 = Math.abs(fps - 75);
        const dist120 = Math.abs(fps - 120);

        if (dist75 > dist120) {
            return 120;
        } else {
            return 75;
        }
    } else if (fps > 120 && fps <= 144) {
        const dist120 = Math.abs(fps - 120);
        const dist144 = Math.abs(fps - 144);

        if (dist120 > dist144) {
            return 144;
        } else {
            return 120;
        }
    } else if (fps > 144 && fps <= 165) {
        const dist144 = Math.abs(fps - 144);
        const dist165 = Math.abs(fps - 165);

        if (dist144 > dist165) {
            return 165;
        } else {
            return 144;
        }
    } else if (fps > 165 && fps <= 240) {
        const dist165 = Math.abs(fps - 165);
        const dist240 = Math.abs(fps - 240);

        if (dist165 > dist240) {
            return 240;
        } else {
            return 165;
        }
    } else if (fps > 240) {
        const dist240 = Math.abs(fps - 240);
        const dist360 = Math.abs(fps - 360);

        if (dist240 > dist360) {
            return 360;
        } else {
            return 240;
        }
    }
    return 60;
}

export const transitionTo = (transitionTo: Scene): void => {
    scene.onClosed();
    scene = transitionTo;
    scene.onInit();
};