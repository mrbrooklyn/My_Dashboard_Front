<script setup lang="ts">
import { BannerType, BannerName } from '~/enums/enum';
import type { IBannerTabMenu } from '~/types/banner';
import { useBannerObserver } from '~/composables/utility/observer';

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
</script>

<template>
  <div class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <BannerTabMenuPanel :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FirstBanner" />
    <BannerIndicatorPanel :menus="BannerTabMenus" :activeBanner="activeBanner ?? BannerType.FirstBanner" />
    <BannerHomeBanner 
      :id="BannerType.FirstBanner"
      title="Lorem ipsum"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
    />
    <BannerPlaygroundBanner :id="BannerType.SecondBanner"/>
    <BannerContactBanner :id="BannerType.ThirdBanner"/>
  </div>
</template>