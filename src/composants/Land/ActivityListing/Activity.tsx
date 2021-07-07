import React, { useState } from 'react'
import { useEffect } from 'react';
import { getActivities } from '../../../adapters/ActivityManagement/activityAdaptater';
import ActivityList from './ActivityList';

function Activity() {
    const [activities, setActivities] = useState(``)

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await getActivities();
           setActivities(response.data);
        };
      fetchActivities();
    }, []);
    return (
        <div>
            <ActivityList activities={activities}/>
        </div>
    )
}

export default Activity
