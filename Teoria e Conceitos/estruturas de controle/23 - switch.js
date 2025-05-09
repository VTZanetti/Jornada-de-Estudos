const nota = 10;
switch(Math.ceil(nota))
{
    case 10: case 9: case 8:
{    console.log ("Aprovado!")
    break;}
    case 7: case 6: case 5:
    console.log("Media!")
    break;
    case 4: case 3: case 2: case 1: case 0:
    console.log("Reprovado!")
    default:
    console.log("ERROR");
}