import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const LandingPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="courses"
          reference="Course"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseTitle} />
        </ReferenceArrayInput>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
