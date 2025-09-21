<script setup lang="ts">
import { BannerType, BannerName, HomeContactState } from '~/enums';
import type { IBannerTabMenu } from '~/types/banner';
import { useBannerObserver } from '~/composables/utility/observer';
import type { IContactType } from '~/types/home';

import Phone from '~/assets/general/icons/phone.png'
import Mail from '~/assets/general/icons/mail.png'
import Linkedin from '~/assets/general/icons/linkedin.png'
import Github from '~/assets/general/icons/github.png'

const BannerTabMenus: IBannerTabMenu[] = [
  { value: BannerType.FirstBanner, text: BannerName.FirstBanner },
  { value: BannerType.SecondBanner, text: BannerName.SecondBanner },
  { value: BannerType.ThirdBanner, text: BannerName.ThirdBanner },
];

const { activeBanner } = useBannerObserver([
  BannerType.FirstBanner,
  BannerType.SecondBanner,
  BannerType.ThirdBanner
])

const ContactList: IContactType[] = [
  { 
    type: HomeContactState.Text, 
    display: '000-000-0000', 
    value: '0000000000',
    image: Phone
  },
  { 
    type: HomeContactState.Text, 
    display: 'loremipsum@gmail.com', 
    value: 'loremipsum@gmail.com',
    image: Mail
  },
  { 
    type: HomeContactState.Link, 
    display: 'github.com/loremipsum', 
    value: 'https://github.com/loremipsum',
    image: Github
  },
  { 
    type: HomeContactState.Link,
    display: 'linkedin.com/in/loremipsum', 
    value: 'https://www.linkedin.com/in/loremipsum/',
    image: Linkedin
  },
]
</script>

<template>
  <BannerTabMenuPanel class="z-20" :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FirstBanner" />
  <BannerIndicatorPanel class="z-20" :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FirstBanner" />
  <div class="h-full w-full overflow-y-scroll snap-y snap-mandatory">
    <div class="relative">
      <BannerHomeBanner 
        :id="BannerType.FirstBanner"
        title="LOREM IPSUM"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
      />
      <!-- <div class="absolute bottom-[-90px] left-0 w-full h-[180px] banner-transition-1"></div> -->
    </div>
    <div class="relative">
      <BannerPlaygroundBanner :id="BannerType.SecondBanner"/>
      <!-- <div class="absolute bottom-[-90px] left-0 w-full h-[180px] banner-transition-2"></div> -->
    </div>
    <BannerContactBanner :id="BannerType.ThirdBanner" :contactList="ContactList"/>
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