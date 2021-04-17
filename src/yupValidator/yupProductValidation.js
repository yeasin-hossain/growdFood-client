/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

const errorMsg = {
    requiredFiled: 'The filed is required.',
};

export const productValidationSchema = yup.object().shape({
    name: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    price: yup.number().required(errorMsg.requiredFiled),
    type: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    description: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    imageUrl: yup.string().trim().min(2).required(errorMsg.requiredFiled),
});
