
const LabelAtom = (params) => {
    const { id, type, className, placeholder, label } = params;
    return (
        <div className="flex flex-col space-y-">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                className={className}
                placeholder={placeholder}
            />
        </div>
    )
}

export default LabelAtom