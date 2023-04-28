/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/audio.ts":
/*!******************************!*\
  !*** ./src/scripts/audio.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAudioContext\": () => (/* binding */ getAudioContext),\n/* harmony export */   \"initAudioContext\": () => (/* binding */ initAudioContext)\n/* harmony export */ });\nlet audioContext;\nconst initAudioContext = () => {\n    return new Promise((resolve) => {\n        audioContext = new AudioContext();\n        resolve();\n    });\n};\nconst getAudioContext = () => audioContext;\n\n\n//# sourceURL=webpack://polaris/./src/scripts/audio.ts?");

/***/ }),

/***/ "./src/scripts/game.ts":
/*!*****************************!*\
  !*** ./src/scripts/game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameResult\": () => (/* binding */ GameResult),\n/* harmony export */   \"GameState\": () => (/* binding */ GameState),\n/* harmony export */   \"JudgeState\": () => (/* binding */ JudgeState)\n/* harmony export */ });\nconst GameState = {\n    INITIALIZING: 0,\n    READY: 1,\n    PLAYING: 2,\n    PAUSE: 3,\n    FINISHED: 4,\n    ERROR: 5\n};\nconst JudgeState = {\n    PERFECT: 0,\n    GOOD: 1,\n    MISS: 2,\n};\nclass GameResult {\n    _countPerfect;\n    _countGood;\n    _countMiss;\n    _maxCombo;\n    _accuracy;\n    constructor() {\n        this._countPerfect = 0;\n        this._countGood = 0;\n        this._countMiss = 0;\n        this._maxCombo = 0;\n        const accuracyRaw = (this._countPerfect + (this._countGood * 0.5)) / (this._countPerfect + this._countGood + this._countMiss);\n        this._accuracy = parseFloat(accuracyRaw.toFixed(1)); // 小数点第一位で四捨五入\n    }\n    get countPerfect() {\n        return this._countPerfect;\n    }\n    incrementCountPerfect() {\n        this._countPerfect++;\n    }\n    get countGood() {\n        return this._countGood;\n    }\n    incrementCountGood() {\n        this._countGood++;\n    }\n    get countMiss() {\n        return this._countMiss;\n    }\n    incrementCountMiss() {\n        this._countMiss++;\n    }\n    get maxCombo() {\n        return this._maxCombo;\n    }\n    set maxCombo(maxCombo) {\n        this._maxCombo = maxCombo;\n    }\n    get accuracy() {\n        return this._accuracy;\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/game.ts?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polaris */ \"./src/scripts/polaris.ts\");\n\n(0,_polaris__WEBPACK_IMPORTED_MODULE_0__.run)();\n\n\n//# sourceURL=webpack://polaris/./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/map.ts":
/*!****************************!*\
  !*** ./src/scripts/map.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapData\": () => (/* binding */ MapData),\n/* harmony export */   \"Note\": () => (/* binding */ Note),\n/* harmony export */   \"NoteSide\": () => (/* binding */ NoteSide)\n/* harmony export */ });\nclass MapData {\n    _name;\n    _musicFile;\n    _level;\n    _notes;\n    constructor(name, musicFile, level, notes) {\n        this._name = name;\n        this._musicFile = musicFile;\n        this._level = level;\n        this._notes = notes;\n    }\n    get name() {\n        return this._name;\n    }\n    get musicFile() {\n        return this._musicFile;\n    }\n    get level() {\n        return this._level;\n    }\n    get notes() {\n        return this._notes;\n    }\n    set notes(notes) {\n        this._notes = notes;\n    }\n}\nconst NoteSide = {\n    LEFT: \"left\",\n    RIGHT: \"right\"\n};\nclass Note {\n    _id;\n    _side;\n    _timing;\n    constructor(id, side, timing) {\n        this._id = id;\n        this._side = side;\n        this._timing = timing;\n    }\n    get id() {\n        return this._id;\n    }\n    get side() {\n        return this._side;\n    }\n    get timing() {\n        return this._timing;\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/map.ts?");

/***/ }),

