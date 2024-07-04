
const IconComponent = ({iconName}) => {
    const baseUrl = "../../../assets/images/footer"
    const key = process.env.KEY
    console.log(key);
    console.log("baseUrl: ", baseUrl);
    const iconUrl = `${baseUrl}/${iconName}.png`;
    console.log(iconUrl);
    return (
        <div>
            <img src={iconUrl} alt={iconName}></img>
        </div>
    )
}
export default IconComponent;