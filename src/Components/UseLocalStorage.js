import { useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue )return savedValue


    return initialValue
}

export default function UseLocalStorage(key, initialValue) {
    const [value, setValue] = useState(initialValue)
}