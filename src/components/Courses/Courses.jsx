import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Course from "../Course/Course";

const Courses = ({handleCourses}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <>
        {
            courses.map((course, index) => 
            <Course key={index} 
                course={course}
                handleCourses={handleCourses}>
            </Course>)
        }
            
        </>
    );
};

Courses.propTypes = {
    handleCourses: PropTypes.func.isRequired,
}


export default Courses;