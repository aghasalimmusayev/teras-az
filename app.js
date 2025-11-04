const vipElanlar = document.querySelector("#vipElanlar .swiper-wrapper")
// if (!vipElanlar) console.log('VipElanlar tapilmadi')
import { initVipSwiper } from './swipers/swiper.js';

import getData from './service/service.js'

let data;

getVipElanlar()
async function getVipElanlar() {
    data = await getData()
    console.log(data);
    vipElanlar.innerHTML = ''
    data.forEach(ev => {
        vipElanlar.innerHTML += `
            <div class="swiper-slide">
                <div class="ev">
                    <div class="ev_img">
                        <img src=${ev.sekil}
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
            </div>
        `
    });
    initVipSwiper()
}


document.querySelector('.copy_right_date').innerHTML = new Date().getFullYear()
