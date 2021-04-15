import * as yup from 'yup';

const errorMsg = {
    requiredFiled: 'The filed is required.',
};
// eslint-disable-next-line import/prefer-default-export
export const userValidationSchema = yup.object().shape({
    fullName: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    email: yup.string().trim().email().required(errorMsg.requiredFiled),
    password: yup
        .string()
        .min(8)
        .max(200)
        .matches(/[^A-Za-z0-9]/)
        .matches(/[A-Z]/)
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .required(errorMsg.requiredFiled),
});

export const loginUserValidationSchema = yup.object().shape({
    email: yup.string().trim().email().required(errorMsg.requiredFiled),
    password: yup
        .string()
        .min(8)
        .max(200)
        .matches(/[^A-Za-z0-9]/)
        .matches(/[A-Z]/)
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .required(errorMsg.requiredFiled),
});
