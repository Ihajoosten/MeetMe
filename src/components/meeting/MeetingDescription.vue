<template>
  <form @input="emitFormData" class="m-b-md">
    <div class="field">
      <label class="title">Image</label>
      <input
        v-model="form.image"
        @blur="$v.form.image.$touch()"
        class="input"
        type="text"
        placeholder="Image URL"
      />
      <div class="text-left mt-2">
        <div
          v-if="$v.form.image.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.image.required">Image is required</i>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="title">Description</label>
      <textarea
        v-model="form.description"
        @blur="$v.form.description.$touch()"
        class="textarea"
        placeholder="Write description"
        rows="5"
      ></textarea>
      <div class="text-left mt-2">
        <div
          v-if="$v.form.description.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.description.required"
            >A short description is required</i
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      form: {
        image: null,
        description: null
      }
    };
  },
  validations: {
    form: {
      image: {
        required
      },
      description: {
        required
      }
    }
  },
  methods: {
    emitFormData() {
      this.$emit('nextStep', { data: this.form, isValid: !this.$v.$invalid });
    }
  }
};
</script>

<style scoped></style>
