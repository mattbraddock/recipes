import Recipe from 'https://unpkg.com/cookscript/dist/index.js';

const recipes = {
    'banana-bread':
`>Banana (Nut) Bread
Preheat oven to 325F
Combine the @unsalted butter[softened]{8%tbs}, @light brown sugar{1/3%cup}, @dark brown sugar{1/3%cup}, @baking powder{1%tsp}, @baking soda{1%tsp}, @salt{1%tsp}, @ground cinnamon{1%tsp}, and @ground nutmeg{1/4%tsp} in a stand mixer
Add in @bananas[mashed]{375%grams}, @seedless raspberry fruit spread{2%tbs}, @vanilla extract{1%tsp}, and @eggs{2%}, then beat until well mixed
Add in @cake flour{175%grams}, @all-purpose flour{100%grams}, and @walnuts[chopped (optional)]{1/3%cup}, then stir until smooth
Spoon into a lightly greased loaf pan, smooth out the top, and rest for 10 minutes
Bake for 45 minutes, then cover with foil and bake for an additional 25 minutes
Allow to cool for 10 minutes in the loaf pan, then move to a cooling rack`,

    'cayenne-curry-mixed-nuts':
`>Cayenne & Curry Mixed Nuts
Preheat oven to 325F
Combine @ground cumin{1%tsp}, @paprika{1%tsp}, @habanero salt{1%tsp}, @ground cayenne pepper{1%tsp}, @red curry powder{1/2%tsp}, @garlic powder{1/2%tsp}, @ground ginger{1/2%tsp}, @ground cinnamon{1/2%tsp}, @ground cardamom{1/2%tsp}, and @turmeric{1/4%tsp}
Add @olive oil{1/4%cup} and stir until well combined
Add @mixed nuts{4%cups} and toss/stir until evenly coated
++Preferred nuts of choice are cashews and walnuts
Spread the nuts on lined baking sheets and bake for 13-15 minutes
Allow the nuts to cool for an hour before storing in an airtight container`,

    'ciabatta':
`sections=ingredients
>Ciabatta
#Preferment
Mix together @bread flour{300%grams}, @water{250%grams}, and @instant yeast{1/8%tsp} for the preferment until the flour is hydrated, then cover and rest for 12-16 hours
#Dough
Mix together the preferment with @bread flour{200%grams}, @water[lukewarm]{150%grams}, @instant yeast{1%tsp}, and @salt{2%tsp} until a shaggy mess
Turn the dough out onto a clean surface then stretch and fold until gluten is well developed
Form the dough into a ball, place in a bowl, then cover and rest for an hour
Turn the dough out onto a lightly floured surface and fold the dough, the cover and rest for an hour
Repeat the previous step once more
Divide the dough equally into as many pieces as desired (between 2 and 6 are recommended), gently shape into rectangles, then cover and rest for 45 minutes
+As the resting period begins, preheat oven to 475F with a baking stone inside the oven
Transfer the dough to parchment paper dusted with semolina or cornmeal, and transfer to the baking stone in the oven
+For best results, immediately spray the dough inside the oven with a fine mist of water and quickly shut the oven door
Bake until the loaves are puffy and golden brown, approximately 15-30 minutes depending on the size of the loaves, then transfer to cooling racks`,

    'french-toast':
`sections=ingredients
>French Toast
#Roux
Boil one part @water{75%grams} and one part @milk{75%grams} and pour over @all-purpose flour{50%grams} to make a roux, then allow to cool to room temperature
#Dough
Mix together the roux with @all-purpose flour{250%grams}, @semolina flour{200%grams}, @dry milk powder{25%grams}, @granulated sugar{35%grams}, @instant yeast{2%tsp}, @salt{1 1/2%tsp}, @water{150%grams}, @honey[warmed]{1%tbs}, @egg{1%}, and @egg yolks{2%} in a stand mixer until flour is hydrated
Add @unsalted butter[softened]{4%tbs} in stages and mix with a dough hook until the dough starts to release from the walls of the mixer
Shape the dough into a ball, then cover and rest until doubled
Separate the dough into 3 equal pieces, then roll each piece and braid the dough
Place the dough in a greased loaf pan, then cover and rest for 90 minutes
+Preheat oven to 350F after one hour
#Wash
Mix together @egg whites{2%} and @milk{1%tbs} and apply to the top of the loaf, then bake for 35 minutes, transferring to a cooling rack when done
#Bath
When ready to cook, slice the bread into thick slices
Mix together @half and half{2%cups}, @eggs{6%}, @honey[warmed]{4%tbs}, and @salt{1/2%tsp} with a whisk and put in a wide bowl or container
For each slice of bread, soak both sides for approximately 2 minutes each, then immediately transfer to a hot griddle and cook to desired finish`,

    'gochujang-snickerdoodles':
`>Gochujang Snickerdoodles
Mix together @unsalted butter[softened]{1%!tbs}, @dark brown sugar{1%tbs}, @gochujang{1 1/2%tbs}, and @honey{3/4%tsp}, then set aside
Mix together @unsalted butter[softened]{7%!tbs}, @light brown sugar{1 1/2%tsp}, @granulated sugar{200%grams}, @salt{1/2%tsp}, @ground cinnamon{1/4%tsp}, @vanilla extract{1%tsp}, @egg{1%}, and @egg yolk{1%}.
Add in @all-purpose flour{220%grams} and @baking powder{1/2%tsp}, then mix until well combined
Microwave the gochujang mixture for a few seconds, then swirl it into the dough
Place the dough into the refrigerator and preheat oven to 350F
Once preheated, use a medium scoop to place the dough onto lined baking sheets
Bake the cookies for approximately 11 minutes, then move to cooling racks`,

    'naan':
`sections=directions
>Naan
Whisk together the @all purpose flour{350%grams}, @bread flour{150%grams}, @baking powder{3/4%tsp}, @salt{1%tsp}, and @instant yeast{1%tsp}
Mix in the @granulated sugar{2%tsp}, @water[lukewarm]{250%grams}, and @plain yogurt{75%grams}
Once combined, add in the @olive oil{2%tbs}, then knead the dough until smooth
Shape into a ball and place in a lightly greased bowl, then cover and allow to rest for 1 hour
Divide the dough into 8 equal pieces, shape each into balls, and place on a lightly floured surface
Lightly flour the top of the dough, then cover and allow to rest for 30 minutes
+After 20 minutes, preheat a cast iron skillet on high
One at a time, flatten the dough to approximately 3mm thick and cook in the skillet
+Cooking time is around 1 minute for each side; monitor the color of the bottom to determine when to flip`,

    'pumpernickel-sandwich-bread':
`>Pumpernickel Sandwich Bread
Mix together @water[lukewarm]{275%grams}, @milk{75%grams}, @blackstrap molasses{65%grams}, and @dark brown sugar{1 1/2%tbs}, then set aside
Whisk together @bread flour{300%grams}, @rye flour{200%grams}, @vital wheat gluten{1 1/2%tsp}, @instant yeast{1 1/2%tsp}, @salt{2%tsp}, @dark cocoa powder{2%tbs}, @ground caraway{1 1/2%tsp}, and @caraway seed{3/4%tsp}
Combine the wet and dry ingredients, then use a stand mixer with a dough hook until well integrated
Add @unsalted butter[softened]{2%tbs} and continue in the stand mixer until it stops sticking to the walls
Shape the dough into a ball, gently flour the dough, then cover and rest until doubled (approximately 2 hours)
Turn the dough onto a clean surface and shape the dough, place it in a lightly greased bread pan, then cover and rest until doubled (approximately 90 minutes)
+After one hour, preheat oven to 375F
Bake for 20 minutes, then cover with foil and bake for an additional 30 minutes
Move to a cooling rack and allow to cool completely before slicing`,

    'three-cheese-bread':
`>Three Cheese Bread
Whisk together @bread flour{375%grams}, @semolina flour{125%grams}, @instant yeast{2%tsp}, and @salt{1%tsp}
Mix in @water[lukewarm]{250%grams} and @milk{100%grams} until well integrated
Add in @provolone cheese[grated]{100%grams} and knead until smooth
Shape into a ball and place in a bowl, then cover and allow to rest until doubled (approximately 90 minutes)
Deflate the dough and fold in @white cheddar cheese[shredded]{125%grams}, then place in a banneton dusted with flour and cover and rest for an hour
+Place a Dutch oven inside the oven and preheat at 475F
Move the dough to the Dutch oven using parchment paper, then score the bread and sprinkle on @asiago cheese[thinly shredded]{25%grams}
Bake for 20 minutes with the lid on
Reduce the oven to 425F and bake uncovered for 10 minutes, then replace the lid and bake for an additional 10 minutes
Move to a cooling rack and allow to cool completely before slicing`,

    'wheat-sandwich-bread':
`sections=ingredients
>Wheat Sandwich Bread
#Preferment
Mix together @bread flour{200%grams}, @water{125%grams}, and @instant yeast{1/8%tsp} for the preferment until the flour is hydrated, then cover and rest for 6-10 hours
#Roux
Boil @water{125%grams} and pour over @bread flour{75%grams} to make a roux, then allow to cool to room temperature and refrigerate for 6-10 hours
#Dough
Remove the roux from the refrigerator and allow to come to room temperature
Combine the preferment, roux, and @milk{125%grams} in a stand mixer and mix until loosened up
Whisk together @white whole wheat flour{225%grams}, @granulated sugar{30%grams}, @dry malt powder{1/2%tsp}, @instant yeast{2%tsp}, and @salt{1 1/2%tsp}, then add to the stand mixer and mix until well integrated
Add @unsalted butter[softened]{2%tbs} and knead until smooth
Shape the dough into a ball and place in a lightly greased bowl, then cover and rest for 30 minutes
Gently deflate the dough before folding, then cover and rest for 30 minutes
Turn the dough onto a clean surface and shape the dough, place it in a lightly greased bread pan, then cover and rest for 30 minutes
+Preheat oven to 220F while the dough rests
Place the pan in the oven and immediately turn the oven up to 400F
Bake for 20 minutes, then cover with foil and bake for an additional 25 minutes
Move to a cooling rack and allow to cool completely before slicing`
};

