import React from 'react'; 

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx'; 
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';


const Homework = () => {
    
    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>

        { media.lg && <SunAndMoon /> }

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
                <p>
                Notes from class: Common myth is that search engines cannot find index sub pages, but it is no longer the case. Cross Site Script is an issue regardless multi or single page apps. API calls and JS being able to load content on the fly, and only that which is needed. 
                    
                </p>
            </Essay>

            <Essay
                number={ 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                <p>
                Web designer focuses on the style of the page. They might be skilled at graphic design and know how to use softwares like Adobe Illustrator and Photoshop to create styled elements for various parts of the website. They may use code like HTML and CSS to present these designs as well.
                </p>
                <p>
                Besides the style of the page, another main responsibility of web designer is user experience. They need to carry out research about user demographics, website's business goals and users' point of interests etc. Using softwares like Figma and other prototyping tools, they design and map out the journey that user goes through from the landing page till they close the browser. 
                </p>
                <p>
                Front end developer helps to actually build the website according to the design by web designers. They use coding languages such as HTML, CCS, React and Javascript to make sure what user sees on the website are visually interesting and functional. Because front end developers' responsibilities are related to what the user can see, they are also known as client-side development. Front end developer primarily works with the browswer, while back end developer works with server and database.  
                </p>
                <p>
                Back end developer manages what the user does not see. It usually involves more complicated software languages (e.g. PHP, python). Examples of responsibilities of back end developers include managing the databased, the server and security.  
                </p>
            </Essay>

            <Essay
                number= { 5 }
                question='Distinguish the difference Site Relative, Document Relative, and Absolute Paths.'
            >
                <p>Absolute paths contain a complete URL, which includes a protocol, the website's domain name and possibly a specific file, subfolder, or page name. Absolute path is used for linking a document or asset to another server.</p>
                <p>Document-relative paths omit the part of the absolute path that is the same for both the current document and the linked document or asset, and is consisted of the portion of the path that differs. They’re particularly useful when the current document and the linked document or asset are in the same folder and are likely to remain together.</p>
                <p>For local links, it is better to use relative paths than absolute paths. It prevents the links from not functioning when the domain changes. It also provides greater flexibility for moving files. </p>
                <p>Site root–relative paths describe the path from the site’s root folder to a document. It is best used for HTML files that are frequently being moved from folders to folders. Because the link is to the site root, as it gets moved, the link does not change. A site root–relative path begins with a leading forward slash, which stands for the root folder of the site. </p>
            </Essay>

            <Essay
                number= { 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
            >
                <p>Joint Photographic Experts Group (Bitmap), proprietary lossy compression. Million of colors. </p>
                <p>Graphic Interchange Format: (Bitmap): supports animation, support 266 colors (logo, flat graphics) </p>
                <p>Portable Graphic Group: True Alpha Transparency (million of colors), lossless compression, 256 color just like gif </p>
                <p>Scalable Vector Graphics: for logos, line art, icons. Vector-based, rather than bitmapped. XML files. No loss of integrity at size. </p>
            </Essay>
            <Essay
                number= { 7 }
                question= 'Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                <p>Project Manager: in charge of planning, resources and project delivery. </p>
                <p>Business Analyst: analyzes prior and existing business data to improve decision making process</p>
                <p>Scum Master: managed communication between team members, keeps the sprint moving along-agile processes. (Derived: Rugby)</p>
                <p>UX Designer: UX stands for user experience. Usability. User flow and journey. Prototype. Content Strategy. Visual design</p>
                <p>Web Developer/Engineer: designing and developing web applications. Functionality/features - and security</p>
                <p>Quality Assurance Tester: </p>
                <p>DevOps: connects development and operations team - creates harware and software to deliver applications</p>
            </Essay>
            <Essay 
                number= { 8 }
                question= 'What is considered the right size for an image or video asset?'
            >
                <p>Size for images in the context of website refer to image pixel dimensions (width and height in pixels) or the image file size (KB or MB). It is not about the inches or cm of the image. </p>
                <p>Ideal image size differs depending on devices and the usage of the image. Generally, low image quality is preferred to prevent from slow web loading, which could loss viewer's attention and affects SEO. File size of the iamge should be as small as possible.</p>
                <p>Generally the image ratio is 16*9 and DMI are between 1500 (ideal for mobile) to 2500 (idea for full-width screen) pixels. Videos are usually 30-40 seconds long for duration, and file size should be between 25 to 30 MB. </p>

            </Essay>

            <Essay
                number= { 9 }
                question= 'What does it mean for a company to be Agile? What are the pros and cons of being agile?'
            >
                <p>Agile is a software development methodology. It breaks up the software development process into minimal viable products—the smallest and simplest of what one tries to build. The software is then put out to the market. The software is improved as it receives feedback and encounters problems. There are people who are very passionate about Agile and more details can be found at the Agile manifesto.</p>
                <p>Another main software development methodology is waterfall. With this method, one thinks about the specificity of the software ideas carefully, takes time to do lots of research, then devotes some time to develop it and also makes sure that everything works. </p>
                <p>Agile works the best when the software requires small updates and with the emphasis of getting to the market fast. Examples include social media apps, in which the competition is very fierce,  and there's a big need to adapt to customer's need through updates. </p>
                <p>Waterfall works the best when the quality of the software is more important than the speed and that it is important for the software to work. An example is banking app, in which both the bank and the customers could suffer consequences if there are mistakes. </p>
                <p>Agile also has stand-up meetings where people literally have meetings stand up, which is for the purpose of staying away from technology and stimulate communication and planning.</p>
                <p>Agile iteration are known as design sprints (typically last for two weeks). Sprints translate business goals to what is known as requirements, which are then translated into tickets, of which progress are tracked on. </p>
                <p>The person who is in charge of all the design sprints are called scrum master. They are responsible to make sure that everyone is working and help them to solve problems. </p>
                <p>Agile also has stand-up meetings where people literally have meetings stand up, which is for the purpose of staying away from technology and stimulate communication and planning.</p>
            </Essay>

            <Essay
                number= { 10 }
                question= 'What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                <p>answer goes here</p>    
            </Essay>    

            <Essay
                number= { 11 }
                question= 'When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'
            >
                <p>Web images are considered part of the content (HTML) when it has semantic meanings, as equivalent to text. On the contrary, if the images are merely for decoration purposes, without any meaning, it should be considered as CSS background images.</p>    
                <p>Reference: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML</p>
            </Essay>  
                
            <Essay
                number= { 12 }
                question= "what is the difference between ID's, Classes and Tags? How does specificity play a role in the selection of HTML elements (both in CSS and JS)?"
            >
                <p><b>Question 1:</b></p>    
                <p>In CSS, IDs and classes are the two of the most common selectors used to target elements to which a style should be applied. The biggest difference between ID's and Classes are that ID is unique in a page and can only be applied to one HTML element (e.g. tags: any HTML tag used to mark up the content), while class are not unique and can be applied to multiple HTML elements. </p>    
                <p>ID selectors are defined using a hash sign. Again, because ID selector is unique, it cannot be used to style more than one element on a page.</p>
                <p>Class selectors are defined using a period, followed by the value of the class that the style would be applied. Class selectors are not unique and one element can also have multiple classes applied.</p>
                <p>Another difference between IDs and classes is that classes are only used for applying styles to elements, while ID can be used by the browser for navigation. By assigning an element an ID, the element can be directed through a special URL link.</p>
                <p>IDs are useful in Javascript because of its uniqueness, classes are less as commonly used.</p>
                <p>Reference: https://careerkarma.com/blog/css-class-vs-id-2/</p>
                <p><b>Question 2:</b></p>
                <p>Specificity can be considered as a rank or score that determines which style declarations would be applied to an element when there are two or more conflicting CSS rules pointing to the same element. </p>
                <p>To get a sense of specificity, universal selectors have low specificity, while ID selectors have high specificity. </p>
                <p>Reference: https://www.w3schools.com/css/css_specificity.asp </p>
            </Essay>  

            <Essay
                number= { 13 }
                question= "What is a CSS preprocessor? What are some examples? In React, what are styled components? How do styled components violate separation of concerns?" 
            >
                <p>answer goes here</p>    
            </Essay>  

            <Essay
                number= { 14 }
                question='final project defined'
            >
                <p>answer goes here</p>    
            </Essay>  
        </div>
    ); 
}

export default Homework; 

