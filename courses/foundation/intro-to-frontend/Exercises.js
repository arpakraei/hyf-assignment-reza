//Favourite dishes
const favoriteDishes = [
    'Egg',
    'Pizza',
    'Orange Juice'
];
//Podcast

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

function main() {
    //Favourite dishes
    const ul = $('favoriteDishes');
    for (const dish of favoriteDishes) {
        const li = $$('li');
        li.textContent = dish;
        ul.appendChild(li);
    }
    //Podcast
    const ul_podcast=$$('ul');
    const body=document.querySelector('body');
    body.appendChild(ul_podcast);
    for (const podcast of podcasts)
    {
        const li_podcast=$$('li');
        ul_podcast.appendChild(li_podcast);
        const h1=$$('h1');
        h1.innerHTML=podcast.name;
        li_podcast.appendChild(h1);
        if (podcast.imageUrl){
            const img=$$('img');
            img.src=podcast.imageUrl;
            li_podcast.appendChild(img);
        }
        
    }
    //image inserter
    appendImageToElement("https://picsum.photos/536/354",
    document.querySelector("body"));

}

function $(id) {
    return document.getElementById(id);
}
function $$(elementName){
    return document.createElement(elementName);
}

//Image inserter
function appendImageToElement(imageUrl,elementToAppend)
{

    const img=$$('img');
    img.src=imageUrl;
    elementToAppend.appendChild(img);
};

function changeButtonText(){
    
}

document.addEventListener('DOMContentLoaded', main);

