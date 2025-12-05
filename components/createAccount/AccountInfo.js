import { Formik } from "formik";
import * as Yup from "yup";
import Card from "../common/Card";
import { ScrollView, View } from "react-native";
import { Heading, Subheading } from "../common/Texts";
import { FormField } from "../common/TextFields";
import { ACCOUNT_FIELDS } from "../../data/AccountFields";
import { useEffect } from "react";

export default function AccountInfo({ styles, onValidityChange }) {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string().min(1).required("Required"),
    lastName: Yup.string().min(1).required("Required"),
    birthday: Yup.date().required("Required"),
    username: Yup.string().min(8).required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        "Needs 1 digit, 1 lowercase, 1 uppercase, min 8 characters"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(
        /^\d{9}$/,
        "Phone number must be exactly 10 digits (no dashes or spaces)."
      )
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        birthday: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={signupSchema}
    >
      {({ handleChange, handleBlur, values, errors, touched, isValid }) => {
        // useEffect(() => {
        //   onValidityChange(isValid);
        // }, [isValid, onValidityChange]);

        return (
          <View style={styles.item}>
            <ScrollView style={styles.scrollView}>
              <Card style={styles.card}>
                <Heading>Account</Heading>
                {ACCOUNT_FIELDS.map((entry) => {
                  return (
                    <View style={{ rowGap: 5 }} key={entry.section}>
                      <Subheading>{entry.section}</Subheading>
                      {entry.fields.map((field) => {
                        return (
                          <FormField
                            key={field.name}
                            field={field}
                            formatter={field.formatter}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            errors={errors}
                            touched={touched}
                          />
                        );
                      })}
                    </View>
                  );
                })}
              </Card>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
}