/***/ "./src/scripts/polaris.ts":
/*!********************************!*\
  !*** ./src/scripts/polaris.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFramePerSecond\": () => (/* binding */ getFramePerSecond),\n/* harmony export */   \"getLastUpdated\": () => (/* binding */ getLastUpdated),\n/* harmony export */   \"getNow\": () => (/* binding */ getNow),\n/* harmony export */   \"getRefreshRate\": () => (/* binding */ getRefreshRate),\n/* harmony export */   \"run\": () => (/* binding */ run),\n/* harmony export */   \"transitionTo\": () => (/* binding */ transitionTo)\n/* harmony export */ });\n/* harmony import */ var _scene_sceneTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene/sceneTitle */ \"./src/scripts/scene/sceneTitle.ts\");\n\nlet scene = new _scene_sceneTitle__WEBPACK_IMPORTED_MODULE_0__.SceneTitle();\nlet now = 0;\nlet lastUpdated = 0;\nlet framePerSecond = 0;\nconst init = () => {\n    scene.onInit();\n    document.addEventListener(\"keydown\", (e) => {\n        scene.onKeyPressed(e);\n    });\n    document.addEventListener(\"keyup\", (e) => {\n        scene.onKeyReleased(e);\n    });\n};\nconst render = () => {\n    now = performance.now();\n    framePerSecond = 1.0 / ((now - lastUpdated) / 1000.0);\n    scene.onRender();\n    lastUpdated = now;\n    requestAnimationFrame(render);\n};\nconst run = () => {\n    init();\n    render();\n};\nconst getNow = () => now;\nconst getLastUpdated = () => lastUpdated;\nconst getFramePerSecond = () => framePerSecond;\nconst getRefreshRate = (fps) => {\n    if (fps > 60 && fps <= 75) {\n        const dist60 = Math.abs(fps - 60);\n        const dist75 = Math.abs(fps - 75);\n        if (dist60 > dist75) {\n            return 75;\n        }\n        else {\n            return 60;\n        }\n    }\n    else if (fps > 75 && fps <= 120) {\n        const dist75 = Math.abs(fps - 75);\n        const dist120 = Math.abs(fps - 120);\n        if (dist75 > dist120) {\n            return 120;\n        }\n        else {\n            return 75;\n        }\n    }\n    else if (fps > 120 && fps <= 144) {\n        const dist120 = Math.abs(fps - 120);\n        const dist144 = Math.abs(fps - 144);\n        if (dist120 > dist144) {\n            return 144;\n        }\n        else {\n            return 120;\n        }\n    }\n    else if (fps > 144 && fps <= 165) {\n        const dist144 = Math.abs(fps - 144);\n        const dist165 = Math.abs(fps - 165);\n        if (dist144 > dist165) {\n            return 165;\n        }\n        else {\n            return 144;\n        }\n    }\n    else if (fps > 165 && fps <= 240) {\n        const dist165 = Math.abs(fps - 165);\n        const dist240 = Math.abs(fps - 240);\n        if (dist165 > dist240) {\n            return 240;\n        }\n        else {\n            return 165;\n        }\n    }\n    else if (fps > 240) {\n        const dist240 = Math.abs(fps - 240);\n        const dist360 = Math.abs(fps - 360);\n        if (dist240 > dist360) {\n            return 360;\n        }\n        else {\n            return 240;\n        }\n    }\n    return 60;\n};\nconst transitionTo = (transitionTo) => {\n    scene.onClosed();\n    scene = transitionTo;\n    scene.onInit();\n};\n\n\n//# sourceURL=webpack://polaris/./src/scripts/polaris.ts?");

/***/ }),

/***/ "./src/scripts/scene/scene.ts":
/*!************************************!*\
  !*** ./src/scripts/scene/scene.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/scene.ts?");

/***/ }),

