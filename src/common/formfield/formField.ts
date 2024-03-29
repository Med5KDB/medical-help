import { useState, useEffect } from "react";
import { FormField } from "../types";

async function getAllFormFieldsQuery(): Promise<FormField[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}/formfield`);
        if (!response.ok) {
            throw new Error("Error retrieving form fields");
        }
        return response.json();
    } catch (error) {
        console.error("An error has occurred : ", error);
        return [];
    }
}

export default function getAllFormFields(): FormField[] {
    const [formFields, setFormFields] = useState<FormField[]>([]);

    useEffect(() => {
        getAllFormFieldsQuery()
            .then((formFields) => {
                setFormFields(formFields);
            })
            .catch((error) => {
                console.error("An error occurred while fetching form fields:", error);
            });
    }, []);

    return formFields;
}
