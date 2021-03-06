const { BLACK_COLOR, RED_COLOR } = require('./colors');

const _ = BLACK_COLOR;
const X = RED_COLOR;

class Panel {
    constructor(){
        this.empty = [
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _,
            _, _, _, _, _, _, _, _
        ];
        
        this.cross = [
            X, _, _, _, _, _, _, X,
            _, X, _, _, _, _, X, _,
            _, _, X, _, _, X, _, _,
            _, _, _, X, X, _, _, _,
            _, _, _, X, X, _, _, _,
            _, _, X, _, _, X, _, _,
            _, X, _, _, _, _, X, _,
            X, _, _, _, _, _, _, X
        ];
        
        this.countDown = [
            [
                X, X, X, _, X, X, X, X,
                X, _, _, _, X, _, _, X,
                X, _, _, _, X, _, _, X,
                X, _, _, _, X, _, _, X,
                X, X, X, _, X, _, _, X,
                X, _, X, _, X, _, _, X,
                X, _, X, _, X, _, _, X,
                X, X, X, _, X, X, X, X
            ],
            [
                _, _, _, _, X, _, _, _,
                _, _, _, X, X, _, _, _,
                _, _, X, X, X, _, _, _,
                _, _, _, X, X, _, _, _,
                _, _, _, X, X, _, _, _,
                _, _, _, X, X, _, _, _,
                _, _, _, X, X, _, _, _,
                _, X, X, X, X, X, X, _
            ],
            [
                X, X, X, X, X, X, X, X,
                _, _, _, _, _, _, X, X,
                _, _, _, _, _, _, X, X,
                X, X, X, X, X, X, X, X,
                X, X, X, X, X, X, X, X,
                X, X, _, _, _, _, _, _,
                X, X, _, _, _, _, _, _,
                X, X, X, X, X, X, X, X
            ],
            [
                X, X, X, X, X, X, X, X,
                _, _, _, _, _, _, _, X,
                _, _, _, _, _, _, _, X,
                _, _, X, X, X, X, X, X,
                _, _, X, X, X, X, X, X,
                _, _, _, _, _, _, _, X,
                _, _, _, _, _, _, _, X,
                X, X, X, X, X, X, X, X
            ]
        ];   
    }
}

module.exports = Panel;