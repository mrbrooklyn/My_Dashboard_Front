import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export function useBannerObserver(bannerIds: string[], threshold = 0.5) {
  const router = useRouter();
  const activeBanner = ref<string | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const sections = bannerIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => !!s);

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) {
          activeBanner.value = visible.target.id;
          router.replace({ hash: `#${activeBanner.value}` });
        }
      },
      { threshold }
    );

    sections.forEach((s) => observer?.observe(s));
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { activeBanner };
}
