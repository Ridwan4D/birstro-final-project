import PropType from "prop-types";
const MenuItemCard = ({item}) => {
    const {image,name,recipe,price} = item
    return (
        <div className="md:flex items-center gap-4 space-y-2">
            <div>
                <img className="md:w-28 md:rounded-tr-[200px] md:rounded-br-[200px] md:rounded-bl-[200px]" src={image} alt="" />
            </div>
            <div className="text-gray-400">
                <h4 className="uppercase md:text-xl">{name}----------</h4>
                <p className="text-sm md:text-base">{recipe}</p>
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