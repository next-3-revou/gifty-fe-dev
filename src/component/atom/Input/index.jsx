const Input = (props) => {
    const {id,type,value,onChange,className } = props
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
        />
    )
}

export default Input