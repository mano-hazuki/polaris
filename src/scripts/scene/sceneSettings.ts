import {Scene} from "./scene";
import {SceneMenu} from "./sceneMenu";
import {transitionTo} from "../polaris";

export class SceneSettings extends Scene {

    private sceneSettings: HTMLDivElement = document.getElementById("settings_scene")! as HTMLDivElement;
    private buttonBack: HTMLButtonElement = document.getElementById("settings_scene_header_button_back")! as HTMLButtonElement;

    onInit(): void {
        this.sceneSettings.style.display = "flex";
        this.buttonBack.addEventListener("click", () => {
            transitionTo(new SceneMenu());
        });
        // TODO: Update setting values
        // TODO: Link labels and values
    }

    onRender(): void {
    }

    onClosed(): void {
        // TODO: Save settings using cookie
        this.sceneSettings.style.display = "none";
    }

    onKeyPressed(e: KeyboardEvent): void {
    }

    onKeyReleased(e: KeyboardEvent): void {
    }
}