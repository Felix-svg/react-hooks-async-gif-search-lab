import { useState } from "react";

function GifSearch({ onSearch }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(input);
    }

    function handleInputChange(e){
        setInput(e.target.value)
    }

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInputChange} />
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    );
}

export default GifSearch;
