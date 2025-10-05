<script setup lang="ts">
import { BannerType, BannerName, HomeContactState } from '~/enums';
import { useBannerObserver } from '~/composables/utility/observer';
import type { IBannerTabMenu } from '~/types/banner';
import type { IContactType } from '~/types/home';
import type { ICarouselType } from '~/types/carousel'
import { useI18n } from 'vue-i18n'

import PlaygroundSlide01EN from '~/assets/general/images/playground/playground-slide-01-en.svg'
import PlaygroundSlide02EN from '~/assets/general/images/playground/playground-slide-02-en.svg'
import PlaygroundSlide03EN from '~/assets/general/images/playground/playground-slide-03-en.svg'
import PlaygroundSlide01TH from '~/assets/general/images/playground/playground-slide-01-th.svg'
import PlaygroundSlide02TH from '~/assets/general/images/playground/playground-slide-02-th.svg'
import PlaygroundSlide03TH from '~/assets/general/images/playground/playground-slide-03-th.svg'

import Phone from '~/assets/general/icons/phone.png'
import Mail from '~/assets/general/icons/mail.png'
import Linkedin from '~/assets/general/icons/linkedin.png'
import Github from '~/assets/general/icons/github.png'

const { t, locale } = useI18n()

const BannerTabMenus = computed<IBannerTabMenu[]>(() => [
  { value: BannerType.FIRST_BANNER, text: t(BannerName.FIRST_BANNER) },
  { value: BannerType.SECOND_BANNER, text: t(BannerName.SECOND_BANNER) },
  { value: BannerType.THIRD_BANNER, text: t(BannerName.THIRD_BANNER) },
]);

const { activeBanner } = useBannerObserver([
  BannerType.FIRST_BANNER,
  BannerType.SECOND_BANNER,
  BannerType.THIRD_BANNER
])

const playgroundSlides = computed<ICarouselType[]>(() => {
  if (locale.value === "th") {
    return [
      { image: PlaygroundSlide01TH, text: "Google Map API", path: "/google-map-api" },
      { image: PlaygroundSlide02TH, text: "SCB API", path: "/scb-api" },
      { image: PlaygroundSlide03TH, text: "Dynamic Filter", path: "/dynamic-filter" },
    ];
  } else {
    return [
      { image: PlaygroundSlide01EN, text: "Google Map API", path: "/google-map-api" },
      { image: PlaygroundSlide02EN, text: "SCB API", path: "/scb-api" },
      { image: PlaygroundSlide03EN, text: "Dynamic Filter", path: "/dynamic-filter" },
    ];
  }
});

const ContactList: IContactType[] = [
  { 
    type: HomeContactState.TEXT, 
    display: '080-449-9793', 
    value: '0804499793',
    image: Phone
  },
  { 
    type: HomeContactState.TEXT, 
    display: 'book.damrongdech@gmail.com', 
    value: 'book.damrongdech@gmail.com',
    image: Mail
  },
  { 
    type: HomeContactState.LINK, 
    display: 'github.com/mrbrooklyn', 
    value: 'https://github.com/mrbrooklyn',
    image: Github
  },
  { 
    type: HomeContactState.LINK,
    display: 'linkedin.com/in/damrongdech-choekpanitsiri', 
    value: 'https://www.linkedin.com/in/damrongdech-choekpanitsiri/',
    image: Linkedin
  },
]
</script>

<template>
  <BannerTabMenuPanel class="z-20" :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FIRST_BANNER" />
  <BannerIndicatorPanel class="z-20" :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FIRST_BANNER" />
  <div class="h-full w-full overflow-y-scroll snap-y snap-mandatory">
    <div class="relative">
      <BannerHomeBanner 
        :id="BannerType.FIRST_BANNER"
        :title="t('home_text_header')"
        :content="t('home_text_detail')"
      />
      <!-- <div class="absolute bottom-[-90px] left-0 w-full h-[180px] banner-transition-1"></div> -->
    </div>
    <div class="relative">
      <BannerPlaygroundBanner :id="BannerType.SECOND_BANNER" :slide="playgroundSlides"/>
      <!-- <div class="absolute bottom-[-90px] left-0 w-full h-[180px] banner-transition-2"></div> -->
    </div>
    <BannerContactBanner :id="BannerType.THIRD_BANNER" :contactList="ContactList"/>
  </div>
</template>

<!-- <style scoped>
.banner-transition-1 {
    z-index: 1;
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(238, 237, 242),
        rgb(217, 217, 217),
        transparent
    );
}
.banner-transition-2 {
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(238, 237, 242),
        rgb(238, 237, 242),
        transparent
    );
}
</style> -->