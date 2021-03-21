import { MdAdd } from 'react-icons/md';
function NewCovid({ onChange, value, onAddNew}){
    return(
        <section>
        <section>
            <input
            onChange={onChange}
            value={value}
            />
            <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
        </section>
        </section>
    )
}

export default NewCovid;