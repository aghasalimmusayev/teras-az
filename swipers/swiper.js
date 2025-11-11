let swiperInstances = {
    vip: null,
    premium: null,
    son: null,
    yasayis: null,
    agentlik: null
};

const commonBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 8, grid: { rows: 1 } },
    375: { slidesPerView: 2, spaceBetween: 8, grid: { rows: 1 } },
    480: { slidesPerView: 2, spaceBetween: 8, grid: { rows: 1 } },
    860: { slidesPerView: 3, spaceBetween: 15, grid: { rows: 2 } },
    992: { slidesPerView: 3, spaceBetween: 15, grid: { rows: 2 } },
    1200: { slidesPerView: 4, spaceBetween: 20, grid: { rows: 2 } },
};

export function initVipSwiper() {
    if (swiperInstances.vip) {
        swiperInstances.vip.destroy(true, true);
    }
    swiperInstances.vip = new Swiper(".mySwiper1", {
        slidesPerView: 4,
        grid: { rows: 2 },
        spaceBetween: 22,
        navigation: {
            nextEl: ".mySwiper1_next",
            prevEl: ".mySwiper1_prev",
        },
        breakpoints: commonBreakpoints
    });
    return swiperInstances.vip;
}

export function initPremiumSwiper() {
    if (swiperInstances.premium) {
        swiperInstances.premium.destroy(true, true);
    }
    swiperInstances.premium = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        grid: { rows: 2 },
        spaceBetween: 22,
        navigation: {
            nextEl: ".mySwiper2_next",
            prevEl: ".mySwiper2_prev",
        },
        breakpoints: commonBreakpoints
    });
    return swiperInstances.premium;
}

export function initSonSwiper() {
    if (swiperInstances.son) {
        swiperInstances.son.destroy(true, true);
    }
    swiperInstances.son = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        grid: { rows: 2 },
        spaceBetween: 22,
        navigation: {
            nextEl: ".mySwiper3_next",
            prevEl: ".mySwiper3_prev",
        },
        breakpoints: commonBreakpoints
    });
    return swiperInstances.son;
}

export function initYasayisSwiper() {
    if (swiperInstances.yasayis) {
        swiperInstances.yasayis.destroy(true, true);
    }
    swiperInstances.yasayis = new Swiper(".mySwiper4", {
        slidesPerView: 4,
        grid: { rows: 2 },
        spaceBetween: 22,
        navigation: {
            nextEl: ".mySwiper4_next",
            prevEl: ".mySwiper4_prev",
        },
        breakpoints: commonBreakpoints
    });
    return swiperInstances.yasayis;
}

export function initAgentlikSwiper() {
    if (swiperInstances.agentlik) {
        swiperInstances.agentlik.destroy(true, true);
    }
    swiperInstances.agentlik = new Swiper(".mySwiper5", {
        slidesPerView: 'auto',
        spaceBetween: 22,
        slidesPerGroup: 1,
        centeredSlides: false,
        freeMode: false,
        navigation: {
            nextEl: ".mySwiper5_next",
            prevEl: ".mySwiper5_prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 8,
                grid: { rows: 1, fill: 'row' }
            },
            375: {
                slidesPerView: 'auto',
                spaceBetween: 8,
                grid: { rows: 1, fill: 'row' }
            },
            480: {
                slidesPerView: 'auto',
                spaceBetween: 8,
                grid: { rows: 1, fill: 'row' }
            },
            860: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                grid: { rows: 2, fill: 'row' }
            },
            992: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                grid: { rows: 2, fill: 'row' }
            },
            1200: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                grid: { rows: 2, fill: 'row' }
            },
        }
    });
    return swiperInstances.agentlik;
}

export function initStaticSwipers() {
    initPremiumSwiper();
    initSonSwiper();
    initYasayisSwiper();
    initAgentlikSwiper();
}

export function destroyAllSwipers() {
    Object.values(swiperInstances).forEach(instance => {
        if (instance) {
            instance.destroy(true, true);
        }
    });
}

export function getSwiperInstance(type) {
    return swiperInstances[type];
}