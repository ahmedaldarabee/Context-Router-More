import { UserInputContext } from "../context/UserInputContext";
import InputName from "./InputName";

const InputHandler = () => {
    const formHandler = (data) => {
        console.log("Your data: ", data.target.value);
    };

    return (
        <>
            <div className="text-center mt-5">
                <UserInputContext.Provider
                value={{
                    label: "Enter user name here",
                    id: 1,
                    handleInput: formHandler,
                }}
                >
                <InputName />
                </UserInputContext.Provider>
            </div>
        </>
    );
}

export default InputHandler