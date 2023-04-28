import {Scene} from "./scene";
import {getFramePerSecond, getNow, getRefreshRate, transitionTo} from "../polaris";
import {SceneMenu} from "./sceneMenu";
import {MapData, NoteSide} from "../map";
import {GameResult, GameState, JudgeState} from "../game";
import * as audio from "../audio";
import {SceneResult} from "./sceneResult";

export class SceneGame extends Scene {

    /* DOM Elements */
    private sceneGame: HTMLDivElement = document.getElementById("game_scene")! as HTMLDivElement;
    private laneEffectLeft: HTMLDivElement = document.getElementById("game_scene_lane_effect_left")! as HTMLDivElement;
    private laneEffectRight: HTMLDivElement = document.getElementById("game_scene_lane_effect_right")! as HTMLDivElement;
    private modalPauseWrapper: HTMLDivElement = document.getElementById("game_scene_modal_pause_wrapper")! as HTMLDivElement;
    private buttonResume: HTMLButtonElement = document.getElementById("game_scene_modal_pause_button_resume")! as HTMLButtonElement;
    private buttonQuit: HTMLButtonElement = document.getElementById("game_scene_modal_pause_button_quit")! as HTMLButtonElement;
    private labelJudgeState: HTMLDivElement = document.getElementById("game_scene_judge_state")! as HTMLDivElement;
    private audioMusic: HTMLAudioElement = document.getElementById("game_scene_audio_music")! as HTMLAudioElement;

    /* Game Variables */
    private gameState: GameState = GameState.INITIALIZING;

    private mapData: MapData | null = null;
    private startedTime: number = 0;
    private startDelay: number = 2000;
    private laneSpeed: number = 8.0;

    private hittingLeftNote: boolean = false;
    private hittingRightNote: boolean = false;
    private lastHittingLeftNote: boolean = false;
    private lastHittingRightNote: boolean = false;

    /* Delays in milliseconds */
    private rangePerfect: number = 40;
    private rangeGood: number = 100;
    private rangeJudge: number = 150;

    private lastJudgeStateDisplayed: number = 0;
    private judgeStateDuration: number = 1000;

    private gameResult: GameResult | null = null;

    onInit(): void {
        this.sceneGame.style.display = "flex";

        this.buttonResume.addEventListener("click", (): void => {
            this.resume();
        });
        this.buttonQuit.addEventListener("click", (): void => {
            transitionTo(new SceneMenu());
        });
        this.audioMusic.addEventListener("ended", (): void => {
            if (this.gameResult == null) {
                return;
            }
            this.gameState = GameState.FINISHED;

            transitionTo(new SceneResult(this.gameResult));
        });
        this.initMap("src/beatmap.json");
        this.initAudio();

        this.gameResult = new GameResult();
    }

    onRender(): void {
        if (this.mapData == null) {
            return;
        }
        if (this.gameState != GameState.PLAYING) {
            return;
        }
        this.updateNotePosition();
        this.judgeNotes();

        if (getNow() > this.lastJudgeStateDisplayed + this.judgeStateDuration) {
            this.hideJudgeState();
        }
        this.lastHittingLeftNote = this.hittingLeftNote;
        this.lastHittingRightNote = this.hittingRightNote;
    }

    onClosed(): void {
        this.modalPauseWrapper.style.display = "none";
        this.sceneGame.style.display = "none";
    }

    onKeyPressed(e: KeyboardEvent): void {
        if (e.code === "KeyF") {
            this.laneEffectLeft.style.visibility = "visible";
            this.hittingLeftNote = true;
        }
        if (e.code === "KeyJ") {
            this.laneEffectRight.style.visibility = "visible";
            this.hittingRightNote = true;
        }
        if (e.code === "Space") {
            if (this.gameState == GameState.READY) {
                this.audioMusic.play().then(() => {
                    this.gameState = GameState.PLAYING;
                    this.startedTime = getNow();
                }).catch((error) => {
                    console.log(error.message);
                });
            }
        }
        if (e.code === "Escape") {
            if (this.gameState == GameState.PAUSE) {
                this.resume();
            } else {
                this.audioMusic.pause();
                this.gameState = GameState.PAUSE;
                this.modalPauseWrapper.style.display = "flex";
            }
        }
    }

    onKeyReleased(e: KeyboardEvent): void {
        if (e.code === "KeyF") {
            this.laneEffectLeft.style.visibility = "hidden";
            this.hittingLeftNote = false;
        }
        if (e.code === "KeyJ") {
            this.laneEffectRight.style.visibility = "hidden";
            this.hittingRightNote = false;
        }
    }

    initMap(mapJsonUrl: string): void {
        this.loadMap(mapJsonUrl).then(value => {
            this.mapData = new MapData(value.name, value.musicFile, value.level, value.notes);
        }).catch(error => {
            this.mapData = null; // GG
            this.gameState = GameState.ERROR;

            console.log(error.message);
        }).finally(() => {
            if (this.gameState == GameState.ERROR) {
                return;
            }
            this.audioMusic.src = this.mapData!.musicFile;

            this.generateNotes().then(() => {
                this.gameState = GameState.READY;
            }).catch((error) => {
                this.gameState = GameState.ERROR;
                console.log(error);
            });
        });
    }

    async loadMap(mapJsonUrl: string): Promise<MapData> {
        const req: Request = new Request(mapJsonUrl);
        const res: Response = await fetch(req);
        const jsonText: string = await res.text();

        return await JSON.parse(jsonText) as MapData;
    }

