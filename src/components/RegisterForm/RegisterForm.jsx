import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const registrationSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .min(3, 'Must be at least 3 characters long')
            .max(50, 'Must be less than 50 characters long')
            .required("Required"),
        email: Yup.string()
            .trim()
            .required("Required"),
        password: Yup.string()
            .trim()
            .min(8, 'must be at least 8 characters long')
            .max(50, 'must be less than 50 characters long')
            .required("Required"),
    });

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    
    const onRegister = (values, { resetForm }) => {
        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
        }));
        resetForm();
    };

    return (
        <div className={css.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={registrationSchema}
                onSubmit={onRegister}
            >
                <Form className={css.form}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component="span" className={css.error} />

                    <label htmlFor={emailId}>Email</label>
                    <Field type="email" name="email" id={emailId} />
                    <ErrorMessage name="email" component="span" className={css.error} />

                    <label htmlFor={passwordId}>Password</label>
                    <Field type="password" name="password" id={passwordId} />
                    <ErrorMessage name="password" component="span" className={css.error} />

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterForm;