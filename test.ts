/*
let dy = 0
let dx = 0
Enum.setEnumVarStatement("PlayerAnims", "IDLE")
Enum.setEnumVarStatement("PlayerAnims", "WALK N")
Enum.setEnumVarStatement("PlayerAnims", "WALK NE")
Enum.setEnumVarStatement("PlayerAnims", "WALK E")
Enum.setEnumVarStatement("PlayerAnims", "WALK SE")
Enum.setEnumVarStatement("PlayerAnims", "WALK S")
Enum.setEnumVarStatement("PlayerAnims", "WALK SW")
Enum.setEnumVarStatement("PlayerAnims", "WALK W")
Enum.setEnumVarStatement("PlayerAnims", "WALK NW")
let s = sprites.create(assets.image`IDLE`, SpriteKind.Player)
controller.moveSprite(s, 100, 100)
let currentAnim = Enum.getEnumVar("PlayerAnims", "IDLE")
game.onUpdate(function () {
    dx = controller.dx()
    dy = controller.dy()
    if (dx > 0 && dy < 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK NE")
    } else if (dx > 0 && dy > 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK SE")
    } else if (dx > 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK E")
    } else if (dx < 0 && dy < 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK NW")
    } else if (dx < 0 && dy > 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK SW")
    } else if (dx < 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK W")
    } else if (dy < 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK N")
    } else if (dy > 0) {
        currentAnim = Enum.getEnumVar("PlayerAnims", "WALK S")
    } else {
        currentAnim = Enum.getEnumVar("PlayerAnims", "IDLE")
    }
    s.setImage([
        assets.image`IDLE`,
        assets.image`N`,
        assets.image`NE`,
        assets.image`E`,
        assets.image`SE`,
        assets.image`S`,
        assets.image`SW`,
        assets.image`W`,
        assets.image`NW`
    ][currentAnim])
})
*/