const TextLabel = (props) => {
    const { label } = props;
    return (
        <span className="font-inter font-normal text-xs leading-22 tracking-tighter text-black">{label}</span>
    )
}

const Title = (props) => {
    //text untuk judul
    const { label,size,textcolor } = props;
    return (
        <div className={`font-inter font-bold ${size} leading-22 tracking-tighter text-left ${textcolor} `}>
            {label}
        </div>
    );
};

const SubTitle = (props) => {
    //text untuk sub text kecil
    const { label,size,textcolor } = props;
    return (
        <div className={`font-inter ${size} font-normal leading-22 tracking-tighter text-left ${textcolor}`}>
            {label}
        </div>
    );
};


export { TextLabel, Title, SubTitle }