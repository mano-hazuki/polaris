import {Scene} from "./scene";
import {SceneSettings} from "./sceneSettings";
import {SceneGame} from "./sceneGame";
import {transitionTo} from "../polaris";

export class SceneMenu extends Scene {

    private sceneMenu: HTMLDivElement = document.getElementById("menu_scene")! as HTMLDivElement;
    private inputMusicUrl: HTMLInputElement = document.getElementById("menu_scene_modal_play_form_input_url")! as HTMLInputElement;
    private buttonPlay: HTMLButtonElement = document.getElementById("menu_scene_button_play")! as HTMLButtonElement;
    private buttonSettings: HTMLButtonElement = document.getElementById("menu_scene_button_settings")! as HTMLButtonElement;
    private modalPlay: HTMLDivElement = document.getElementById("menu_scene_modal_play_wrapper")! as HTMLDivElement;
    private buttonClose: HTMLButtonElement = document.getElementById("menu_scene_modal_play_button_close")! as HTMLButtonElement;
    private buttonSubmit: HTMLButtonElement = document.getElementById("menu_scene_modal_play_form_button_submit")! as HTMLButtonElement;

    onInit(): void {
        this.sceneMenu.style.display = "flex";

        this.buttonPlay.addEventListener("click", () => {
            this.modalPlay.style.display = "flex";
        });
        this.buttonClose.addEventListener("click", () => {
            this.modalPlay.style.display = "none";
        })
        this.buttonSubmit.addEventListener("click", (event) => {
            if (this.inputMusicUrl.value == "") {
                return;
            }
            event.preventDefault();

            transitionTo(new SceneGame());
        });
        this.buttonSettings.addEventListener("click", () => {
            transitionTo(new SceneSettings());
        });
    }

    onRender(): void {
    }

    onClosed(): void {
        this.modalPlay.style.display = "none";
        this.sceneMenu.style.display = "none";
    }

    onKeyPressed(e: KeyboardEvent): void {
    }

    onKeyReleased(e: KeyboardEvent): void {
    }
}