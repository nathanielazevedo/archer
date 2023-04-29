/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Field } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldUpdateFormInputValues = {
    user_id?: string;
    name?: string;
    status?: string;
};
export declare type FieldUpdateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldUpdateFormOverridesProps = {
    FieldUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldUpdateFormProps = React.PropsWithChildren<{
    overrides?: FieldUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    field?: Field;
    onSubmit?: (fields: FieldUpdateFormInputValues) => FieldUpdateFormInputValues;
    onSuccess?: (fields: FieldUpdateFormInputValues) => void;
    onError?: (fields: FieldUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldUpdateFormInputValues) => FieldUpdateFormInputValues;
    onValidate?: FieldUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FieldUpdateForm(props: FieldUpdateFormProps): React.ReactElement;
