class Level {
    enemies;
    clouds;
    backgroundObjects;
    collectables;
    level_end_x = 2300;

    constructor(enemies, clouds, backgroundObjects, collectables) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectables = collectables;
    }
}