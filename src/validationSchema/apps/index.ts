import * as yup from 'yup';

export const appValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_interface: yup.string().required(),
  organization_id: yup.string().nullable(),
});
