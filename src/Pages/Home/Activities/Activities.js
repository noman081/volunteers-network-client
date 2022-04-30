import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/activity')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);
    return (
        <div className='container my-3'>
            <Row xs={1} md={2} lg={4} className="g-4 my-2">
                {
                    activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
                }
            </Row>
        </div>
    );
};

export default Activities;