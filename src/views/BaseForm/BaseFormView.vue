<template>
  <BasePageContent>
    <BaseCard>
      <BaseForm form-id="test-form"
                @submit="handleFormSubmit"
                v-model:form-data="form"
                v-model:form-schema="formSchema"
                ref="formRef">
        <template #default="{getErrors, hasError}">
          <BaseInputContainer
              v-model="form.name"
              name="name"
              label="Name"
              show-errors
              :errors="getErrors('name')">
            <InputText v-model="form.name"></InputText>

          </BaseInputContainer>
          <BaseInputContainer
              v-model="form.email"
              name="email"
              label="Email"
              show-errors
              :errors="getErrors('email')">
            <InputText v-model="form.email"></InputText>
          </BaseInputContainer>
          <Button type="submit" label="Submit"></Button>
        </template>

      </BaseForm>
      <template #footer>
        <pre>
          <code>
            {{ formRef?.errors }}
          </code>
        </pre>
      </template>
    </BaseCard>


  </BasePageContent>

</template>

<script setup>
import BaseForm from "../../components/BaseForm.vue";
import {ref} from "vue";
import Button from "primevue/button";
import {InputText} from "primevue";
import BaseInputContainer from "../../components/BaseInputContainer.vue";
import * as zod from "zod";
import BasePageContent from "../../components/BasePageContent.vue";
import BaseCard from "../../components/BaseCard.vue";
import useCreateFormSchema from "../../composables/useCreateFormSchema.js";

const formRef = ref()
const form = ref({
  name: "",
  email: ""
})
const {createFormSchema} = useCreateFormSchema(form)
const formSchema = createFormSchema(zod.object({
  name: zod.string().min(1, "Name is required"),
  email: zod.string().email("Invalid email address")
}))

function handleFormSubmit(event, errors) {
  console.log("Form submitted", event, errors)
}
</script>

<style scoped>

</style>