import {Scene} from "./scene";
import {transitionTo} from "../polaris";
import {SceneMenu} from "./sceneMenu";
import * as audio from "../audio";

export class SceneTitle extends Scene {

    private sceneTitle: HTMLDivElement = document.getElementById("title_scene")! as HTMLDivElement;
    private continueButton: HTMLButtonElement = document.getElementById("title_scene_button_continue")! as HTMLButtonElement;

    private checkStatusFullscreen: HTMLDivElement = document.getElementById("title_scene_status_fullscreen_check")! as HTMLDivElement;
    private checkStatusAudio: HTMLDivElement = document.getElementById("title_scene_status_audio_check")! as HTMLDivElement;
    private checkStatusLoadSettings: HTMLDivElement = document.getElementById("title_scene_status_load_settings_check")! as HTMLDivElement;

    private loadDuration: number = 500;

    onInit(): void {
        this.sceneTitle.style.display = "flex";
        this.continueButton.innerText = "Continue";

        this.continueButton.addEventListener("click", async () => {
            this.continueButton.disabled = true;
            this.continueButton.innerText = "Initializing...";

            await this.enterFullscreen().then((): void => {
                this.checkStatusFullscreen.className = "title_scene_status_check check_enabled";
            });
            await this.initAudio().then((): void => {
                this.checkStatusAudio.className = "title_scene_status_check check_enabled";
            });
            await this.loadSettings().then((): void => {
                this.checkStatusLoadSettings.className = "title_scene_status_check check_enabled";
            });
            await this.transitionToMenuScene();
        });
    }

    onRender(): void {
    }

    onClosed(): void {
        this.continueButton.innerText = "Continue";
        this.sceneTitle.style.display = "none";
    }

    onKeyPressed(e: KeyboardEvent): void {
    }

    onKeyReleased(e: KeyboardEvent): void {
    }

    onTouchStarted(e: TouchEvent): void {
    }

    onTouchEnded(e: TouchEvent): void {
    }

    async enterFullscreen(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                document.documentElement.requestFullscreen();
                resolve();
            }, this.loadDuration);
        });
    }

    async initAudio(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                audio.initAudioContext();
                resolve();
            }, this.loadDuration);
        });
    }

    async loadSettings(): Promise<void> {
        //TODO: Load settings
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log("Loaded local settings!");
                resolve();
            }, this.loadDuration);
        });
    }

    async transitionToMenuScene(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                transitionTo(new SceneMenu());
                resolve();
            }, this.loadDuration);
        })
    }
}