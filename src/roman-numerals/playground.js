console.log("hello world")

function romanNumeral(roman) {

    let roman_numeral_set = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    console.log(roman_numeral_set)

    let constraint = {
        "I": ["V", "X"],
        "X": ["L", "C"],
        "C": ["D", "M"]
    }

    console.log(constraint)



    let roman_numeral_map = {}

    for (let i = 0; i < roman.length; i++) {
        if (!roman_numeral_map.hasOwnProperty(roman[i])) {
            roman_numeral_map[roman[i]] = 1
        }
        else {
            roman_numeral_map[roman[i]] += 1
        }
    }
    console.log(roman_numeral_map["C"] === 3)

    let greater_3 = 0

    for (key in roman_numeral_map) {
        if (roman_numeral_map[key] > 3) {
            greater_3 += 1

        }
        else {
            greater_3 += 0
        }
    }
    console.log(greater_3)

    if (greater_3 === 0) {
        console.log("am here")
        let j = 0
        let evaluator = 0
        let sum_tri = 0
        let sum_dbl = 0
        let decimalBox = []
        while (j < roman.length) {
            console.log(j)
            if (j + 1 < roman.length) {
                if (roman_numeral_set[roman[j + 1]] > roman_numeral_set[roman[j]]) {
                    if (constraint[roman[j]].includes(roman[j + 1])) {
                        evaluator = roman_numeral_set[roman[j + 1]] - roman_numeral_set[roman[j]]
                        decimalBox.push(evaluator)
                        console.log(decimalBox)
                        j += 2;
                    }
                }
                else if (roman_numeral_map[roman[j]] === 3) {
                    console.log(j)
                    let x = 0
                    while (x < 3) {
                        sum_tri += roman_numeral_set[roman[j]]
                        x += 1
                    }
                    console.log(sum_tri)
                    decimalBox.push(sum_tri)
                    j += 3
                    console.log(j)
                }

                else if (roman_numeral_map[roman[j]] === 2) {
                    let z = 0
                    while (z < 2) {
                        sum_dbl += roman_numeral_set[roman[j]]
                        z += 1
                    }

                    let is_valid_double = Object.keys(roman_numeral_set).every(function (k) {
                        return roman_numeral_set[k] !== sum_dbl
                    })
                    console.log(is_valid_double)
                    if (is_valid_double) {
                        decimalBox.push(sum_dbl)
                    }

                    j += 2
                }

                else if (roman_numeral_set[roman[j + 1]] < roman_numeral_set[roman[j]] && roman_numeral_map[roman[j + 1]] > 1) {
                    evaluator = roman_numeral_set[roman[j]]
                    decimalBox.push(evaluator)
                    j += 1;
                }
                else if (roman_numeral_set[roman[j + 1]] < roman_numeral_set[roman[j]] && roman_numeral_map[roman[j + 1]] < 2) {
                    evaluator = roman_numeral_set[roman[j]]
                    console.log(evaluator)
                    decimalBox.push(evaluator)
                    j += 1;

                }
            }
            else {
                return sum
            }

        }

        let total = 0
        if (decimalBox.length > 0) {
            var sum = decimalBox.reduce(function (total, current) {
                return total + current
            })
        }
    }

    return sum

}

console.log(romanNumeral("CC"))

