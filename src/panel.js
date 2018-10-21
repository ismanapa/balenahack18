import { BLACK_COLOR, RED_COLOR } from 'colors.js'

export class Panel {
    _ = BLACK_COLOR;
    X = RED_COLOR;
    empty = [
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _,
        _, _, _, _, _, _, _, _
    ];
    
    cross = [
        X, _, _, _, _, _, _, X,
        _, X, _, _, _, _, X, _,
        _, _, X, _, _, X, _, _,
        _, _, _, X, X, _, _, _,
        _, _, _, X, X, _, _, _,
        _, _, X, _, _, X, _, _,
        _, X, _, _, _, _, X, _,
        X, _, _, _, _, _, _, X
    ];
    
    countDown = [
        [
            [
                X, X, X, _, X, X, X, X,
                X, _, _, _, X, _, _, X,
                X, _, _, _, X, _, _, X,
                X, X, X, _, X, _, _, X,
                X, _, X, _, X, _, _, X,
                X, _, X, _, X, _, _, X,
                X, X, X, _, X, X, X, X,
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
                _, _, _, _, _, _, _, X,
                _, _, _, _, _, _, _, X,
                X, X, X, X, X, X, X, X,
                X, _, _, _, _, _, _, _,
                X, _, _, _, _, _, _, _,
                X, X, X, X, X, X, X, X,
            ],
            [
                X, X, X, X, X, X, X, X,
                _, _, _, _, _, _, _, X,
                _, _, _, _, _, _, _, X,
                _, _, X, X, X, X, X, X,
                _, _, _, _, _, _, _, X,
                _, _, _, _, _, _, _, X,
                X, X, X, X, X, X, X, X,
            ]
        ]
    ];   
}