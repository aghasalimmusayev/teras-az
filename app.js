const vipElanlar = document.querySelector("#vipElanlar .swiper-wrapper")
const premiumElanlar = document.querySelector("#premiumElanlar .swiper-wrapper")
const agentlikler = document.querySelector("#agentlikler .swiper-wrapper")
const sonElanlar = document.querySelector("#sonElanlar .swiper-wrapper")
const yasayisElanlar = document.querySelector("#yasayisKompleksleri .swiper-wrapper")
const popAxtaris = document.querySelector(".pop_axtaris_content")

import { initAgentlikSwiper, initPremiumSwiper, initSonSwiper, initVipSwiper, initYasayisSwiper } from './swipers/swiper.js';

import { getAgentlik, getData, getPop, getSon, getYasayis } from './service/service.js'

vipElanlar.innerHTML = `<div class="loading"><div class="loader"></div></div>`

let data;
let popData;
let premiumData;
let agentlikData;
let sonElanData;
let yasayisData;

async function recieveData() {
    data = await getData()
    popData = await getPop()
    premiumData = await getData()
    agentlikData = await getAgentlik()
    sonElanData = await getSon()
    yasayisData = await getYasayis()
    // console.log(data);
    getVipElanlar()
    getPopAxtaris()
    getPremiumElanlar()
    getAgentlikElanlar()
    getSonElanlar()
    getYasayisElan()
}
recieveData()

function getVipElanlar() {
    vipElanlar.innerHTML = ''
    if (data && data.length > 0) {
        data.forEach(ev => {
            vipElanlar.innerHTML +=
                `<div class="swiper-slide">
                    <div class="ev">
                        <div class="ev_img">
                            <img src="${ev.sekil}"
                                alt="Ev şəkili">
                            <div class="ferqli_ozellikler">
                                <div class="ferqli_top">
                                    <div class="ferqli_top_left">
                                        <div class="diamond_icon">
                                            <img src="./Source/diamond_icon.png" alt="">
                                        </div>
                                        <div class="king_icon">
                                            <img src="./Source/king_icon.png" alt="">
                                        </div>
                                    </div>
                                    <div class="ferqli_top_right">
                                        <div class="heart_icon">
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="ferqli_bottom">
                                    <div class="ferqli_bottom_left">
                                        <span>${ev.agentlik}</span>
                                    </div>
                                    <div class="ferqli_bottom_right">
                                        <div class="check_icon">
                                            <img src="./Source/check_icon.png" alt="">
                                        </div>
                                        <div class="percent_icon">%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ev_info">
                            <h3 class="ev_qiymet">${ev.qiymet} AZN/gün</h3>
                            <p class="ev_unvan">${ev.unvan}</p>
                            <div class="ev_details">
                                <span class="ev_otaq_sayi">${ev.otaq} otaqlı</span>
                                <span class="ev_kvadrat">${ev.sahe}m²</span>
                                <span class="ev_mertebe">${ev.mertebe} mərtəbə</span>
                            </div>
                            <p class="elan_date">${ev.elan_date}</p>
                        </div>
                    </div>
                </div>`
        });
    }
    else {
        vipElanlar.innerHTML = `<div class="loading"><div class="loader"></div></div>`
    }
    initVipSwiper()
}

function getPopAxtaris() {
    popAxtaris.innerHTML == ''
    popData.forEach(pop => {
        popAxtaris.innerHTML += `<div class="pop_axtar_slide"><a href="">${pop}</a></div>`
    })
}

function getPremiumElanlar() {
    premiumElanlar.innerHTML = ''
    premiumData.forEach(prem => {
        premiumElanlar.innerHTML +=
            `<div class="swiper-slide">
                <div class="ev">
                    <div class="ev_img">
                        <img src="${prem.sekil}"
                            alt="Ev şəkili">
                        <div class="ferqli_ozellikler">
                            <div class="ferqli_top">
                                <div class="ferqli_top_left">
                                    <div class="diamond_icon">
                                        <img src="./Source/diamond_icon.png" alt="">
                                    </div>
                                    <div class="king_icon">
                                        <img src="./Source/king_icon.png" alt="">
                                    </div>
                                </div>
                                <div class="ferqli_top_right">
                                    <div class="heart_icon">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="ferqli_bottom">
                                <div class="ferqli_bottom_left">
                                    <span>${prem.agentlik}</span>
                                </div>
                                <div class="ferqli_bottom_right">
                                    <div class="check_icon">
                                        <img src="./Source/check_icon.png" alt="">
                                    </div>
                                    <div class="percent_icon">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ev_info">
                        <h3 class="ev_qiymet">${prem.qiymet} AZN/gün</h3>
                        <p class="ev_unvan">${prem.unvan}</p>
                        <div class="ev_details">
                            <span class="ev_otaq_sayi">${prem.otaq} otaqlı</span>
                            <span class="ev_kvadrat">${prem.sahe}m²</span>
                            <span class="ev_mertebe">${prem.mertebe} mərtəbə</span>
                        </div>
                        <p class="elan_date">${prem.elan_date}</p>
                    </div>
                </div>
            </div>`
    })
    initPremiumSwiper()
}

