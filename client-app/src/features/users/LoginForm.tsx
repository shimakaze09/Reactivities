import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function LoginForm() {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => userStore.login(values)}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type='password' />
                    <Button loading={isSubmitting} positive content='Login' type="submit" fluid />
                </Form>
            )}
        </Formik >
    )
})