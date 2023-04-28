export const GameState = {
    INITIALIZING: 0,
    READY: 1,
    PLAYING: 2,
    PAUSE: 3,
    FINISHED: 4,
    ERROR: 5
} as const;

export type GameState = typeof GameState[keyof typeof GameState];

export const JudgeState = {
    PERFECT: 0,
    GOOD: 1,
    MISS: 2,
} as const;

export type JudgeState = typeof JudgeState[keyof typeof JudgeState];

export class GameResult {

    private _countPerfect: number;
    private _countGood: number;
    private _countMiss: number;
    private _maxCombo: number;
    private readonly _accuracy: number;

    constructor() {
        this._countPerfect = 0;
        this._countGood = 0;
        this._countMiss = 0;
        this._maxCombo = 0;

        const accuracyRaw: number = (this._countPerfect + (this._countGood * 0.5)) / (this._countPerfect + this._countGood + this._countMiss);
        this._accuracy = parseFloat(accuracyRaw.toFixed(1)); // 小数点第一位で四捨五入
    }

    get countPerfect(): number {
        return this._countPerfect;
    }

    incrementCountPerfect(): void {
        this._countPerfect++;
    }

    get countGood(): number {
        return this._countGood;
    }

    incrementCountGood(): void {
        this._countGood++;
    }

    get countMiss(): number {
        return this._countMiss;
    }

    incrementCountMiss(): void {
        this._countMiss++;
    }

    get maxCombo(): number {
        return this._maxCombo;
    }

    set maxCombo(maxCombo: number) {
        this._maxCombo = maxCombo;
    }

    get accuracy(): number {
        return this._accuracy;
    }
}