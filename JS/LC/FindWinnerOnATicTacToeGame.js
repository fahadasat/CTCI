/**
 * @param {number[][]} moves
 * @return {string}
 * 1275
 */
var tictactoe = function (moves) {
    let row = Array(3).fill(0);
    let col = Array(3).fill(0);
    let mainDiag = 0;
    let rotDiag = 0;

    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i];

        let player = (i % 2 === 0) ? 1 : -1;
        //main diag
        if (x === y) {
            mainDiag += player;
            if (mainDiag === 3) return "A";
            if (mainDiag === -3) return "B";
        }
        //rotated diag
        if (x + y === 2) {
            rotDiag += player;
            if (rotDiag === 3) return "A";
            if (rotDiag === -3) return "B";
        }

        row[x] += player;
        if (row[x] === 3) return "A";
        if (row[x] === -3) return "B";
        col[y] += player;
        if (col[y] === 3) return "A";
        if (col[y] === -3) return "B";

    }
    return (moves.length === 9) ? "Draw" : "Pending";

};