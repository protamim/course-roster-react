import PropTypes from 'prop-types';
import { BsCurrencyDollar, BsBook } from 'react-icons/bs';

const Course = ({course, handleCourses}) => {
    const {credit, courseImg, courseTitle, courseDesc, coursePrice} = course;
    
    return (
        <>
            <div className='flex flex-col gap-3 justify-between bg-white p-4 rounded-sm hover:shadow-2xl transition-[position,box-shadow] relative hover:-top-2'>
                <div className='w-full max-h-40 lg:max-w-[260px] lg:max-h-[160px]'>
                    <img className='h-full w-full rounded-md object-cover object-top' src={courseImg} alt={courseTitle} />
                </div>
                <div>
                    <h3 className='font-semibold'>{courseTitle}</h3>
                </div>
                <div>
                    <p> {courseDesc.slice(0, 100)} </p>
                </div>
                <div className='flex gap-3 justify-between'>
                    <div className='flex gap-2 flex-wrap justify-center items-center'>
                        <span> <BsCurrencyDollar/> </span>
                        <h4>Price: {coursePrice}</h4>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center justify-center'>
                        <span><BsBook/></span>
                        <span>Credit: {credit}hr</span> 
                    </div>
                </div>
                <div>
                    <button onClick={()=> handleCourses(courseTitle, credit, coursePrice)} className='bg-blue-600 w-full p-2 text-white hover:bg-blue-700 transition-all'>Select</button>
                </div>
            </div>
        </>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCourses: PropTypes.func.isRequired,
};

export default Course;