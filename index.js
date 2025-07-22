document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    const activeImages = [
        "./image/lamp-active-main.png",
        "./image/armchair-active-main..png",
        "./image/table-active-main..png"
    ];

    const collapsedImages = [
        "./image/lamp-main.png",
        "./image/armchair-main.png",
        "./image/table-main.png"
    ];

    const titles = ["СВЕТИЛЬНИК", "КРЕСЛО", "СТОЛ"];
    const brands = ["BENJAMIN MOORE", "PAINT HERE GLORY", "BENJAMIN MOORE"];

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            cards.forEach((c, i) => {
                const img = c.querySelector('img');

                if (i === index) {
                    c.classList.add('expanded');
                    c.classList.remove('collapsed');
                    if (img) img.src = activeImages[i];

                    const placeholder = c.querySelector('.card-placeholder');
                    if (placeholder) placeholder.remove();


                    if (!c.querySelector('.main-text')) {
                        const highlight = document.createElement("div");
                        highlight.className = "highlight-text";
                        highlight.textContent = brands[i];
                        c.appendChild(highlight);

                        const tag = document.createElement("div");
                        tag.className = "tag-line";
                        tag.textContent = "ТОВАР ДНЯ";
                        c.appendChild(tag);

                        const text = document.createElement("div");
                        text.className = "main-text";
                        text.innerHTML = `
            <h2>${titles[i]}</h2>
            <p class="main-info-text">Функциональная дизайнерская лампа для создания максимально комфортного освещения</p>
            <div class="liner"></div>
            <p class="price">150 000 <span class="roubles">₽</span></p>
        `;
                        c.appendChild(text);
                    }


                    if (!c.querySelector('.outer-ellipse')) {
                        const outerEllipse = document.createElement("div");
                        outerEllipse.className = "outer-ellipse";
                        c.appendChild(outerEllipse);
                    }


                    if (!c.querySelector('.action-button-main')) {
                        const button = document.createElement("button");
                        button.className = "action-button-main";

                        button.innerHTML = `
            <div class="by-action-main">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.52295 19C9.48945 19 10.2729 19.7835 10.2729 20.75C10.2729 21.7165 9.48945 22.5 8.52295 22.5C7.55645 22.5 6.77295 21.7165 6.77295 20.75C6.77295 19.7835 7.55645 19 8.52295 19ZM16.5229 19C17.4894 19 18.2729 19.7835 18.2729 20.75C18.2729 21.7165 17.4894 22.5 16.5229 22.5C15.5565 22.5 14.7729 21.7165 14.7729 20.75C14.7729 19.7835 15.5565 19 16.5229 19ZM20.7827 8.75C21.2526 8.75 21.6125 9.13977 21.5728 9.59961L21.2427 14.2695C21.1327 15.7695 19.813 17 18.313 17H7.19287C5.48297 16.9999 4.14278 15.54 4.28271 13.8301L4.64307 9.48047C4.68306 9.07051 5.02293 8.75007 5.44287 8.75H20.7827ZM4.01318 1.25C4.7331 1.25007 5.43316 1.5599 5.93311 2.08984C6.24304 2.43977 6.44246 2.85991 6.54248 3.2998H18.8325C20.6024 3.2998 21.9526 4.73987 21.8228 6.50977C21.7928 6.92977 21.4429 7.25 21.0229 7.25H5.71338C5.24338 7.25 4.8726 6.85965 4.9126 6.38965L5.11279 3.94043C5.13279 3.63043 5.03275 3.32961 4.82275 3.09961C4.61283 2.87985 4.32295 2.75007 4.01318 2.75H2.27295C1.86295 2.75 1.52295 2.41 1.52295 2C1.52295 1.59 1.86295 1.25 2.27295 1.25H4.01318Z"
                        fill="#D9FF5A"/>
                </svg>
                Купить
            </div>
        `;
                        c.appendChild(button);
                    }

                } else {

                    c.classList.remove('expanded');
                    c.classList.add('collapsed');
                    if (img) img.src = collapsedImages[i];


                    c.querySelectorAll('.highlight-text, .main-text, .tag-line, .outer-ellipse, .action-button-main').forEach(el => el.remove());


                    if (!c.querySelector('.card-placeholder')) {
                        const ph = document.createElement("div");
                        ph.className = "card-placeholder";
                        ph.innerHTML = `
            <div class="label">СЛАЙД</div>
            <div class="number">0${i + 1}</div>
        `;
                        c.appendChild(ph);
                    }
                }
            });
        });
    });
});


