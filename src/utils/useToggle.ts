import { useState, useCallback } from 'react';

const useToggle = (initialValue = false): [boolean, () => void]  => {

    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        console.log(value)
        setValue(state => !state);
    }, []);

    return [value, toggle];
};

export default useToggle;
