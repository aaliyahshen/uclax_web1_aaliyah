import React from 'react'; 

import Essay from './Essay.jsx'; 

const Homework = () => {
    return (
        <div>
            <h2>HOMEWORK</h2>
            <Essay
                number={ 1 }
                question='What is the difference between Git, Github and Heruku?'
        >
            <p>
                Git: 
                an extremely popular high-quality version control system developed in 2005. The version control system tracks and logs the changes that developers make, allowing developers to have access to every revision of their projects. Once installed, it operates locally on the computers.
            </p> 
            <p>
                Github: 
                the web-based Git repository hosting service. It functions as a social networking site for developers, where developers can share one another's code and work on code together. 
            </p>
            <p>
                Heroku: 
                a platform as a service (PaaS) that enables developers to build, run and opearte applications. In relation to Git, it uses Git as the primary means for deploying applications. It's essentially Github with web servers. It is an essay way for codes to be deployed to applications on a web server and then shared.  
            </p>
        </Essay>
        <Essay
            number={ 2 }
            question='Explain the difference between HTML, CSS and JS'
        >
            My answer is as follows 
        </Essay>
    </div>
    ); 
}

export default Homework; 

