// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

for (var i = 1; i <= 3; i++)
{
    var linha = ""
    for(var j = 1; j <= 3; j++)
    {
        linha += `[${i},${j}]`
    }
    console.log(linha)
}