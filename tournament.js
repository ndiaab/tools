var poule1 = ["A", "B", "C", "D", "E"];
var poule2 = ["A", "B", "C", "D", "E"];
var result = [];

result.push(poule1[poule1.length-1]+poule2[poule2.length-2]);
while (result.length < 9) {
    for (var i = 0; i < poule1.length; i++) {
        for (var j = 0; j < poule2.length; j++) {
            if (poule1[i] != poule2[j]) {
                if (result.length > 0) {
                    var team = result[result.length - 1].split("");
                    if (
                        team[0] != poule1[i] &&
                        team[0] != poule2[j] &&
                        team[1] != poule1[i] &&
                        team[1] != poule2[j]
                    ) {
                        var needpush = true;
                        for (var k = 0; k < result.length - 1; k++) {
                            if (
                                result[k] == poule1[i] + poule2[j] ||
                                result[k].split("").reverse().join("") ==
                                    poule1[i] + poule2[j]
                            ) {
                                needpush = false;
                                break;
                            }
                        }
                        if (needpush === true) {
                            result.push(poule1[i] + poule2[j]);
                        }
                    }
                } else {
                    result.push(poule1[i] + poule2[j]);
                }
            }
        }
    }
}
console.log(result);
