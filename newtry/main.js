import data from "./pokedex (1).json" assert {type:"json"};
let i= 0;

//Make 1 child
function make1Child(i) {
    let child = data[i]
    let newChildDiv = document.createElement('div');
    newChildDiv.className = 'childDiv';
    newChildDiv.id = `${child.id}`;
    newChildDiv.addEventListener('click', modalByClick);
    let childImg = document.createElement('img');
    let childNumberPlace = document.createElement('div');
    let childNamePlace = document.createElement('div');
    childImg.className = 'childImgPlace';
    childNumberPlace.className = 'childNumberPlace';
    childNamePlace.className = 'childNamePlace';
    let childImglink = child.image.thumbnail;
    childImg.setAttribute('src', childImglink);
    let childName = child.name.english;
    let str = "" + child.id;
    let pad = "#000"
    let ans = pad.substring(0, pad.length - str.length) + str
    let childNumber = document.createTextNode(ans);
    childNamePlace.innerHTML = childName;
    childNumberPlace.appendChild(childNumber)
    newChildDiv.appendChild(childImg);
    newChildDiv.appendChild(childNamePlace);
    newChildDiv.appendChild(childNumberPlace);
    let big12Parent = document.getElementById('big12Parent');
    big12Parent.appendChild(newChildDiv);
}

//Make 12 child
function make12Child(startIndex) {
    for(let i =startIndex; i<startIndex+12; i++) {
        make1Child(i);
    }
}
make12Child(i)

//Load 12 more
let loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    i+=12;
    make12Child(i);
})


