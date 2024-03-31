import { useState, useEffect } from "react";
import { FormField } from "../types";

async function getAllFormFieldsQuery(): Promise<FormField[]> {
    try {
        const token = localStorage.getItem("token"); // Récupération du token depuis le localStorage
        if (!token) {
            throw new Error("No token found in localStorage");
        }

        const response = await fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}/formfield`, {
            headers: {
                Authorization: `Bearer ${token}` // Ajout du token dans l'en-tête Authorization
            }
        });
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
