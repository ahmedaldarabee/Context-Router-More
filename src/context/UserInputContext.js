import { createContext } from "react";

export let UserInputContext = createContext({
    label: "",
    id: null,
    handleInput: null,
});
