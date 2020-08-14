import React from "react";

export const MockBreadcrumbs = (props: any) => <div className="Breadcrumbs">{props.children}</div>;
export const MockGrid = (props: any) => <div className="Grid">{props.children}</div>;
export const MockTextField = (props:any) => <input className="TextField" type="text" id={props.id}/>;
export const MockTypograghy = (props: any) => <span className="Typography">{props.children}</span>;
export const MockPaper = (props: any) => <div className="Paper">{props.children}</div>;

export const MockKeyboardDatePicker = (props: any) => <input type="date" id={props.id} className="KeyboardDatePicker"/>;
