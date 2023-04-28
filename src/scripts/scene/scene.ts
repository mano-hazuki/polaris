export abstract class Scene {
    abstract onInit(): void;

    abstract onRender(): void;

    abstract onClosed(): void;

    abstract onKeyPressed(e: KeyboardEvent): void;

    abstract onKeyReleased(e: KeyboardEvent): void;
}