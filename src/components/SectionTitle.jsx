import PropType from 'prop-types'
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-8 md:w-2/3 mx-auto">
            <p className="text-slate-400 text-sm md:text-xl">{subHeading}</p>
            <h3 className="md:text-4xl md:py-2 border-y-2 md:border-y-4 border-gray-400">{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropType.string,
    subHeading: PropType.string
}
export default SectionTitle;