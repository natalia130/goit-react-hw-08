import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
    const dispatch = useDispatch();
    const emailId = useId();
    const passwordId = useId();

    const contactSchema = Yup.object().shape({
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
        email: '',
        password: '',
    };

    const onLogin = (values, { resetForm }) => {
        dispatch(logIn({
            email: values.email,
            password: values.password,
        }));
        // resetForm();
    };

    return (
        <div className={css.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={onLogin}
            >
                <Form className={css.form}>
                    <label htmlFor={emailId}>Email</label>
                    <Field type="email" name="email" id={emailId} />
                    <ErrorMessage name="email" component="span" className={css.error} />

                    <label htmlFor={passwordId}>Password</label>
                    <Field type="password" name="password" id={passwordId} />
                    <ErrorMessage name="password" component="span" className={css.error} />

                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;