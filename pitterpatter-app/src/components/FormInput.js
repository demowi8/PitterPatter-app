import './FormInput.css';

const FormInput = (props) => {
    const {label, onChange, id, ...inputProps } = props;
    return (
        <div >
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} className='login'/>

        </div>
    );
}
export default FormInput;