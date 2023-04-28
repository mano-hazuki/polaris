export class MapData {
    _name: string;
    _musicFile: string;
    _level: number;
    _notes: Note[];

    constructor(name: string, musicFile: string, level: number, notes: Note[]) {
        this._name = name;
        this._musicFile = musicFile;
        this._level = level;
        this._notes = notes;
    }

    get name(): string {
        return this._name;
    }

    get musicFile(): string {
        return this._musicFile;
    }

    get level(): number {
        return this._level;
    }

    get notes(): Note[] {
        return this._notes;
    }

    set notes(notes: Note[]) {
        this._notes = notes;
    }
}

export const NoteSide = {
    LEFT: "left",
    RIGHT: "right"
} as const;

export type NoteSide = typeof NoteSide[keyof typeof NoteSide];

export class Note {
    private readonly _id: number;
    private readonly _side: NoteSide;
    private readonly _timing: number;

    constructor(id: number, side: NoteSide, timing: number) {
        this._id = id;
        this._side = side;
        this._timing = timing;
    }

    get id(): number {
        return this._id;
    }

    get side(): NoteSide {
        return this._side;
    }

    get timing(): number {
        return this._timing;
    }
}