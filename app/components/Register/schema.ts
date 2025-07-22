import * as yup from 'yup';
import { object, string, ref } from 'yup';


let userSchema = object({
  name: string().required('Name is required'),
  lastName: string().required('Last name is required'),
  userName: string().required('Username is required'),
  email: string().email('Invalid email format').required('Email is required'),
  password: string()
    .transform((value: any) => String(value))
    .min(8, 'Password must be at least 8 characters')
    .oneOf([ref('confirm')], 'Passwords must match')
    .required('Password is required'),
  confirm: string()
    .transform((value: any) => String(value))
    .min(8, 'Confirm password must be at least 8 characters')
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default userSchema;