import { useState } from "react";
    export const AddCategory = ({onNewCategory}) => {
        const [inputValue, setInputValue] = useState('');
        const onChangeInput = ({target})=>{
            setInputValue(target.value);
        }
        const OnSubmitForm = (e)=>{
            e.preventDefault();
            if(inputValue.trim().length <= 1) return ;  
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
        return (<>
            <form className="form-search" onSubmit={OnSubmitForm}>
             <input type="text" placeholder="Search Gift" value={inputValue} onChange={onChangeInput} />
             <button type="submit">Buscar</button>
            </form>
        </>);
    }