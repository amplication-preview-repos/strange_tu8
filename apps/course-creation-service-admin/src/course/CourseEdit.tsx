import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LandingPageTitle } from "../landingPage/LandingPageTitle";
import { MediaTitle } from "../media/MediaTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="landingPage.id"
          reference="LandingPage"
          label="landingPage"
        >
          <SelectInput optionText={LandingPageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
