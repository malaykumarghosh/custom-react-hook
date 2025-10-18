import { useState } from "react";

function UseToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    return [value, toggle];
}

export default UseToggle