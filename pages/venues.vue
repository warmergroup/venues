<script setup lang="ts">
import {useToyxonalarStore} from "~/stores/toyxonalar.store";

const {isLargeScreen} = useScreenSize()
// const {isLoading, error} = useGetToyxonalarQuery(0, 10);
const toyxonalarStore = useToyxonalarStore();
const isLoading = computed(() => toyxonalarStore.isLoading);
const toyxonalar = computed(() => toyxonalarStore.toyxonalar);

const {t} = useI18n()

</script>


<template>
  <div>
    <LayoutsMobileTopbar v-if="!isLargeScreen"/>
    <section class="space-y-3 bg-[var(--background-color)] px-5 pt-20">
      <h2 class="text-xl font-bold text-text-primary py-2">{{ t('common.venues') }}</h2>
      <div v-if="isLoading" class="fixed w-full h-full flex flex-col items-center justify-center ">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"/>
        <p class="mt-4 text-lg text-gray-600">{{ t('common.loading') }}</p>
      </div>
      <!--    <div v-else-if="error" class="text-center text-red-500">{{ error.message }}</div>-->
      <div v-else-if="toyxonalar.length === 0" class="text-center text-gray-500">
        {{ t('venue.notFound') }}
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <VenueCard v-for="toyxona in toyxonalar" :key="`wedding-${toyxona.id}`" :toyxona="toyxona"/>
      </div>
    </section>
  </div>
</template>
