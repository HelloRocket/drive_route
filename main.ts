input.onButtonPressed(Button.A, function () {
    Direction2 = Directions_List[List_Item]
    basic.showString(Direction2)
    List_Item += 1
})
input.onButtonPressed(Button.B, function () {
    if (Direction2 != "M") {
        Route.push(Direction2)
    } else if (Direction2 == "M") {
        for (let value of Route) {
            basic.showString("" + (value))
        }
    }
    List_Item = 0
    basic.showIcon(IconNames.Yes)
})
let Direction2 = ""
let Route: string[] = []
let Directions_List: string[] = []
let List_Item = 0
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
basic.clearScreen()
List_Item = 0
// Menu / Left / Forward / Right
Directions_List = ["M", "L", "F", "R"]
Route = []
Direction2 = Directions_List[List_Item]
basic.showString(Direction2)
List_Item += 1
