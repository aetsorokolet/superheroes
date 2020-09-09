let superheroes = require("superheroes");
console.log(superheroes.all);//omadus, property
//muutuja loome ja proovime kuvada
console.log(superheroes.random());
//massiiv, käsk, element mida soovime kätte saada ja mida sellega teha
superheroes.all.forEach(hero=>{
console.log(hero);
});