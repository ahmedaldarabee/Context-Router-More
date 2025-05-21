import { useContext } from "react";
import { UserInputContext } from "../context/UserInputContext";

const InputName = () => {
    const nameContext = useContext(UserInputContext);
    console.log(nameContext);
    return (
        <form>
        <div className="flex flex-col gap-1 justify-center items-center">
            <label htmlFor="username" className="cursor-pointer">{nameContext?.label}</label>
            <input
            id="username"
            autoComplete="username"
            onChange={nameContext?.handleInput}
            type="text"
            placeholder="Enter your name"
            className="border-2 border-sky-400 rounded-md p-1 focus:outline-none cursor-pointer"
            />
        </div>
        </form>
    );
};

export default InputName;