    async generateNotes(): Promise<void> {
        if (this.mapData == null) {
            return;
        }
        const fps: number = getFramePerSecond();
        const refreshRate: number = getRefreshRate(fps);
        const width: number = window.innerWidth;
        const pixelPerSecond: number = this.laneSpeed * refreshRate;

        for (let note of this.mapData.notes) {
            const timingSec: number = note.timing / 1000.0;
            const requiredDist: number = ((timingSec + (this.startDelay / 1000.0)) * pixelPerSecond) - (width / 2.0);

            const notesWrapper: HTMLDivElement = document.getElementById("game_scene_lane_notes")! as HTMLDivElement;
            const noteElement: HTMLDivElement = document.createElement("div");

            if (note.side == NoteSide.LEFT) {
                noteElement.className = `game_scene_lane_note game_scene_lane_note_left`
                noteElement.style.left = `${-requiredDist}px`;
            } else {
                noteElement.className = `game_scene_lane_note game_scene_lane_note_right`
                noteElement.style.right = `${-requiredDist}px`;
            }
            noteElement.id = `note_id_${note.id}`;
            notesWrapper.appendChild(noteElement);
        }
    }

    updateNotePosition(): void {
        const notesLeftSide: HTMLCollectionOf<Element> = document.getElementsByClassName("game_scene_lane_note_left");
        const notesRightSide: HTMLCollectionOf<Element> = document.getElementsByClassName("game_scene_lane_note_right");

        for (let i: number = 0; i < notesLeftSide.length; i++) {
            const noteLeftSide: HTMLDivElement = notesLeftSide[i] as HTMLDivElement;
            const currentPosX: number = parseInt(noteLeftSide.style.left.replace("px", ""));

            noteLeftSide.style.left = `${currentPosX + this.laneSpeed}px`;
        }
        for (let i: number = 0; i < notesRightSide.length; i++) {
            const noteRightSide: HTMLDivElement = notesRightSide[i] as HTMLDivElement;
            const currentPosX: number = parseInt(noteRightSide.style.right.replace("px", ""));

            noteRightSide.style.right = `${currentPosX + this.laneSpeed}px`;
        }
    }

    judgeNotes(): void {
        if (this.mapData == null) {
            return;
        }
        if (this.gameResult == null) {
            return;
        }
        for (let note of this.mapData.notes) {
            const elem: HTMLElement | null = document.getElementById(`note_id_${note.id}`);
            const now: number = getNow();
            const elapsedTimeInGame: number = now - (this.startedTime + this.startDelay);

            if (elem == null) {
                continue;
            }
            if (elapsedTimeInGame > note.timing + this.rangeJudge) {
                this.gameResult.incrementCountMiss();
                elem.remove();
                this.showJudgeState(JudgeState.MISS);
            } else {
                const isHitting = (side: NoteSide): boolean => {
                    switch (side) {
                        case NoteSide.LEFT: {
                            return this.hittingLeftNote && !this.lastHittingLeftNote;
                        }
                        case NoteSide.RIGHT: {
                            return this.hittingRightNote && !this.lastHittingRightNote;
                        }
                        default: {
                            return false;
                        }
                    }
                }
                if (!isHitting(note.side)) {
                    return;
                }
                const isPerfect: boolean = elapsedTimeInGame >= note.timing - this.rangePerfect && elapsedTimeInGame <= note.timing + this.rangePerfect;
                const isGood: boolean = !isPerfect && elapsedTimeInGame >= note.timing - this.rangeGood && elapsedTimeInGame <= note.timing + this.rangeGood;
                const isMiss: boolean = !isPerfect && !isGood && elapsedTimeInGame >= note.timing - this.rangeJudge && elapsedTimeInGame <= note.timing + this.rangeJudge;

                if (isPerfect) {
                    this.gameResult.incrementCountPerfect();
                    elem.remove();
                    this.showJudgeState(JudgeState.PERFECT);
                }
                if (isGood) {
                    this.gameResult.incrementCountGood();
                    elem.remove();
                    this.showJudgeState(JudgeState.GOOD);
                }
                if (isMiss) {
                    this.gameResult.incrementCountMiss();
                    elem.remove();
                    this.showJudgeState(JudgeState.MISS);
                }
            }
        }
    }

    initAudio(): void {
        const ctx: AudioContext = audio.getAudioContext();
        const track: MediaElementAudioSourceNode = ctx.createMediaElementSource(this.audioMusic);
        const gainNode: GainNode = ctx.createGain();

        track.connect(gainNode).connect(ctx.destination);
    }

    resumeAudio(): Promise<void> {
        const ctx: AudioContext = audio.getAudioContext();
        return ctx.resume();
    }

    resume(): void {
        this.resumeAudio().then(() => {
            this.modalPauseWrapper.style.display = "none";
            this.gameState = GameState.PLAYING;
            this.startedTime = getNow();
        }).catch((error) => {
            console.log(error.message);
        });
    }

    showJudgeState(judgeState: JudgeState): void {
        const judgeStateText = (judgeState: JudgeState): string => {
            switch (judgeState) {
                case JudgeState.PERFECT: {
                    return "Perfect";
                }
                case JudgeState.GOOD: {
                    return "Good"
                }
                case JudgeState.MISS: {
                    return "Miss"
                }
                default: {
                    return "";
                }
            }
        }
        this.labelJudgeState.innerText = judgeStateText(judgeState);
        this.labelJudgeState.style.visibility = "visible";
        this.lastJudgeStateDisplayed = getNow();
    }

    hideJudgeState(): void {
        this.labelJudgeState.style.visibility = "hidden";
    }
}