<template>
  <div>
    {{ filters }}
    <BaseCrudTable endpoint="http://localhost:3000" informational clickable-rows>
      <template #columns="{isFilterActive}">
        <BaseCrudTableColumn key="qweqweqwe1" field="id" header="ID"></BaseCrudTableColumn>
        <!--        <Column field="id" header="ID" :sortable="true"/>-->
        <Column header="User Name"
                filter-field="user_name"
                :show-filter-operator="false"
                :show-filter-match-modes="false"
                field="user_name">
          <!--          <template #filtericon>-->
          <!--            <BaseCrudTableFilterButton :is-active="isFilterActive('user_name')"></BaseCrudTableFilterButton>-->
          <!--          </template>-->
          <!--          <template #filter="{filterModel}">-->
          <!--            <BaseCrudTableColumnFilter-->
          <!--                v-model:filter-value="filterModel.value"-->
          <!--                type="select"-->
          <!--                :config="{-->
          <!--                                          optionLabel: 'name',-->
          <!--                                          optionValue: 'value',-->
          <!--                                          tags: true,-->
          <!--                                          tagsMapping: {-->
          <!--                                              'test': { severity: 'info'},-->
          <!--                                              'test2': {severity: 'danger'}-->
          <!--                                          },-->
          <!--                                          options: [{name:'test', value: 'test'}, { name: 'test2', value: 'test2'}]-->
          <!--                                       }"/>-->
          <!--          </template>-->
        </Column>
        <Column field="user_phone"
                :show-filter-operator="false"
                :show-filter-match-modes="false"
                :sortable="true"
                header="Phone">
          <!--          <template #filter="{filterModel}">-->
          <!--            <BaseCrudTableColumnFilter-->
          <!--                v-model:filter-value="filterModel.value"-->
          <!--                type="select"-->
          <!--                :config="{        optionLabel: 'name',-->
          <!--                                          optionValue: 'value',-->
          <!--                                          tags: true,-->
          <!--                                          tagsMapping: {-->
          <!--                                              'test': { severity: 'info'},-->
          <!--                                              'test2': {severity: 'danger'}-->
          <!--                                          },-->
          <!--                                          options: [{name:'test', value: 'test'}, { name: 'test2', value: 'test2'}]-->
          <!--                                       }"/>-->
          <!--          </template>-->
        </Column>
        <Column field="promo_code" :sortable="true" header="Promo Code"/>
      </template>
    </BaseCrudTable>
  </div>
  <div>
    <BaseGroupItemsSelector :groups="groupingList"
                            v-model:selected-items="selectedItemsList"
                            :groups-items="groupItemsList"
                            items-group-key="option_group_id"></BaseGroupItemsSelector>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {Column} from "primevue";
import * as zod from "zod"
import BaseGroupItemsSelector from "../components/BaseGroupItemsSelector.vue";
import useUtils from "../composables/useUtils.js";
import BaseCrudTable from "../components/BaseCrudTable.vue";
import {useRoute, useRouter} from "vue-router";
import BaseCrudTableColumnFilter from "../components/BaseCrudTableColumnFilter.vue";
import BaseCrudTableColumn from "../components/BaseCrudTableColumn.vue";
import BaseCrudTableFilterButton from "../components/BaseCrudTableFilterButton.vue";
import useEditDialog from "../composables/useEditDialog.js";