/***/ "./src/scripts/scene/sceneGame.ts":
/*!****************************************!*\
  !*** ./src/scripts/scene/sceneGame.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneGame\": () => (/* binding */ SceneGame)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scripts/scene/scene.ts\");\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polaris */ \"./src/scripts/polaris.ts\");\n/* harmony import */ var _sceneMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneMenu */ \"./src/scripts/scene/sceneMenu.ts\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map */ \"./src/scripts/map.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game */ \"./src/scripts/game.ts\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio */ \"./src/scripts/audio.ts\");\n/* harmony import */ var _sceneResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sceneResult */ \"./src/scripts/scene/sceneResult.ts\");\n\n\n\n\n\n\n\nclass SceneGame extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    /* DOM Elements */\n    sceneGame = document.getElementById(\"game_scene\");\n    laneEffectLeft = document.getElementById(\"game_scene_lane_effect_left\");\n    laneEffectRight = document.getElementById(\"game_scene_lane_effect_right\");\n    modalPauseWrapper = document.getElementById(\"game_scene_modal_pause_wrapper\");\n    buttonResume = document.getElementById(\"game_scene_modal_pause_button_resume\");\n    buttonQuit = document.getElementById(\"game_scene_modal_pause_button_quit\");\n    labelJudgeState = document.getElementById(\"game_scene_judge_state\");\n    audioMusic = document.getElementById(\"game_scene_audio_music\");\n    /* Game Variables */\n    gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.INITIALIZING;\n    mapData = null;\n    startedTime = 0;\n    startDelay = 2000;\n    laneSpeed = 8.0;\n    hittingLeftNote = false;\n    hittingRightNote = false;\n    lastHittingLeftNote = false;\n    lastHittingRightNote = false;\n    /* Delays in milliseconds */\n    rangePerfect = 40;\n    rangeGood = 100;\n    rangeJudge = 150;\n    lastJudgeStateDisplayed = 0;\n    judgeStateDuration = 1000;\n    gameResult = null;\n    onInit() {\n        this.sceneGame.style.display = \"flex\";\n        this.buttonResume.addEventListener(\"click\", () => {\n            this.resume();\n        });\n        this.buttonQuit.addEventListener(\"click\", () => {\n            (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.transitionTo)(new _sceneMenu__WEBPACK_IMPORTED_MODULE_2__.SceneMenu());\n        });\n        this.audioMusic.addEventListener(\"ended\", () => {\n            if (this.gameResult == null) {\n                return;\n            }\n            this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.FINISHED;\n            (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.transitionTo)(new _sceneResult__WEBPACK_IMPORTED_MODULE_6__.SceneResult(this.gameResult));\n        });\n        this.initMap(\"src/map_test.json\");\n        this.initAudio();\n        this.gameResult = new _game__WEBPACK_IMPORTED_MODULE_4__.GameResult();\n    }\n    onRender() {\n        if (this.mapData == null) {\n            return;\n        }\n        if (this.gameState != _game__WEBPACK_IMPORTED_MODULE_4__.GameState.PLAYING) {\n            return;\n        }\n        this.updateNotePosition();\n        this.judgeNotes();\n        if ((0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getNow)() > this.lastJudgeStateDisplayed + this.judgeStateDuration) {\n            this.hideJudgeState();\n        }\n        this.lastHittingLeftNote = this.hittingLeftNote;\n        this.lastHittingRightNote = this.hittingRightNote;\n    }\n    onClosed() {\n        this.modalPauseWrapper.style.display = \"none\";\n        this.sceneGame.style.display = \"none\";\n    }\n    onKeyPressed(e) {\n        if (e.code === \"KeyF\") {\n            this.laneEffectLeft.style.visibility = \"visible\";\n            this.hittingLeftNote = true;\n        }\n        if (e.code === \"KeyJ\") {\n            this.laneEffectRight.style.visibility = \"visible\";\n            this.hittingRightNote = true;\n        }\n        if (e.code === \"Space\") {\n            if (this.gameState == _game__WEBPACK_IMPORTED_MODULE_4__.GameState.READY) {\n                this.audioMusic.play().then(() => {\n                    this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.PLAYING;\n                    this.startedTime = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getNow)();\n                }).catch((error) => {\n                    console.log(error.message);\n                });\n            }\n        }\n        if (e.code === \"Escape\") {\n            if (this.gameState == _game__WEBPACK_IMPORTED_MODULE_4__.GameState.PAUSE) {\n                this.resume();\n            }\n            else {\n                this.audioMusic.pause();\n                this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.PAUSE;\n                this.modalPauseWrapper.style.display = \"flex\";\n            }\n        }\n    }\n    onKeyReleased(e) {\n        if (e.code === \"KeyF\") {\n            this.laneEffectLeft.style.visibility = \"hidden\";\n            this.hittingLeftNote = false;\n        }\n        if (e.code === \"KeyJ\") {\n            this.laneEffectRight.style.visibility = \"hidden\";\n            this.hittingRightNote = false;\n        }\n    }\n    initMap(mapJsonUrl) {\n        this.loadMap(mapJsonUrl).then(value => {\n            this.mapData = new _map__WEBPACK_IMPORTED_MODULE_3__.MapData(value.name, value.musicFile, value.level, value.notes);\n        }).catch(error => {\n            this.mapData = null; // GG\n            this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.ERROR;\n            console.log(error.message);\n        }).finally(() => {\n            if (this.gameState == _game__WEBPACK_IMPORTED_MODULE_4__.GameState.ERROR) {\n                return;\n            }\n            this.audioMusic.src = this.mapData.musicFile;\n            this.generateNotes().then(() => {\n                this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.READY;\n            }).catch((error) => {\n                this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.ERROR;\n                console.log(error);\n            });\n        });\n    }\n    async loadMap(mapJsonUrl) {\n        const req = new Request(mapJsonUrl);\n        const res = await fetch(req);\n        const jsonText = await res.text();\n        return await JSON.parse(jsonText);\n    }\n    async generateNotes() {\n        if (this.mapData == null) {\n            return;\n        }\n        const fps = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getFramePerSecond)();\n        const refreshRate = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getRefreshRate)(fps);\n        const width = window.innerWidth;\n        const pixelPerSecond = this.laneSpeed * refreshRate;\n        for (let note of this.mapData.notes) {\n            const timingSec = note.timing / 1000.0;\n            const requiredDist = ((timingSec + (this.startDelay / 1000.0)) * pixelPerSecond) - (width / 2.0);\n            const notesWrapper = document.getElementById(\"game_scene_lane_notes\");\n            const noteElement = document.createElement(\"div\");\n            if (note.side == _map__WEBPACK_IMPORTED_MODULE_3__.NoteSide.LEFT) {\n                noteElement.className = `game_scene_lane_note game_scene_lane_note_left`;\n                noteElement.style.left = `${-requiredDist}px`;\n            }\n            else {\n                noteElement.className = `game_scene_lane_note game_scene_lane_note_right`;\n                noteElement.style.right = `${-requiredDist}px`;\n            }\n            noteElement.id = `note_id_${note.id}`;\n            notesWrapper.appendChild(noteElement);\n        }\n    }\n    updateNotePosition() {\n        const notesLeftSide = document.getElementsByClassName(\"game_scene_lane_note_left\");\n        const notesRightSide = document.getElementsByClassName(\"game_scene_lane_note_right\");\n        for (let i = 0; i < notesLeftSide.length; i++) {\n            const noteLeftSide = notesLeftSide[i];\n            const currentPosX = parseInt(noteLeftSide.style.left.replace(\"px\", \"\"));\n            noteLeftSide.style.left = `${currentPosX + this.laneSpeed}px`;\n        }\n        for (let i = 0; i < notesRightSide.length; i++) {\n            const noteRightSide = notesRightSide[i];\n            const currentPosX = parseInt(noteRightSide.style.right.replace(\"px\", \"\"));\n            noteRightSide.style.right = `${currentPosX + this.laneSpeed}px`;\n        }\n    }\n    judgeNotes() {\n        if (this.mapData == null) {\n            return;\n        }\n        if (this.gameResult == null) {\n            return;\n        }\n        for (let note of this.mapData.notes) {\n            const elem = document.getElementById(`note_id_${note.id}`);\n            const now = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getNow)();\n            const elapsedTimeInGame = now - (this.startedTime + this.startDelay);\n            if (elem == null) {\n                continue;\n            }\n            if (elapsedTimeInGame > note.timing + this.rangeJudge) {\n                this.gameResult.incrementCountMiss();\n                elem.remove();\n                this.showJudgeState(_game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.MISS);\n            }\n            else {\n                const isHitting = (side) => {\n                    switch (side) {\n                        case _map__WEBPACK_IMPORTED_MODULE_3__.NoteSide.LEFT: {\n                            return this.hittingLeftNote && !this.lastHittingLeftNote;\n                        }\n                        case _map__WEBPACK_IMPORTED_MODULE_3__.NoteSide.RIGHT: {\n                            return this.hittingRightNote && !this.lastHittingRightNote;\n                        }\n                        default: {\n                            return false;\n                        }\n                    }\n                };\n                if (!isHitting(note.side)) {\n                    return;\n                }\n                const isPerfect = elapsedTimeInGame >= note.timing - this.rangePerfect && elapsedTimeInGame <= note.timing + this.rangePerfect;\n                const isGood = !isPerfect && elapsedTimeInGame >= note.timing - this.rangeGood && elapsedTimeInGame <= note.timing + this.rangeGood;\n                const isMiss = !isPerfect && !isGood && elapsedTimeInGame >= note.timing - this.rangeJudge && elapsedTimeInGame <= note.timing + this.rangeJudge;\n                if (isPerfect) {\n                    this.gameResult.incrementCountPerfect();\n                    elem.remove();\n                    this.showJudgeState(_game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.PERFECT);\n                }\n                if (isGood) {\n                    this.gameResult.incrementCountGood();\n                    elem.remove();\n                    this.showJudgeState(_game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.GOOD);\n                }\n                if (isMiss) {\n                    this.gameResult.incrementCountMiss();\n                    elem.remove();\n                    this.showJudgeState(_game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.MISS);\n                }\n            }\n        }\n    }\n    initAudio() {\n        const ctx = _audio__WEBPACK_IMPORTED_MODULE_5__.getAudioContext();\n        const track = ctx.createMediaElementSource(this.audioMusic);\n        const gainNode = ctx.createGain();\n        track.connect(gainNode).connect(ctx.destination);\n    }\n    resumeAudio() {\n        const ctx = _audio__WEBPACK_IMPORTED_MODULE_5__.getAudioContext();\n        return ctx.resume();\n    }\n    resume() {\n        this.resumeAudio().then(() => {\n            this.modalPauseWrapper.style.display = \"none\";\n            this.gameState = _game__WEBPACK_IMPORTED_MODULE_4__.GameState.PLAYING;\n            this.startedTime = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getNow)();\n        }).catch((error) => {\n            console.log(error.message);\n        });\n    }\n    showJudgeState(judgeState) {\n        const judgeStateText = (judgeState) => {\n            switch (judgeState) {\n                case _game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.PERFECT: {\n                    return \"Perfect\";\n                }\n                case _game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.GOOD: {\n                    return \"Good\";\n                }\n                case _game__WEBPACK_IMPORTED_MODULE_4__.JudgeState.MISS: {\n                    return \"Miss\";\n                }\n                default: {\n                    return \"\";\n                }\n            }\n        };\n        this.labelJudgeState.innerText = judgeStateText(judgeState);\n        this.labelJudgeState.style.visibility = \"visible\";\n        this.lastJudgeStateDisplayed = (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.getNow)();\n    }\n    hideJudgeState() {\n        this.labelJudgeState.style.visibility = \"hidden\";\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/sceneGame.ts?");

