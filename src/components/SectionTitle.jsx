import PropType from 'prop-types'
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-8 md:w-1/3 mx-auto">
            <p className="text-[#D99904] text-xl">---{subHeading}---</p>
            <h3 className="text-4xl mt-4 pb-4 border-y-4 border-gray-400">{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropType.string,
    subHeading: PropType.string
}
export default SectionTitle;