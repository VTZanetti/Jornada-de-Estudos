// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

// var i = 1;
// var j = 1;
// var linha = ""

// for (;j <= 3;) 
//     {
//     linha+=`[${i}, ${j}] `
//     if (j <= 3)
//         j++;
//     if (j === 4 && (i == 1 || i == 2))
//         {
//             i++
//             j = 1;
//         }
// }

for (var i = 1; i <= 3; i++)
{
    var linha = "";
    for (var j = 1;j <= 3;j++)
    {
        linha += `[${i}, ${j}]`
    }
    console.log(linha)
}