/***/ }),

/***/ "./src/scripts/scene/sceneMenu.ts":
/*!****************************************!*\
  !*** ./src/scripts/scene/sceneMenu.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneMenu\": () => (/* binding */ SceneMenu)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scripts/scene/scene.ts\");\n/* harmony import */ var _sceneSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneSettings */ \"./src/scripts/scene/sceneSettings.ts\");\n/* harmony import */ var _sceneGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneGame */ \"./src/scripts/scene/sceneGame.ts\");\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polaris */ \"./src/scripts/polaris.ts\");\n\n\n\n\nclass SceneMenu extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    sceneMenu = document.getElementById(\"menu_scene\");\n    inputMusicUrl = document.getElementById(\"menu_scene_modal_play_form_input_url\");\n    buttonPlay = document.getElementById(\"menu_scene_button_play\");\n    buttonSettings = document.getElementById(\"menu_scene_button_settings\");\n    modalPlay = document.getElementById(\"menu_scene_modal_play_wrapper\");\n    buttonClose = document.getElementById(\"menu_scene_modal_play_button_close\");\n    buttonSubmit = document.getElementById(\"menu_scene_modal_play_form_button_submit\");\n    onInit() {\n        this.sceneMenu.style.display = \"flex\";\n        this.buttonPlay.addEventListener(\"click\", () => {\n            this.modalPlay.style.display = \"flex\";\n        });\n        this.buttonClose.addEventListener(\"click\", () => {\n            this.modalPlay.style.display = \"none\";\n        });\n        this.buttonSubmit.addEventListener(\"click\", (event) => {\n            if (this.inputMusicUrl.value == \"\") {\n                return;\n            }\n            event.preventDefault();\n            (0,_polaris__WEBPACK_IMPORTED_MODULE_3__.transitionTo)(new _sceneGame__WEBPACK_IMPORTED_MODULE_2__.SceneGame());\n        });\n        this.buttonSettings.addEventListener(\"click\", () => {\n            (0,_polaris__WEBPACK_IMPORTED_MODULE_3__.transitionTo)(new _sceneSettings__WEBPACK_IMPORTED_MODULE_1__.SceneSettings());\n        });\n    }\n    onRender() {\n    }\n    onClosed() {\n        this.modalPlay.style.display = \"none\";\n        this.sceneMenu.style.display = \"none\";\n    }\n    onKeyPressed(e) {\n    }\n    onKeyReleased(e) {\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/sceneMenu.ts?");

