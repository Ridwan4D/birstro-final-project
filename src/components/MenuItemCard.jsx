import PropType from "prop-types";
const MenuItemCard = ({item}) => {
    const {image,name,recipe,price} = item
    return (
        <div className="flex items-center gap-4">
            <div>
                <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" width="100" />
            </div>
            <div className="text-gray-400">
                <h4 className="uppercase text-xl">{name}----------</h4>
                <p>{recipe}</p>
            </div>
            <div>
                <h4 className="text-[#BB8506] text-xl">${price}</h4>
            </div>
        </div>
    );
};
MenuItemCard.propTypes = {
    item: PropType.object,
}
export default MenuItemCard;