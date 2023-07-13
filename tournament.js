const poolMatchMaking = (pool) => {
    let result = [];
    const clonedPool = pool.map((tab) => tab);
    result.push(pool[pool.length - 1] + clonedPool[clonedPool.length - 2]);
    while (result.length < pool.length * 2 - 1) {
        for (let i = 0; i < pool.length; i++) {
            for (var j = 0; j < clonedPool.length; j++) {
                if (pool[i] != clonedPool[j]) {
                    let team = result[result.length - 1].split("");
                    if (
                        team[0] != pool[i] &&
                        team[0] != clonedPool[j] &&
                        team[1] != pool[i] &&
                        team[1] != clonedPool[j]
                    ) {
                        let needpush = true;
                        for (let k = 0; k < result.length - 1; k++) {
                            if (
                                result[k] == pool[i] + clonedPool[j] ||
                                result[k].split("").reverse().join("") ==
                                    pool[i] + clonedPool[j]
                            ) {
                                needpush = false;
                                break;
                            }
                        }
                        if (needpush === true) {
                            result.push(pool[i] + clonedPool[j]);
                        }
                    }
                }
            }
        }
    }
    return result;
};

const dictionnary = {
    A: "Brésil",
    B: "Côte d'Ivoire",
    C: "Italie",
    D: "Turquie",
    E: "Maghreb United",
    F: "Qatar",
    G: "Sénégal",
    H: "Colombie",
    I: "Algérie",
    J: "Géorgie",
    K: "Ouïghours",
    L: "Maroc",
    M: "Gambie",
    N: "Palestine",
    O: "France",
    P: "Arabie-saoudite",
    Q: "Cameroun",
    R: "Espagne",
    S: "Japon",
    T: "Mexique",
};

const poule1 = ["A", "B", "C", "D", "E"],
    poule2 = ["F", "G", "H", "I", "J"],
    poule3 = ["K", "L", "M", "N", "O"],
    poule4 = ["P", "Q", "R", "S", "T"];

poule1.reverse();
poule2.reverse();
poule3.reverse();
poule4.reverse();

const listMatch1 = poolMatchMaking(poule1),
    listMatch2 = poolMatchMaking(poule2),
    listMatch3 = poolMatchMaking(poule3),
    listMatch4 = poolMatchMaking(poule4);

let wholeTournament1 = [],
    wholeTournament2 = [];

for (i = 0; i < listMatch1.length; i++) {
    wholeTournament1.push(listMatch1[i]);
    wholeTournament1.push(listMatch2[i]);
    wholeTournament1.push(listMatch3[i]);
    wholeTournament1.push(listMatch4[i]);
}

const displayWholeList = (teamList) => {
    for (var i = 0; i < teamList.length; i++) {
        const team = teamList[i].split("");
        console.log(dictionnary[team[0]] + " - " + dictionnary[team[1]]);
        //console.log(teamList[i]);
    }
};

console.log("Poule A & B & C & D");
console.log("");
displayWholeList(wholeTournament1);

displayWholeList(wholeTournament2);