/***/ }),

/***/ "./src/scripts/scene/sceneResult.ts":
/*!******************************************!*\
  !*** ./src/scripts/scene/sceneResult.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneResult\": () => (/* binding */ SceneResult)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scripts/scene/scene.ts\");\n\nclass SceneResult extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    gameResult;\n    sceneResult = document.getElementById(\"result_scene\");\n    numberCountPerfect = document.getElementById(\"result_scene_main_count_perfect_number\");\n    numberCountGood = document.getElementById(\"result_scene_main_count_good_number\");\n    numberCountMiss = document.getElementById(\"result_scene_main_count_miss_number\");\n    numberMaxCombo = document.getElementById(\"result_scene_main_count_max_combo_number\");\n    numberAccuracy = document.getElementById(\"result_scene_main_accuracy_number\");\n    constructor(gameResult) {\n        super();\n        this.gameResult = gameResult;\n    }\n    onInit() {\n        this.sceneResult.style.display = \"flex\";\n        this.numberCountPerfect.innerHTML = `${this.gameResult.countPerfect}`;\n        this.numberCountGood.innerHTML = `${this.gameResult.countGood}`;\n        this.numberCountMiss.innerHTML = `${this.gameResult.countMiss}`;\n        this.numberMaxCombo.innerHTML = `${this.gameResult.maxCombo}`;\n        this.numberAccuracy.innerHTML = `${this.gameResult.accuracy}%`;\n    }\n    onRender() {\n    }\n    onClosed() {\n        this.sceneResult.style.display = \"none\";\n    }\n    onKeyPressed(e) {\n    }\n    onKeyReleased(e) {\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/sceneResult.ts?");

