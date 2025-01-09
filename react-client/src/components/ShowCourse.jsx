import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function ShowCourse(props) {
    let navigate = useNavigate()
    let {id} = useParams();
    //
    const [course, setCourse] = useState({});
    const [showLoading, setShowLoading] = useState(true);
    const apiUrl = "/api/api/courses/" + id;
  
    useEffect(() => {
      setShowLoading(false);
      const fetchData = async () => {
        const result = await axios(apiUrl);
        console.log('results from courses',result.data);
  
        setCourse(result.data);
        setShowLoading(false);
      };
  
      fetchData();
    }, []);
  
    const editCourse = (id) => {
      navigate('/editcourse/' + id);
      
    };
  
    const deleteCourse = (id) => {
      setShowLoading(true);
      const data = { courseCode: course.courseCode, courseName: course.courseName, section: course.section, semester: course.semester };
      //
      axios.delete(apiUrl, data)
        .then((result) => {
          setShowLoading(false);
          navigate('/listcourses')
        }).catch((error) => setShowLoading(false));
    };
  
    return (
      <div>
        {showLoading && <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> }    
          <h1>Course Code: {course.courseCode}</h1>
          <p>Course Name: {course.courseName}</p>
          <p>Section: {course.section}</p>
          <p>Semester: {course.semester}</p>
  
          <p>
            <Button type="button" variant="primary" onClick={() => { editCourse(course._id) }}>Edit</Button>&nbsp;
            <Button type="button" variant="danger" onClick={() => { deleteCourse(course._id) }}>Delete</Button>
          </p>
      </div>
    );
  }
  
  export default ShowCourse;
  