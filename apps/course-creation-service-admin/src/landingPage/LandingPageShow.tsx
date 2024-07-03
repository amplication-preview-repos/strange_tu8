import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LANDINGPAGE_TITLE_FIELD } from "./LandingPageTitle";

export const LandingPageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="Course"
          target="landingPageId"
          label="Courses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdBy" source="createdBy" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="landingPage"
              source="landingpage.id"
              reference="LandingPage"
            >
              <TextField source={LANDINGPAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
