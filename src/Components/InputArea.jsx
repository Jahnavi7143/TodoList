import React , {useState} from "react";

function InputArea(props){

    const [newText , setNewText] = useState("");

    function handleText(event){
        setNewText(event.target.value);
    }

    return (
        <div className="form">
            <input type="text" onChange={handleText} value={newText} />
            <button 
                onClick={() => {
                props.onAdd(newText);
                setNewText("");
            }} >
            <span>Add</span>
            </button>
        </div>
    );
    

}

export default InputArea;