/***/ }),

/***/ "./src/scripts/scene/sceneSettings.ts":
/*!********************************************!*\
  !*** ./src/scripts/scene/sceneSettings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneSettings\": () => (/* binding */ SceneSettings)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scripts/scene/scene.ts\");\n/* harmony import */ var _sceneMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneMenu */ \"./src/scripts/scene/sceneMenu.ts\");\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polaris */ \"./src/scripts/polaris.ts\");\n\n\n\nclass SceneSettings extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    sceneSettings = document.getElementById(\"settings_scene\");\n    buttonBack = document.getElementById(\"settings_scene_header_button_back\");\n    onInit() {\n        this.sceneSettings.style.display = \"flex\";\n        this.buttonBack.addEventListener(\"click\", () => {\n            (0,_polaris__WEBPACK_IMPORTED_MODULE_2__.transitionTo)(new _sceneMenu__WEBPACK_IMPORTED_MODULE_1__.SceneMenu());\n        });\n        // TODO: Update setting values\n        // TODO: Link labels and values\n    }\n    onRender() {\n    }\n    onClosed() {\n        // TODO: Save settings using cookie\n        this.sceneSettings.style.display = \"none\";\n    }\n    onKeyPressed(e) {\n    }\n    onKeyReleased(e) {\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/sceneSettings.ts?");

