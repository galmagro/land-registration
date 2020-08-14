import React from 'react';
import LandlordForm from "../LandlordForm";
import renderer from 'react-test-renderer';
import {
    MockBreadcrumbs,
    MockGrid, MockKeyboardDatePicker,
    MockPaper,
    MockTextField,
    MockTypograghy
} from "../../mocks/material-ui-mocks";
import {MockLink} from "../../mocks/mock-react-router";

jest.mock("@material-ui/core", () => {
    return {
        Breadcrumbs: (props: any) => <MockBreadcrumbs>{props.children}</MockBreadcrumbs>,
        Grid: (props: any) => <MockGrid>{props.children}</MockGrid>,
        Paper: (props: any) => <MockPaper>{props.children}</MockPaper>,
        TextField: (props: any) => <MockTextField id={props.id}/>,
        Typography: (props: any) => <MockTypograghy>{props.children}</MockTypograghy>
    }
});

jest.mock("@material-ui/pickers", () => {
    return {
        KeyboardDatePicker: (props: any) => <MockKeyboardDatePicker id={props.id}/>
    }
});

jest.mock("react-router-dom", () => {
    return {
        Link: (props: any) => <MockLink>{props.children}</MockLink>
    }
});

it('should compile correctly', () => {
    const component = renderer.create(<LandlordForm/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should have identification fields', () => {
    const component = renderer.create(<LandlordForm/>);
    const componentInstance = component.getInstance();
    expect(componentInstance?.findByProps({id: "first_name"})).not.toBeNull();
    expect(componentInstance?.findByProps({id: "last_name"})).not.toBeNull();
    expect(componentInstance?.findByProps({id: "landlord_dob"})).not.toBeNull();
    expect(componentInstance?.findByProps({id: "landlord_id"})).not.toBeNull();
    expect(componentInstance?.findByProps({id: "landlord_ref"})).not.toBeNull();
});
