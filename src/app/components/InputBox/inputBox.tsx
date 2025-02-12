export default function inputBox({type} : {type : string}) {
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
            required
            />
        </div>
    );
}