const addIngredientSection = (section, items) => {
    const div = document.createElement('div');
    div.classList.add('is-size-6');
    div.classList.add('has-text-weight-semibold');
    div.textContent = section;
    document.querySelector('#ingredients').appendChild(div);
    const ul = document.createElement('ul');
    items.forEach(item => ul.appendChild(item));
    document.querySelector('#ingredients').appendChild(ul);
}

const addDirectionSection = (section, items, start) => {
    const div = document.createElement('div');
    div.classList.add('is-size-6');
    div.classList.add('has-text-weight-semibold');
    div.textContent = section;
    document.querySelector('#directions').appendChild(div);
    const ol = document.createElement('ol');
    ol.start = start.toString();
    items.forEach(item => ol.appendChild(item));
    document.querySelector('#directions').appendChild(ol);
}

const changeRecipe = value => {
    window.localStorage.setItem('lastOption', value);
    const recipe = new Recipe(recipes[value]).value();
    document.querySelector('#title').innerHTML = recipe.title;
    document.querySelector('#ingredients').innerHTML = '';
    document.querySelector('#directions').innerHTML = '';
    if (recipe.meta.hasOwnProperty('sections') && ['both', 'ingredients'].includes(recipe.meta.sections)) {
        let currentSection = '';
        let items = [];
        for (let i = 0; i < recipe.ingredients.length; i++) {
            const ingredient = recipe.ingredients[i];
            if (ingredient.section !== currentSection) {
                if (items.length > 0) {
                    addIngredientSection(currentSection, items);
                    items = [];
                }
                currentSection = ingredient.section;
            }
            const li = document.createElement('li');
            li.textContent = `${ingredient.amount} ${ingredient.name}`;
            items.push(li);
            if (i === recipe.ingredients.length - 1) addIngredientSection(currentSection, items);
        }
    } else {
        const ul = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = `${ingredient.amount} ${ingredient.name}`;
            ul.appendChild(li);
        });
        document.querySelector('#ingredients').appendChild(ul);
    }
    if (recipe.meta.hasOwnProperty('sections') && ['both', 'directions'].includes(recipe.meta.sections)) {
        let currentSection = '';
        let items = [];
        for (let i = 0; i < recipe.directions.length; i++) {
            const direction = recipe.directions[i];
            if (direction.section !== currentSection) {
                if (items.length > 0) {
                    addDirectionSection(currentSection, items, i - items.length + 1);
                    items = [];
                }
                currentSection = direction.section;
            }
            const li = document.createElement('li');
            li.textContent = direction.text;
            if (direction.hasOwnProperty('note')) {
                const ul = document.createElement('ul');
                const li2 = document.createElement('li');
                li2.textContent = direction.note;
                ul.appendChild(li2);
                li.appendChild(ul);
            }
            items.push(li);
            if (i === recipe.directions.length - 1) addDirectionSection(currentSection, items, i - items.length + 2);
        }
    } else {
        const ol = document.createElement('ol');
        recipe.directions.forEach(direction => {
            const li = document.createElement('li');
            li.textContent = direction.text;
            if (direction.hasOwnProperty('note')) {
                const ul = document.createElement('ul');
                const li2 = document.createElement('li');
                li2.textContent = direction.note;
                ul.appendChild(li2);
                li.appendChild(ul);
            }
            ol.appendChild(li);
        });
        document.querySelector('#directions').appendChild(ol);
    }
    if (recipe.notes.length > 0) {
        const div = document.createElement('div');
        div.classList.add('is-size-5');
        div.textContent = 'Notes';
        document.querySelector('#directions').appendChild(div);
        const ul = document.createElement('ul');
        recipe.notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            ul.appendChild(li);
        });
        document.querySelector('#directions').appendChild(ul);
    }
};

document.querySelector('#recipe-select').addEventListener('change', event => changeRecipe(event.target.value));

document.addEventListener("DOMContentLoaded", () => {
    const savedOption = window.localStorage.getItem('lastOption');
    const options = [...document.querySelectorAll('option')];
    const index = typeof savedOption === 'string' ? options.findIndex(opt => opt.value === savedOption) : Math.floor(Math.random() * Math.floor(options.length));
    options[index].selected = 'selected';
    changeRecipe(document.querySelector('#recipe-select').value)
});