<script setup lang="ts">
import { openState } from '~/stores/isOpen.store';

const { t } = useI18n();
const openComponent = openState();


</script>

<template>
    <div class="flex flex-col gap-4 rounded-lg bg-white p-4">
        <div class="flex items-center justify-between cursor-pointer" @click="openComponent.onOpen('changeLanguage')">
            <div class="flex items-center gap-2">
                <span class="flex w-[40px] h-[40px] items-center justify-center rounded-full bg-slate-200/40">
                    <Icon size="20px" name="custom:globe-02" />
                </span>
                <p class="text-black text-base font-medium">{{ t('common.appLanguage') }}</p>
            </div>
            <Icon size="15px" name="custom:chevron-right" />
        </div>

        <div class="flex items-center justify-between cursor-pointer" @click="openComponent.onOpen('about')">
            <div class="flex items-center gap-2">
                <span class="flex w-[40px] h-[40px] items-center justify-center rounded-full bg-slate-200/40">
                    <Icon size="20px" name="custom:information" />
                </span>
                <p class="text-black text-base font-medium">{{ t('about.aboutUs') }}</p>
            </div>
            <Icon size="15px" name="custom:chevron-right" />
        </div>

        <div class="flex items-center justify-between cursor-pointer" @click="openComponent.onOpen('about')">
            <div class="flex items-center gap-2">
                <span class="flex w-[40px] h-[40px] items-center justify-center rounded-full bg-slate-200/40">
                    <Icon size="20px" name="custom:information" />
                </span>
                <p class="text-black text-base font-medium">{{ t('about.aboutUs') }}</p>
            </div>
            <Icon size="15px" name="custom:chevron-right" />
        </div>

        <div class="flex items-center justify-between cursor-pointer" @click="openComponent.onOpen('about')">
            <div class="flex items-center gap-2">
                <span class="flex w-[40px] h-[40px] items-center justify-center rounded-full bg-slate-200/40">
                    <Icon size="20px" name="custom:information" />
                </span>
                <p class="text-black text-base font-medium">{{ t('about.aboutUs') }}</p>
            </div>
            <Icon size="15px" name="custom:chevron-right" />
        </div>
    </div>
</template>