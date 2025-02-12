import { ChangeEventHandler } from "react";

export default function inputBox({type, value, onChange} : {type : string, value:string, onChange : ChangeEventHandler<HTMLInputElement>}) {
    return (
        <div className="my-2 mx-auto text-xl w-full flex justify-center">
            <input
            className="w-8/12
                       px-3 py-2
                       border rounded-full 
                       shadow-md text-xl text-center
                       transition-all duration-500 
                       transform
                       focus:w-9/12"
            type={type}
            value={value}
            onChange={onChange}
            required
            />
        </div>
    );
}