document.querySelectorAll('.pink-strip, .blue-strip').forEach(strip => {
    const content = strip.innerHTML;
    for (let i = 0; i < 20; i++) {
        strip.innerHTML += content;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const categoryData = {
        mirror: [
            {img: "./image/mirror-1.png", title: "Kristin", desc: "Зеркало напольное"},
            {img: "./image/mirrir-2.png", title: "Arlene", desc: "Зеркало напольное"},
            {img: "./image/mirror-3.png", title: "Colleen", desc: "Зеркало напольное"},
            {img: "./image/mirror-4.png", title: "coppelia", desc: "Зеркало напольное"},
            {img: "./image/mirror-5.png", title: "artemide", desc: "Зеркало напольное"},
        ],
        lamp: [
            {img: "./image/lamp-1.png", title: "Aubrey", desc: "Лампа настольная"},
            {img: "./image/lamp-2.png", title: "Leslie", desc: "Лампа настольная"},
            {img: "./image/lamp-3.png", title: "Darrell", desc: "Лампа настольная"},
            {img: "./image/lamp-4.png", title: "coppelia", desc: "Лампа настольная"},
            {img: "./image/lamp-5.png", title: "artemide", desc: "Лампа настольная"},
        ],
        armchair: [
            {img: "./image/armchair-1.png", title: "Kathryn", desc: "Зеркало напольное"},
            {img: "./image/armchair-2.png", title: "Wendy", desc: "Зеркало напольное"},
            {img: "./image/armchair-3.png", title: "Judith", desc: "Зеркало напольное"},
            {img: "./image/armchair-4.png", title: "Jane", desc: "Зеркало напольное"},
            {img: "./image/armchair-5.png", title: "Darlene", desc: "Зеркало напольное"},
        ],
        table: [
            {img: "./image/table-1.png", title: "Kathryn", desc: "Зеркало напольное"},
            {img: "./image/table-2.png", title: "Wendy", desc: "Зеркало напольное"},
            {img: "./image/table-3.png", title: "Judith", desc: "Зеркало напольное"},
            {img: "./image/table-4.png", title: "Jane", desc: "Зеркало напольное"},
            {img: "./image/table-5.png", title: "Darlene", desc: "Зеркало напольное"},
        ],
    };

    const secondPageData = {
        mirror: [
            {img: "./image/mirror-6.png", title: "Kristin", desc: "Зеркало напольное"},
            {img: "./image/mirror-7.png", title: "Arlene", desc: "Зеркало напольное"},
            {img: "./image/mirror-8.png", title: "Colleen", desc: "Зеркало напольное"},
            {img: "./image/mirror-9.png", title: "coppelia", desc: "Зеркало напольное"},
            {img: "./image/mirror-10.png", title: "artemide", desc: "Зеркало напольное"},
        ],
        lamp: [
            {img: "./image/lamp-6.png", title: "Aubrey", desc: "Лампа настольная"},
            {img: "./image/lamp-7.png", title: "Leslie", desc: "Лампа настольная"},
            {img: "./image/lamp-8.png", title: "Darrell", desc: "Лампа настольная"},
            {img: "./image/lamp-9.png", title: "coppelia", desc: "Лампа настольная"},
            {img: "./image/lamp-10.png", title: "artemide", desc: "Лампа настольная"},
        ],
        armchair: [
            {img: "./image/armchair-6.png", title: "Kathryn", desc: "Зеркало напольное"},
            {img: "./image/armchair-7.png", title: "Wendy", desc: "Зеркало напольное"},
            {img: "./image/armchair-8.png", title: "Judith", desc: "Зеркало напольное"},
            {img: "./image/armchair-9.png", title: "Jane", desc: "Зеркало напольное"},
            {img: "./image/armchair-10.png", title: "Darlene", desc: "Зеркало напольное"},
        ],
        table: [
            {img: "./image/table-6.png", title: "Kathryn", desc: "Зеркало напольное"},
            {img: "./image/table-7.png", title: "Wendy", desc: "Зеркало напольное"},
            {img: "./image/table-8.png", title: "Judith", desc: "Зеркало напольное"},
            {img: "./image/table-9.png", title: "Jane", desc: "Зеркало напольное"},
            {img: "./image/table-10.png", title: "Darlene", desc: "Зеркало напольное"},
        ],
    };

    const goodsContainer = document.querySelector(".goods");
    const goodsHidden = document.querySelector(".goods-hidden");
    const button = document.querySelector(".action-button");
    const categoryBlocks = document.querySelectorAll(".subtract");
    const categoryKeys = ["mirror", "lamp", "armchair", "table"];
    const itemsCategory = document.querySelector(".items-category");

    let currentCategory = null;

    categoryBlocks.forEach((block, index) => {
        const ellipse = block.querySelector(".bottom-el");
        const inner = ellipse.querySelector(".inner-bottom-ellipse, .inner-bottom-active");

        ellipse.addEventListener("click", () => {

            if (currentCategory === categoryKeys[index]) {

                document.querySelectorAll(".bottom-el").forEach(e => e.classList.remove("ellipse-active"));
                document.querySelectorAll(".inner-bottom-ellipse, .inner-bottom-active").forEach(el => {
                    el.classList.remove("inner-bottom-active");
                    el.classList.add("inner-bottom-ellipse");
                    const img = el.querySelector("img");
                    if (img) img.src = "./image/array.svg";
                });

                currentCategory = null;


                itemsCategory.classList.remove("active");


                goodsContainer.innerHTML = "";
                goodsHidden.innerHTML = "";
                goodsHidden.style.display = "none";
                button.style.display = "none";

                return;
            }


            document.querySelectorAll(".bottom-el").forEach(e => e.classList.remove("ellipse-active"));
            document.querySelectorAll(".inner-bottom-ellipse, .inner-bottom-active").forEach(el => {
                el.classList.remove("inner-bottom-active");
                el.classList.add("inner-bottom-ellipse");
                const img = el.querySelector("img");
                if (img) img.src = "./image/array.svg";
            });

            ellipse.classList.add("ellipse-active");
            inner.classList.remove("inner-bottom-ellipse");
            inner.classList.add("inner-bottom-active");
            const img = inner.querySelector("img");
            if (img) img.src = "./image/array-active.svg";

            const category = categoryKeys[index];
            currentCategory = category;

            if (category && categoryData[category]) {
                renderGoods(goodsContainer, categoryData[category]);
                goodsHidden.innerHTML = "";
                goodsHidden.style.display = "none";
                button.style.display = "flex";


                itemsCategory.classList.add("active");
            }
        });
    });

    function renderGoods(container, data) {
        container.innerHTML = "";
        data.forEach(item => {
            const good = document.createElement("div");
            good.classList.add("good");
            good.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="info-text-goods">
                <h2>${item.title}</h2>
                <p class="info-text-good">${item.desc}</p>
                <div class="linear-good"></div>
                <div class="price-action">
                    <p class="price">150 000 <span class="roubles">₽</span></p>
                    <div class="by-action">
                        <img src="./image/shopping-cart.svg" alt="cart">Купить
                    </div>
                </div>
            </div>
        `;
            container.appendChild(good);
        });
    }

    button.addEventListener("click", () => {
        const secondSet = secondPageData[currentCategory];
        if (secondSet && secondSet.length > 0) {
            renderGoods(goodsHidden, secondSet);
            goodsHidden.style.display = "flex";
            button.style.display = "none";
        }
    });

    currentCategory = null;
    goodsContainer.innerHTML = "";
    goodsHidden.innerHTML = "";
    goodsHidden.style.display = "none";
    button.style.display = "none";
    itemsCategory.classList.remove("active");
});




