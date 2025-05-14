// Sistemas de nota caso ele receba 10 = A+
// 10 = A+
// 9 = A
// 8 = B+
// 7 = B
// 6 = C+
// 5 = C
// 4 = D+
// 3 = D
// 2 = E+
// 1 = E
// 0 = F

function verificarNota(a) {
    if (a == 10) {
        console.log("A+")
    } else if (a == 9) {
        console.log("A")
    } else if (a == 8) {
        console.log("B+")
    } else if (a == 7) {
        console.log("B")
    } else if (a == 6) {
        console.log("C+")
    } else if (a == 5) {
        console.log("C")
    } else if (a == 4) {
        console.log("D+")
    } else if (a == 3) {
        console.log("D")
    } else if (a == 2) {
        console.log("E+")
    } else if (a == 1) {
        console.log("E")
    } else if (a == 0) {
        console.log("F")
    } else {
        console.log("NOTA INCOMPATÍVEL")
    }
}

verificarNota (10)