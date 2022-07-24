import './FormInput.css';

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps } = props;
    return (
        <div>
            <label >{label}</label>
            <input {...inputProps} onChange={onChange} className='login'/>
            <span>{errorMessage}</span>
        </div>
    );
}
export default FormInput;