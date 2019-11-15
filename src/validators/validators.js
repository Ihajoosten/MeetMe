import { helpers } from 'vuelidate/lib/validators';

export const validFileTypes = value => {
  if (!helpers.req(value)) return true;

  const allowedFormats = ['jpg', 'png', 'jpeg'];
  const extension = value.split('.').pop();
  return allowedFormats.includes(extension);
};
