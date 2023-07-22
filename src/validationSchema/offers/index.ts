import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  discount: yup.number().integer().required(),
  food_item_id: yup.string().nullable(),
});
