const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const sideMenu = document.getElementById('sideMenu'); 
const closeButtonWrapper = document.querySelector('.close-button-wrapper'); 

// Hamburger ikonuna tıklandığında menüyü aç
hamburgerWrapper.addEventListener('click', () => {
    console.log('Yuvarlak hamburger menü tıklandı!');
    sideMenu.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
});

// Kapatma butonuna tıklandığında menüyü kapat
closeButtonWrapper.addEventListener('click', () => {
    console.log('Kapatma butonu tıklandı!');
    sideMenu.classList.remove('active'); 
    document.body.style.overflow = ''; 
});

// Menüdeki bir linke tıklandığında menüyü kapat
sideMenu.querySelectorAll('ul li a').forEach(item => {
    item.addEventListener('click', () => {
        sideMenu.classList.remove('active'); 
        document.body.style.overflow = ''; 
    });
});

const cardData = [
    {
        imageName: "pink.png",
        altText: "Resim 1 Açıklaması",
        ikonName: "vector1.svg",
        name: "SACRÉ ARMAND",
        details: ["Copywriting", "Stratégie éditoriale", "Brand content"]
    },
    {
        imageName: "blue.png",
        altText: "Resim 2 Açıklaması",
        ikonName: "vector2.svg",
        name: "SMOTEO",
        details: ["Stratégie de marque", "Copywriting", "Design"]
    },
    {
        imageName: "girl.png",
        altText: "Resim 3 Açıklaması",
        ikonName: "vector3.svg",
        name: "NIIR",
        details: ["Communication", "Stratégie de marque", "Stratégie éditoriale"]
    },
    {
        imageName: "phone.png",
        altText: "Resim 4 Açıklaması",
        ikonName: "vector4.png",
        name: "YOKITUP",
        details: ["Stratégie éditoriale", "Stratégie de marque", "Design","Copywriting","Brand content"]
    }
];

const cardContainer = document.querySelector(".card-container");

cardData.forEach(cardInfo => {
    // Ana kart div'i
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Resim div'i
    const cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add("card-image");

    // Resim elementi ve src özelliği 
    const imgElement = document.createElement("img");
    imgElement.src = `assest/img/${cardInfo.imageName}`;
    imgElement.alt = cardInfo.altText;

    // Kart bilgi div'i
    const cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");

    // Kart başlık div'i
    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("card-title");

    const ikonElement = document.createElement("img");
    ikonElement.classList.add("card-icon");
    ikonElement.src = `assest/img/${cardInfo.ikonName}`;
    ikonElement.alt = "İkon";

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("card-name");
    nameSpan.textContent = cardInfo.name;

    cardTitleDiv.appendChild(ikonElement);
    cardTitleDiv.appendChild(nameSpan);

    
    const cardDetailsDiv = document.createElement("div");
    cardDetailsDiv.classList.add("card-details");

    cardInfo.details.forEach(detailText => {
        const detailSpan = document.createElement("span");
        detailSpan.classList.add("detail-box");
        detailSpan.textContent = detailText;
        cardDetailsDiv.appendChild(detailSpan);
    });

    // Elementleri birleştir
    cardImageDiv.appendChild(imgElement);
    cardInfoDiv.appendChild(cardTitleDiv);
    cardInfoDiv.appendChild(cardDetailsDiv);
    cardDiv.appendChild(cardImageDiv);
    cardDiv.appendChild(cardInfoDiv);

    // Kartı container'a ekle
    cardContainer.appendChild(cardDiv);
});


 document.getElementById("mayaAngelouButton").addEventListener("click", function () {
        window.open("https://tr.wikipedia.org/wiki/Maya_Angelou", "_blank");
    });