function MakeAModal(x) {
    let currentModal = document.getElementById('modalParent');
    if(currentModal){
        currentModal.remove();
    }
    let child = data[x];
    let modalParent = document.createElement('div');
    modalParent.addEventListener('click', closeTheModal);
    let closeBtn = document.createElement('btn');
    closeBtn.addEventListener('click', closeTheModal);
    closeBtn.innerHTML = '<--- Home page'
    let modalBody = document.createElement('div');
    let modalLeftSide = document.createElement('div');
    let modalTypes = document.createElement('div');
    //loop for child types
    let allTypesInJs = [];
for(let i =0;i<data.length;i++) {
    let child = data[i];
    for(let j=0;j<child.type.length;j++) {
        let type = child.type[j];
        if(!allTypesInJs.includes(type)) {
            allTypesInJs.push(type); 
        }  
    }
}
/// makes the types array to object
let colorMap = Object.assign({},allTypesInJs);
colorMap['Grass'] = '#99ff99';
colorMap['Poison'] = '#d580ff';
colorMap['Fire'] = '#ff6666';
colorMap['Water'] = '#33ccff';
colorMap['Bug'] = '#cccc00';
colorMap['Normal'] = '#f2d9d9';
colorMap['Electric'] = '#ffff33';
colorMap['Ground'] = '#b38600';
colorMap['Fairy'] = '#ff99ff';
colorMap['Fighting'] = '#8a8a5c';
colorMap['Psychic'] = '#cc0099';
colorMap['Rock'] = '#8c8cd9';
colorMap['Steel'] = '#c2c2d6';
colorMap['Ice'] = '#66ffff';
colorMap['Ghost'] = '#66ffff';
colorMap['Dragon'] = '#ff9900';
colorMap['Dark'] = '#009933';
colorMap['Flying'] = '#33cccc';
    let childTypes = child.type
    childTypes.forEach(type => {
        let newType = document.createElement('div');
        newType.className = 'newType';
        newType.style.backgroundColor = colorMap[type];
        let typeTextNode = document.createTextNode(type);
        newType.appendChild(typeTextNode);
        modalTypes.appendChild(newType);
    });
    let modalRightSide = document.createElement('div');
    let modalLinkToFav = document.createElement('a');
    modalLinkToFav.href = 'favorites.html';
    modalLinkToFav.target = "_blank";
    let modalLikeImg = document.createElement('img');
    modalLikeImg.src = '/assets/Vector (2).png';
    modalLikeImg.id = 'modalLikeImg';
    modalLinkToFav.appendChild(modalLikeImg);
    let modalDesc = document.createElement('div');
    let modalDescHeader = document.createElement('h1');
    let modalDescInfo = document.createElement('div');
    let modalStats = document.createElement('div');
    let modalStatsHeader = document.createElement('h1');
    let modalStatsList = document.createElement('ul');
     modalParent.id = ('modalParent');
     closeBtn.id = ('closeBtn');
     modalBody.id = ('modalBody');
     modalLeftSide.id = ('modalLeftSide');
     modalTypes.id = ('modalTypes');
     modalRightSide.id = ('modalRightSide');
     modalLinkToFav.id = ('modalLinkToFav');
     modalDesc.id = ('modalDesc');
     modalDescHeader.id = ('modalDescHeader');
     modalDescHeader.innerHTML = 'Description'
     modalDescInfo.id = ('modalDescInfo'); 
     modalDescInfo.innerHTML = child.description; 
     modalStats.id = ('modalStats');
     modalStatsHeader.id = ('modalStatsHeader');
     modalStatsHeader.innerHTML = 'Stats'
     modalStatsList.id = ('modalStatsList');
     function make1Child(x) {
        let newChildDiv = document.createElement('div');
        newChildDiv.className = 'modalChildDiv';
        newChildDiv.id = `${child.id}`;
        newChildDiv.addEventListener('click', modalByClick);
        let childImg = document.createElement('img');
        let childNumberPlace = document.createElement('div');
        let childNamePlace = document.createElement('div');
        childImg.className = 'childImgPlace';
        childNumberPlace.className = 'modalchildNumberPlace';
        childNamePlace.className = 'childNamePlace';
        let childImglink = child.image.thumbnail;
        childImg.setAttribute('src', childImglink);
        let childName = child.name.english;
        let str = "" + child.id;
        let pad = "#000"
        let ans = pad.substring(0, pad.length - str.length) + str
        let childNumber = document.createTextNode(ans);
        childNamePlace.innerHTML = childName;
        childNumberPlace.appendChild(childNumber)
        newChildDiv.appendChild(childImg);
        newChildDiv.appendChild(childNamePlace);
        newChildDiv.appendChild(childNumberPlace);
        modalLeftSide.appendChild(newChildDiv);
     }
     make1Child(x);
     modalParent.appendChild(modalBody);
     modalParent.appendChild(closeBtn);
     modalBody.appendChild(modalLeftSide);
     modalBody.appendChild(modalRightSide);
     modalLeftSide.appendChild(modalTypes);
    modalRightSide.appendChild(modalLinkToFav);
    modalRightSide.appendChild(modalDesc);
    modalRightSide.appendChild(modalStats);
    modalDesc.appendChild(modalDescHeader);
    modalDesc.appendChild(modalDescInfo);
    // loop for stats base info
    let childBase = child.base
    for(let key in childBase) {
        let newLi = document.createElement('li');
        newLi.className = 'newLi';
        let newTextNode = document.createTextNode(key+':'+childBase[key]);
        newLi.appendChild(newTextNode);
        modalStatsList.appendChild(newLi);
    }
    let total = 0;
    for(let key in childBase) {
        total+= childBase[key];
    }
    let totalTextNode = document.createTextNode(`Total:${total}`);
    let newLi = document.createElement('li');
    newLi.className = 'newLi';
    newLi.appendChild(totalTextNode);
    modalStatsList.appendChild(newLi);
    modalStats.appendChild(modalStatsHeader);
    modalStats.appendChild(modalStatsList);
    let body = document.getElementById('body');
    body.appendChild(modalParent);
}




//open modal by click
function modalByClick () {
    let childId = this.id;
    let x = childId-1;
     console.log(childId);
     MakeAModal(x);
     let modalChild = data[x];
     console.log (modalChild);
     let modalParent = document.getElementById('modalParent');
     modalParent.style.display = 'block';
 }

// close modal Btn 
function closeTheModal() {
    let modalParent = document.getElementById('modalParent');
    // let currentModalChild = modalParent.lastChild;
    // modalParent.removeChild(currentModalChild);
    modalParent.style.display = 'none';
}

// 