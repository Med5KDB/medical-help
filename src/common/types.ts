
export enum FormFieldValueType {
    Text = 'TEXT',
    Number = "NUMBER",
    Date = "DATE",
    Boolean = "BOOLEAN",
    Single_choice = "SINGLE_CHOICE",
    Multi_choice = "MULTI_CHOICE"
}

export interface FormFieldValue {
    id: string;
    FormFieldkey: String;
    value: FormFieldValueType

}

export interface FormField {
    id: string,
    key: string,
    name: string,
    generalCategory: string,
    specificCategory?: string,
    valueType: FormFieldValueType,
    isCalculated?: boolean
    description: string
}


