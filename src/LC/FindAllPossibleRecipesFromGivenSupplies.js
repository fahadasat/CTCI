/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 * 2115
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    let capable = [];
    let suppliesSet = new Set(supplies);

    for (let i = 0; i < recipes.length; i++) {
        if (suppliesSet.has(recipes[i])) {
            capable.push(recipes[i]);
            continue;
        }

        if (checkIngredient(i, new Set())) capable.push(recipes[i]);
    }

    function checkIngredient(ingredient, previous) {
        if (previous.has(ingredient)) return false;
        previous.add(ingredient);

        for (let i = 0; i < ingredients[ingredient].length; i++) {
            // console.log(ingredients[ingredient])
            if (!suppliesSet.has(ingredients[ingredient][i])) {

                let index = recipes.indexOf(ingredients[ingredient][i]);
                if (index === -1) return false;
                if (!checkIngredient(index, previous)) return false;
            }
        }

        // console.log(ingredient)
        // console.log(ingredients[ingredient])

        suppliesSet.add(recipes[ingredient])
        return true;
    }

    // console.log(suppliesSet)
    return capable;
};