const groupingList = ref([
  {
    "id": 1,
    "type": "ColorPicker",
    "sort_number": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Color"
  },
  {
    "id": 2,
    "type": "text",
    "sort_number": 2,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Size"
  },
  {
    "id": 3,
    "type": "text",
    "sort_number": 3,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Quality"
  },
  {
    "id": 4,
    "type": "Text",
    "sort_number": 0,
    "created_at": "2025-01-10 12:10:57",
    "updated_at": "2025-01-10 12:10:57",
    "name": "Quantity"
  },
  {
    "id": 5,
    "type": "Text",
    "sort_number": 0,
    "created_at": "2025-02-03 12:14:03",
    "updated_at": "2025-02-03 12:14:03",
    "name": "Message"
  },
  {
    "id": 6,
    "type": "Text",
    "sort_number": 0,
    "created_at": "2025-02-03 12:14:13",
    "updated_at": "2025-02-03 12:14:13",
    "name": "Wrapping"
  }
])
const groupItemsList = ref([
  {
    "id": 1,
    "value": "#e31616",
    "sort_number": 1,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Red",
    "option_id": 1,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 3,
    "value": "#1664e3",
    "sort_number": 2,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Blue",
    "option_id": 2,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 5,
    "value": "#16e364",
    "sort_number": 3,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Green",
    "option_id": 3,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 7,
    "value": "#b116e3",
    "sort_number": 4,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Purple",
    "option_id": 4,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 9,
    "value": "#16e3e3",
    "sort_number": 5,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Light Blue",
    "option_id": 5,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 33,
    "value": "Pink",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Pink",
    "option_id": 17,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 35,
    "value": "Sunny Orange ",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Sunny Orange ",
    "option_id": 18,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 37,
    "value": "Golden Glow",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Golden Glow",
    "option_id": 19,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 39,
    "value": "Fiery Red",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Fiery Red",
    "option_id": 20,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 43,
    "value": "Fuschia Blaze",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Fuschia Blaze",
    "option_id": 22,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 47,
    "value": "White ",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "White ",
    "option_id": 24,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 49,
    "value": "Yellow",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Yellow",
    "option_id": 25,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 51,
    "value": "Orange",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Orange",
    "option_id": 26,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 131,
    "value": "fce5cd",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-22 20:51:32",
    "updated_at": "2025-01-22 20:51:32",
    "name": "Dusty Pink",
    "option_id": 66,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 211,
    "value": "#bcbcbc",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-23 12:02:10",
    "updated_at": "2025-01-23 12:02:10",
    "name": "Grey",
    "option_id": 67,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 213,
    "value": "#100e0e",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-23 12:02:16",
    "updated_at": "2025-01-23 12:02:16",
    "name": "Black",
    "option_id": 68,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 209,
    "value": "#faf7f7",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-23 12:01:57",
    "updated_at": "2025-01-23 12:01:57",
    "name": "White",
    "option_id": 105,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 215,
    "value": "bf9000",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-26 22:18:53",
    "updated_at": "2025-01-26 22:18:53",
    "name": "Gold",
    "option_id": 106,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 217,
    "value": "c0c0c0",
    "sort_number": 0,
    "option_group_id": 1,
    "created_at": "2025-01-26 22:19:10",
    "updated_at": "2025-01-26 22:19:10",
    "name": "Silver",
    "option_id": 107,
    "language_id": 1,
    "option_group_type": "ColorPicker",
    "option_group_name": "Color"
  },
  {
    "id": 11,
    "value": "S",
    "sort_number": 6,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Small",
    "option_id": 6,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 13,
    "value": "B",
    "sort_number": 7,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Big",
    "option_id": 7,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 15,
    "value": "M",
    "sort_number": 8,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Medium",
    "option_id": 8,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 23,
    "value": "Large 70 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Large 70 cm",
    "option_id": 12,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 25,
    "value": "Small 50 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Small 50 cm",
    "option_id": 13,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 27,
    "value": "X-Large 90 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "X-Large 90 cm",
    "option_id": 14,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 29,
    "value": "Medium 45 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Medium 45 cm",
    "option_id": 15,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 31,
    "value": "Large 60 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:42",
    "updated_at": "2024-12-04 16:34:42",
    "name": "Large 60 cm",
    "option_id": 16,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 41,
    "value": "Medium 50 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Medium 50 cm",
    "option_id": 21,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 45,
    "value": "Small 35 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Small 35 cm",
    "option_id": 23,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 53,
    "value": "Medium 40 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Medium 40 cm",
    "option_id": 27,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 55,
    "value": "Medium 120 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Medium 120 cm",
    "option_id": 28,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 57,
    "value": "Large  170 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:43",
    "updated_at": "2024-12-04 16:34:43",
    "name": "Large  170 cm",
    "option_id": 29,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 59,
    "value": "Large 100 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:44",
    "updated_at": "2024-12-04 16:34:44",
    "name": "Large 100 cm",
    "option_id": 30,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 61,
    "value": "Medium 60 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:44",
    "updated_at": "2024-12-04 16:34:44",
    "name": "Medium 60 cm",
    "option_id": 31,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 63,
    "value": "Large 90 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-04 16:34:44",
    "updated_at": "2024-12-04 16:34:44",
    "name": "Large 90 cm",
    "option_id": 32,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 65,
    "value": "Small 30 Cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:40",
    "updated_at": "2024-12-12 12:21:40",
    "name": "Small 30 Cm",
    "option_id": 33,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 67,
    "value": "25 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "25 cm",
    "option_id": 34,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 69,
    "value": "50 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "50 cm",
    "option_id": 35,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 71,
    "value": "60 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "60 cm",
    "option_id": 36,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 73,
    "value": "70 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "70 cm",
    "option_id": 37,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 75,
    "value": "80 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "80 cm",
    "option_id": 38,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 77,
    "value": "30 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "30 cm",
    "option_id": 39,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 79,
    "value": "40 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "40 cm",
    "option_id": 40,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 81,
    "value": "15 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "15 cm",
    "option_id": 41,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 83,
    "value": "Small 12 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:41",
    "updated_at": "2024-12-12 12:21:41",
    "name": "Small 12 Stems ",
    "option_id": 42,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 85,
    "value": "Medium 24 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Medium 24 Stems ",
    "option_id": 43,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 87,
    "value": "Large 36 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Large 36 Stems ",
    "option_id": 44,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 89,
    "value": "Medium 20 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Medium 20 Stems ",
    "option_id": 45,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 91,
    "value": "Small 10 Stems",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Small 10 Stems",
    "option_id": 46,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 93,
    "value": "Large 30 Stems",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Large 30 Stems",
    "option_id": 47,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 95,
    "value": "Large 40 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Large 40 Stems ",
    "option_id": 48,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 97,
    "value": "Medium 30 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Medium 30 Stems ",
    "option_id": 49,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 99,
    "value": "Small 20 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Small 20 Stems ",
    "option_id": 50,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 101,
    "value": "Large 60 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Large 60 Stems ",
    "option_id": 51,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 103,
    "value": "Medium 40 Stems ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "Medium 40 Stems ",
    "option_id": 52,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 105,
    "value": "35 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "35 cm",
    "option_id": 53,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 107,
    "value": "60x30 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "60x30 cm",
    "option_id": 54,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 109,
    "value": "40x60 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "40x60 cm",
    "option_id": 55,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 111,
    "value": "50X70 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:42",
    "updated_at": "2024-12-12 12:21:42",
    "name": "50X70 cm",
    "option_id": 56,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 113,
    "value": "50x90 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:43",
    "updated_at": "2024-12-12 12:21:43",
    "name": "50x90 cm",
    "option_id": 57,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 115,
    "value": "70x50 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2024-12-12 12:21:43",
    "updated_at": "2024-12-12 12:21:43",
    "name": "70x50 cm",
    "option_id": 58,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 127,
    "value": "30x30 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-20 12:07:12",
    "updated_at": "2025-01-20 12:07:12",
    "name": "30x30 cm",
    "option_id": 64,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 129,
    "value": "24x40 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-20 12:07:13",
    "updated_at": "2025-01-20 12:07:13",
    "name": "24x40 cm",
    "option_id": 65,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 139,
    "value": "1 m",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:37",
    "updated_at": "2025-01-23 11:28:37",
    "name": "1 m",
    "option_id": 70,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 141,
    "value": "1.25 m",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:37",
    "updated_at": "2025-01-23 11:28:37",
    "name": "1.25 m",
    "option_id": 71,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 143,
    "value": "1.8 m",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:37",
    "updated_at": "2025-01-23 11:28:37",
    "name": "1.8 m",
    "option_id": 72,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 145,
    "value": "1.75 m",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:37",
    "updated_at": "2025-01-23 11:28:37",
    "name": "1.75 m",
    "option_id": 73,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 147,
    "value": "20 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:38",
    "updated_at": "2025-01-23 11:28:38",
    "name": "20 cm",
    "option_id": 74,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 149,
    "value": " 20 cm ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:38",
    "updated_at": "2025-01-23 11:28:38",
    "name": " 20 cm ",
    "option_id": 75,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 151,
    "value": "40x20 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:38",
    "updated_at": "2025-01-23 11:28:38",
    "name": "40x20 cm",
    "option_id": 76,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 153,
    "value": "60x20 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "60x20 cm",
    "option_id": 77,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 155,
    "value": "70x25x30 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "70x25x30 cm",
    "option_id": 78,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 157,
    "value": "90x40x45 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "90x40x45 cm",
    "option_id": 79,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 159,
    "value": "S 14x14 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "S 14x14 cm",
    "option_id": 80,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 161,
    "value": "M 17x16 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "M 17x16 cm",
    "option_id": 81,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 163,
    "value": "L 21x19 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "L 21x19 cm",
    "option_id": 82,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 165,
    "value": "S 15x17 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "S 15x17 cm",
    "option_id": 83,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 167,
    "value": "M 19x19 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "M 19x19 cm",
    "option_id": 84,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 169,
    "value": "L 23x21 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "L 23x21 cm",
    "option_id": 85,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 171,
    "value": "S 14x9 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "S 14x9 cm",
    "option_id": 86,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 173,
    "value": "M 19x11 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "M 19x11 cm",
    "option_id": 87,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 175,
    "value": "L 23x14 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:39",
    "updated_at": "2025-01-23 11:28:39",
    "name": "L 23x14 cm",
    "option_id": 88,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 177,
    "value": "S 19x25 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "S 19x25 cm",
    "option_id": 89,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 179,
    "value": "M 24x27 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "M 24x27 cm",
    "option_id": 90,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 181,
    "value": "L 29x29 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "L 29x29 cm",
    "option_id": 91,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 183,
    "value": "S 26x33 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "S 26x33 cm",
    "option_id": 92,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 185,
    "value": "M 33x36 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "M 33x36 cm",
    "option_id": 93,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 187,
    "value": "L 40x39 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "L 40x39 cm",
    "option_id": 94,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 189,
    "value": "S 18x15 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "S 18x15 cm",
    "option_id": 95,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 191,
    "value": "M 21x16 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "M 21x16 cm",
    "option_id": 96,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 193,
    "value": "L 24x18 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "L 24x18 cm",
    "option_id": 97,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 195,
    "value": "XL 28x19 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "XL 28x19 cm",
    "option_id": 98,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 197,
    "value": "S 17x17x33 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "S 17x17x33 cm",
    "option_id": 99,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 199,
    "value": "M 20x18x41 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "M 20x18x41 cm",
    "option_id": 100,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 201,
    "value": "L 23x20x54 cm",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:40",
    "updated_at": "2025-01-23 11:28:40",
    "name": "L 23x20x54 cm",
    "option_id": 101,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 203,
    "value": "10 L",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:28:42",
    "updated_at": "2025-01-23 11:28:42",
    "name": "10 L",
    "option_id": 102,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 205,
    "value": "20 L",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:29:41",
    "updated_at": "2025-01-23 11:29:41",
    "name": "20 L",
    "option_id": 103,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 207,
    "value": "50 L",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-01-23 11:29:41",
    "updated_at": "2025-01-23 11:29:41",
    "name": "50 L",
    "option_id": 104,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 219,
    "value": "75 Roses",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-02-03 12:10:29",
    "updated_at": "2025-02-03 12:10:29",
    "name": "75 Roses",
    "option_id": 108,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 221,
    "value": "150 Tulips ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-02-03 12:10:31",
    "updated_at": "2025-02-03 12:10:31",
    "name": "150 Tulips ",
    "option_id": 109,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 223,
    "value": "200 Tulips ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-02-03 12:10:31",
    "updated_at": "2025-02-03 12:10:31",
    "name": "200 Tulips ",
    "option_id": 110,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 225,
    "value": "100 Roses",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-02-03 12:10:31",
    "updated_at": "2025-02-03 12:10:31",
    "name": "100 Roses",
    "option_id": 111,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 227,
    "value": "200 Roses ",
    "sort_number": 0,
    "option_group_id": 2,
    "created_at": "2025-02-03 12:10:31",
    "updated_at": "2025-02-03 12:10:31",
    "name": "200 Roses ",
    "option_id": 112,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Size"
  },
  {
    "id": 17,
    "value": "regular",
    "sort_number": 9,
    "option_group_id": 3,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Regular",
    "option_id": 9,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Quality"
  },
  {
    "id": 19,
    "value": "deluxe",
    "sort_number": 10,
    "option_group_id": 3,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Deluxe",
    "option_id": 10,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Quality"
  },
  {
    "id": 21,
    "value": "premium",
    "sort_number": 11,
    "option_group_id": 3,
    "created_at": "2024-12-04 16:34:34",
    "updated_at": "2024-12-04 16:34:34",
    "name": "Premium",
    "option_id": 11,
    "language_id": 1,
    "option_group_type": "text",
    "option_group_name": "Quality"
  },
  {
    "id": 117,
    "value": "12 Roses",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-10 12:11:15",
    "updated_at": "2025-01-10 12:11:15",
    "name": "12 Roses",
    "option_id": 59,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 119,
    "value": "24 Roses",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-10 12:11:22",
    "updated_at": "2025-01-10 12:11:22",
    "name": "24 Roses",
    "option_id": 60,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 121,
    "value": "36 Roses",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-10 12:11:36",
    "updated_at": "2025-01-10 12:11:36",
    "name": "36 Roses",
    "option_id": 61,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 123,
    "value": "48 Roses",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-10 12:11:46",
    "updated_at": "2025-01-10 12:11:46",
    "name": "48 Roses",
    "option_id": 62,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 125,
    "value": "36  Roses ",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-10 13:34:57",
    "updated_at": "2025-01-10 13:34:57",
    "name": "36  Roses ",
    "option_id": 63,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 137,
    "value": "3 pcs",
    "sort_number": 0,
    "option_group_id": 4,
    "created_at": "2025-01-23 11:28:36",
    "updated_at": "2025-01-23 11:28:36",
    "name": "3 pcs",
    "option_id": 69,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Quantity"
  },
  {
    "id": 229,
    "value": "Bhebik",
    "sort_number": 0,
    "option_group_id": 5,
    "created_at": "2025-02-03 12:14:26",
    "updated_at": "2025-02-03 12:14:26",
    "name": "Bhebik",
    "option_id": 113,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Message"
  },
  {
    "id": 231,
    "value": "Bhebak",
    "sort_number": 0,
    "option_group_id": 5,
    "created_at": "2025-02-03 12:14:34",
    "updated_at": "2025-02-03 12:14:34",
    "name": "Bhebak",
    "option_id": 114,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Message"
  },
  {
    "id": 243,
    "value": "Gold Wrapping",
    "sort_number": 0,
    "option_group_id": 6,
    "created_at": "2025-02-03 12:17:08",
    "updated_at": "2025-02-03 12:17:08",
    "name": "Gold Wrapping",
    "option_id": 123,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Wrapping"
  },
  {
    "id": 245,
    "value": "Black Wrapping",
    "sort_number": 0,
    "option_group_id": 6,
    "created_at": "2025-02-03 12:17:08",
    "updated_at": "2025-02-03 12:17:08",
    "name": "Black Wrapping",
    "option_id": 124,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Wrapping"
  },
  {
    "id": 247,
    "value": "Craft",
    "sort_number": 0,
    "option_group_id": 6,
    "created_at": "2025-02-03 12:17:08",
    "updated_at": "2025-02-03 12:17:08",
    "name": "Craft",
    "option_id": 125,
    "language_id": 1,
    "option_group_type": "Text",
    "option_group_name": "Wrapping"
  }
])
const selectedItemsList = ref([])
const route = useRoute()
const router = useRouter()
const filters = ref({
  user_name: {
    value: ''
  },
  user_phone: {
    value: ''
  }
})
const props = defineProps({
  record: {
    default: () => {
      return {
        id: 0
      }
    }
  }
})
const {createFormSchema} = useEditDialog({props})
let formSchema = null

onMounted(() => {
  formSchema = createFormSchema(zod.object({
    username: zod.string().nonempty('Username is required'),
    password: zod.string().nonempty('Password is required').min(6, 'Password must be at least 6 characters'),
    role_id: zod.number()
  }), {
    languages: ['en', 'fr'],
    languageSchema: zod.object({
      name: zod.string().nonempty('Name is required'),
      description: zod.string().nonempty('Description is required')
    })
  })
  console.log('AHHH')
  console.log(formSchema.shape)
  console.log(formSchema.shape.en.shape)
})
</script>

<style scoped>

</style>