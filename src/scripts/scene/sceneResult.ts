import {Scene} from "./scene";
import {GameResult} from "../game";
import {transitionTo} from "../polaris";
import {SceneMenu} from "./sceneMenu";

export class SceneResult extends Scene {

    private gameResult: GameResult;

    private sceneResult: HTMLDivElement = document.getElementById("result_scene")! as HTMLDivElement;

    private numberCountPerfect: HTMLHeadingElement = document.getElementById("result_scene_main_count_perfect_number")! as HTMLHeadingElement;
    private numberCountGood: HTMLHeadingElement = document.getElementById("result_scene_main_count_good_number")! as HTMLHeadingElement;
    private numberCountMiss: HTMLHeadingElement = document.getElementById("result_scene_main_count_miss_number")! as HTMLHeadingElement;
    private numberMaxCombo: HTMLHeadingElement = document.getElementById("result_scene_main_count_max_combo_number")! as HTMLHeadingElement;
    private numberAccuracy: HTMLHeadingElement = document.getElementById("result_scene_main_accuracy_number")! as HTMLHeadingElement;

    private buttonReturn: HTMLButtonElement = document.getElementById("result_scene_footer_button_return")! as HTMLButtonElement;
    private modalRateWrapper: HTMLDivElement = document.getElementById("result_scene_modal_rate_wrapper")! as HTMLDivElement;
    private buttonThumbUp: HTMLButtonElement = document.getElementById("result_scene_modal_rate_button_thumbs_up")! as HTMLButtonElement;
    private buttonThumbDown: HTMLButtonElement = document.getElementById("result_scene_modal_rate_button_thumbs_down")! as HTMLButtonElement;

    constructor(gameResult: GameResult) {
        super();
        this.gameResult = gameResult;
    }

    onInit(): void {
        this.sceneResult.style.display = "flex";

        this.numberCountPerfect.innerHTML = `${this.gameResult.countPerfect}`;
        this.numberCountGood.innerHTML = `${this.gameResult.countGood}`;
        this.numberCountMiss.innerHTML = `${this.gameResult.countMiss}`;
        this.numberMaxCombo.innerHTML = `${this.gameResult.maxCombo}`;
        this.numberAccuracy.innerHTML = `${this.gameResult.accuracy}%`;

        this.buttonReturn.addEventListener("click", () => {
            this.modalRateWrapper.style.display = "flex";
        });
        this.buttonThumbUp.addEventListener("click", () => {
            //TODO: Send rate to the server
           transitionTo(new SceneMenu());
        });
        this.buttonThumbDown.addEventListener("click", () => {
            //TODO: Send rate to the server
            transitionTo(new SceneMenu());
        });
    }

    onRender(): void {
    }

    onClosed(): void {
        this.modalRateWrapper.style.display = "none";
        this.sceneResult.style.display = "none";
    }

    onKeyPressed(e: KeyboardEvent): void {
    }

    onKeyReleased(e: KeyboardEvent): void {
    }
}