function getAgentlikElanlar() {
    agentlikler.innerHTML = ''
    agentlikData.forEach(agent => {
        agentlikler.innerHTML +=
            `<div class="swiper-slide">
                <div class="agentlik">
                    <div class="agentlik_img">
                        <img src="${agent.sekil}" alt="Agentlik">
                    </div>
                    <div class="agentlik_info">
                        <h5 class="agentlik_name">${agent.ad}</h5>
                        <p class="a_teklif">${agent.teklif} təklif</p>
                    </div>
                </div>
            </div>`
    })
    initAgentlikSwiper()
}

function getSonElanlar() {
    sonElanlar.innerHTML = ''
    sonElanData.forEach(son => {
        sonElanlar.innerHTML +=
            `<div class="swiper-slide">
                <div class="ev">
                    <div class="ev_img">
                        <img src="${son.sekil}"
                            alt="Ev şəkili">
                        <div class="ferqli_ozellikler">
                            <div class="ferqli_top">
                                <div class="ferqli_top_left">
                                    <div class="diamond_icon">
                                        <img src="./Source/diamond_icon.png" alt="">
                                    </div>
                                    <div class="king_icon">
                                        <img src="./Source/king_icon.png" alt="">
                                    </div>
                                </div>
                                <div class="ferqli_top_right">
                                    <div class="heart_icon">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="ferqli_bottom">
                                <div class="ferqli_bottom_left">
                                    <span>${son.agentlik}</span>
                                </div>
                                <div class="ferqli_bottom_right">
                                    <div class="check_icon">
                                        <img src="./Source/check_icon.png" alt="">
                                    </div>
                                    <div class="percent_icon">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ev_info">
                        <h3 class="ev_qiymet">${son.qiymet} AZN/gün</h3>
                        <p class="ev_unvan">${son.unvan}</p>
                        <div class="ev_details">
                            <span class="ev_otaq_sayi">${son.otaq} otaqlı</span>
                            <span class="ev_kvadrat">${son.sahe}m²</span>
                            <span class="ev_mertebe">${son.mertebe} mərtəbə</span>
                        </div>
                        <p class="elan_date">${son.elan_date}</p>
                    </div>
                </div>
            </div>`
    })
    initSonSwiper()
}

function getYasayisElan() {
    yasayisElanlar.innerHTML = ''
    yasayisData.forEach(yasayis => {
        yasayisElanlar.innerHTML +=
            `<div class="swiper-slide">
                <div class="bina_park">
                    <div class="bina_park_img">
                        <img src="${yasayis.sekil}"
                            alt="Ev şəkili">
                        <div class="ferqli_ozellikler">
                            <div class="ferqli_top">
                                <div class="heart_icon">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <div class="ferqli_bottom">
                                <div class="ferqli_bottom_left">
                                    <span>Agentlik</span>
                                </div>
                                <div class="ferqli_bottom_right">
                                    <div class="check_icon">
                                        <img src="./Source/check_icon.png" alt="">
                                    </div>
                                    <div class="percent_icon">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bina_park_info">
                        <h3 class="bina_park_qiymet">${yasayis.qiymet} AZN-dən</h3>
                        <p class="bina_park_name">${yasayis.ad}</p>
                        <p class="bina_park_sirket">${yasayis.sirket}</p>
                        <p class="bina_park_unvan">${yasayis.rayon}</p>
                        <p class="bina_park_unvan2">${yasayis.metro}</p>
                    </div>
                </div>
            </div>`
    })
    initYasayisSwiper()
}

document.querySelector('.copy_right_date').innerHTML = new Date().getFullYear()