/***/ }),

/***/ "./src/scripts/scene/sceneTitle.ts":
/*!*****************************************!*\
  !*** ./src/scripts/scene/sceneTitle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneTitle\": () => (/* binding */ SceneTitle)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scripts/scene/scene.ts\");\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polaris */ \"./src/scripts/polaris.ts\");\n/* harmony import */ var _sceneMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneMenu */ \"./src/scripts/scene/sceneMenu.ts\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio */ \"./src/scripts/audio.ts\");\n\n\n\n\nclass SceneTitle extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    sceneTitle = document.getElementById(\"title_scene\");\n    continueButton = document.getElementById(\"title_scene_button_continue\");\n    checkStatusFullscreen = document.getElementById(\"title_scene_status_fullscreen_check\");\n    checkStatusAudio = document.getElementById(\"title_scene_status_audio_check\");\n    checkStatusLoadSettings = document.getElementById(\"title_scene_status_load_settings_check\");\n    loadDuration = 500;\n    onInit() {\n        this.sceneTitle.style.display = \"flex\";\n        this.continueButton.innerText = \"Continue\";\n        this.continueButton.addEventListener(\"click\", async () => {\n            this.continueButton.disabled = true;\n            this.continueButton.innerText = \"Initializing...\";\n            await this.enterFullscreen().then(() => {\n                this.checkStatusFullscreen.className = \"title_scene_status_check check_enabled\";\n            });\n            await this.initAudio().then(() => {\n                this.checkStatusAudio.className = \"title_scene_status_check check_enabled\";\n            });\n            await this.loadSettings().then(() => {\n                this.checkStatusLoadSettings.className = \"title_scene_status_check check_enabled\";\n            });\n            await this.transitionToMenuScene();\n        });\n    }\n    onRender() {\n    }\n    onClosed() {\n        this.continueButton.innerText = \"Continue\";\n        this.sceneTitle.style.display = \"none\";\n    }\n    onKeyPressed(e) {\n    }\n    onKeyReleased(e) {\n    }\n    async enterFullscreen() {\n        return new Promise((resolve) => {\n            setTimeout(() => {\n                document.documentElement.requestFullscreen();\n                resolve();\n            }, this.loadDuration);\n        });\n    }\n    async initAudio() {\n        return new Promise((resolve) => {\n            setTimeout(() => {\n                _audio__WEBPACK_IMPORTED_MODULE_3__.initAudioContext();\n                resolve();\n            }, this.loadDuration);\n        });\n    }\n    async loadSettings() {\n        //TODO: Load settings\n        return new Promise((resolve) => {\n            setTimeout(() => {\n                console.log(\"Loaded local settings!\");\n                resolve();\n            }, this.loadDuration);\n        });\n    }\n    async transitionToMenuScene() {\n        return new Promise((resolve) => {\n            setTimeout(() => {\n                (0,_polaris__WEBPACK_IMPORTED_MODULE_1__.transitionTo)(new _sceneMenu__WEBPACK_IMPORTED_MODULE_2__.SceneMenu());\n                resolve();\n            }, this.loadDuration);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://polaris/./src/scripts/scene/sceneTitle.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.ts");
/******/ 	
/******/ })()
;