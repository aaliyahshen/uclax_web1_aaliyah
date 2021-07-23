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
            <p>
            HTML (structure) stands for HyperText Markup Langauge. It was developed in 1990. It provides the structural information of websites, creates hierarchy and delivers content. Using HTML, web developers can add headings, format paragraphs, control line breaks, make lists, emphasize text, create special characters, insert images, create links, build tables, control some styling, and much more.
            Developers do all these things through markup language, which includes tags or element that are used to identify different types of content. For example, there are opening paragraph tags and closing paragraph tags for  paragraph content.
            </p>
            <p>
            CSS (styling) stands for Cascading Style Sheets. While HTML gives the basic and raw structure of the website, CSS is the one that gives the entire website its style (brand presence, visual hierarchy, defines values). It does so by assigning different properties to HTML tags, either specific to single tags, multiple tags, an entire document, or multiple documents. It was developed in 1996 with the purpose to allow the web designers to adopt design elements such as fonts and colors. The name "cascading style sheets" means that the style sheet developed by web designers can override the default style sheet that comes with the browser.
            </p>
            <p>Java Script (behavior) was released in 1995. It is more complicated than HTML and CSS. It is a programming langauge that lets web developers create interactive websites. It modifies website content and makes the website behave in different ways based on users' actions. Some very basic examples of JavaScript in action include confirmation box or slide-in call-to-action (CTA). Others include security password creation, check forms, interactive games, animations and special effects.  
            </p>
        </Essay>
        <Essay
            number={ 3 }
            question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
        >
            <p>
            Single Page Apps (SPAs) refer to web apps that only has one single page. The page is constantly being updated by Javascript. In comparison to multi-page web sites, they are faster and more interactive. This is because multi-page website requires the updates of the entire page whenever there's any data changes on the sites. It sends the new data to the server and returns with a new page. SPAs only updates the part of the page that has been changed or needs to be processed.
            </p>
        </Essay>
        <Essay
            number={ 4 }
            question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
        >
        </Essay>
    </div>
    ); 
}

export default Homework; 

