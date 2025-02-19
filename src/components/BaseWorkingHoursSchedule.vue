<template>
    <DataTable v-if="modelValue"
               :value="modelValue"
               size="large"
               striped-rows>
        <Column field="is_open" header="Status">
            <template #body="{field, data}">
                <div class="flex items-center gap-x-2 w-[100px]">
                    <ToggleSwitch v-model="data[field]">
                    </ToggleSwitch>
                    <div class="text-xs font-medium"
                         :class="{'text-green-600': data[field], 'text-gray-600': !data[field]}">
                        {{ data[field] ? 'OPEN' : 'CLOSED' }}
                    </div>
                </div>
            </template>
        </Column>
        <Column field="day_name" header="Day"></Column>
        <Column field="opening" header="Opening">
            <template #body="{field, data}">
                <InputText type="time"
                           v-model="data[field]"
                           :disabled="!isOpen(data['day_name'])"/>
            </template>
        </Column>
        <Column field="closing" header="Closing">
            <template #body="{field, data}">
                <InputText type="time" v-model="data[field]" :disabled="!isOpen(data['day_name'])"/>
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
import {DataTable, ToggleSwitch, InputText} from "primevue";
import Column from "primevue/column";
import {onMounted} from "vue";

const modelValue = defineModel({
    default: []
});


function isOpen(dayName) {
    return modelValue.value.find(day => {
        return day.day_name === dayName
    })?.is_open
}

onMounted(() => {
    if (modelValue.value?.length === 0) {
        modelValue.value = [
            {
                day_name: 'Monday',
                opening: '00:00',
                closing: '23:59',
                is_open: true
            },
            {
                day_name: 'Tuesday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
            {
                day_name: 'Wednesday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
            {
                day_name: 'Thursday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
            {
                day_name: 'Friday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
            {
                day_name: 'Saturday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
            {
                day_name: 'Sunday',
                opening: '00:00',
                closing: '23:59',
                is_open: false
            },
        ]
    }
})


</script>

<style scoped>

</style>
