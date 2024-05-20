import PropType from 'prop-types'
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-8 md:w-1/3 mx-auto">
            <p className="text-[#D99904] text-sm md:text-xl">---{subHeading}---</p>
            <h3 className="md:text-4xl md:mt-4 md:pb-4 border-y-2 md:border-y-4 border-gray-400">{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropType.string,
    subHeading: PropType.string
}
export default SectionTitle;