// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър


// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

// Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.


function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonFinal = nylon + 2;
    let paintFinal = paint + (paint * 0.1);
    
    let nylonPrice = nylonFinal * 1.50;
    let paintPrice = paintFinal * 14.50;
    let paintThinnerPrice = paintThinner * 5.00;
    let bags = 0.40;

    let totalMaterialsCost = nylonPrice + paintPrice + paintThinnerPrice + bags;
    
    let wagesPerHour = totalMaterialsCost * 0.30;
    let workersPaiment = workHours * wagesPerHour;

    let totalCosts = totalMaterialsCost + workersPaiment;
    console.log (totalCosts);

}
repainting (["10", "11", "4", "8"]);