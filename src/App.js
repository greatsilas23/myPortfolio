import React, {Component, setState} from 'react'
import Title from './components/Title.js'
import TopMenu from './components/TopMenu.js'
import About from './components/About.js'
import Qualifications from './components/Qualifications.js'
import WorkExperience from './components/WorkExperience.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import ContactUs from './components/ContactUs.js'
import logo from './res/logo.png'
import nyamwasEntLogo from './res/nyamwasEntLogo.png'
import menu from './res/menu.png'
import home from './res/home.png'
import about from './res/about.png'
import projects from './res/projects.png'
import highschool from './res/highschool.jpeg'
import university from './res/university.jpeg'
import college from './res/college.png'
import contacts from './res/contacts.png'
import webDev from './res/webDev.jpg'
import mission from './res/mission.png'
import clerk from './res/clerk.png'
import assistant from './res/assistant.png'
import digitalData from './res/digitalData.png'
import motorVehicle from './res/motorVehicle.png'
import communicationSkills from './res/communicationSkills.png'
import leadership from './res/leadership.png'
import music from './res/music.png'
import academic from './res/academic.png'
import facebook from './res/facebook.png'
import instagram from './res/instagram.png'
import git from './res/git.png'
import availability from './res/availability.jpeg'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTitle: false,
            showTopMenu: false,
            showAbout: false,
            showQualifications: false,
            showWorkExperience: false,
            showSkills: false,
            showProjects: false,
            showContactUs: false,
            root: [
                {content: 'TITLE'},
                {content: 'TOP MENU'},
                {content: 'ABOUT'},
                {content: 'QUALIFICATIONS'},
                {content: 'WORK EXPERIENCE'},
                {content: 'SKILLS'},
                {content: 'PROJECTS'},
                {content: 'CONTACT US'}
            ],
            title: {
                content: 'MY PORTFOLIO',
                description: [
                    {content: 'PORTFOLIO', image: logo},
                    {content: 'NYAMWAS ENT.', image: nyamwasEntLogo}
                ]
            },
            topMenu: {
                content: 'MENU',
                description: [
                    {content:'MENU', image: menu},
                    {content:'HOME', image: home},
                    {content:'ABOUT', image: about},
                    {content:'PROJECTS', image: projects},
                    {content:'CONTACTS', image: contacts}
                ]
            },
            about: {
                content: 'ABOUT',
                description: [
                    {webDeveloper: 'Silas is a Kenyan web developer based in Nairobi who specializes in remote project', image: webDev},
                    {mission: 'The world is a global village and the future is in web development and Machine Learning technology.', image: mission},
                    {availability: 'I am available part time', image: availability}
                ]
            },
            qualifications: {
                content: 'QUALIFICATIONS',
                description: [
                    {highschool: 'Utumishi Academy 2014 - 2017', image: highschool},
                    {college: 'Zalego Academy 2018 - 2019', image: college},
                    {university: 'Jomo Kenyatta University Of Agriculture & Technology 2019 - Present', image: university}
                ]
            },
            workExperience: {
                content: 'WORK EXPERIENCE',
                description:[
                    {dataEntryFacts: 'August 2019: \n Data Entry Volunteer at African Early Childhood Network (AfECN)\n Correcting Erroneous Facts on early childhood education in Sub Saharan African countries'},
                    {dataEntryForms: 'June 2018:\n Data Entry Volunteer at African Early Childhood Network\nKeeping data on AfECN questionnaires confidential and accurate\n Credited for working with accuracy'},
                    {dataEntryBursary: 'May 2018:\nEntry Clerk in filling bursary applications forms for Higher Education Loans Board\nKeeping data on bursary applications confidential and accurate\n Credited for working with accuracy'},
                    {officeAssistant: 'December 2017 - May 2018:\n Office Assistant at Mobis Link Services\n Handling of office register\n Recieving customer calls and handling of queries\nTaking down orders and forwarding to the sales team\nReceiving and dispatching parcels\n Credited for being a quick learner and a team player with minimum supervision'}
                ]
            },
            skills: {
                content: 'SKILLS',
                description: [
                    {digitalData: 'Proficiency in handling and analyzing digital data', image: digitalData},
                    {motorVehicles: 'Proficiency in Motor Vehicle Driving (Manual Vehicle) Class B from Automobile Association Kenya', image: motorVehicle},
                    {communicationSkills: 'Excellent Communication Skills and Proficiency in English Language from exposure to teamwork', image: communicationSkills},
                    {leadershipSkills: 'Leadership skills obtained when serving as Deputy School Captain in Utumishi Academy ub 2017', image: leadership},
                    {musicalInstruments: 'Playing of Musical Instruments (Piano and Guitar)', image: music},
                    {academicSkills: 'Awarded certificates for winning Mathematics Contests and Computer Studies Contests while in 2016 and 2017', image: academic}
                ]
            },
            projects: {
                content: 'PROJECTS',
                description: [
                    {content: 'Age Guesser', link: 'http://greatsilas23.github.io/Age-Guesser', image: git},
                    {content: 'Agristores Technologies', link: 'http://greatsilas23.github.io/Agristores-technologies', image: git},
                    {content: 'Cheki IO', link: 'http://greatsilas23.github.io/ChekiIO', image: git},
                    {content: 'Order Management System', link: 'http://greatsilas23.github.io/Order-MS', image: git},
                    {content: 'Financial MS', link: 'http://greatsilas23.github.io/finacial-MS-', image: git},
                    {content: 'Lyrics Guesser', link: 'http://greatsilas23.github.io/Lyrics-Guesser', image: git},
                    {content: 'Math Club', link: 'http://greatsilas23.github.io/Math-Club', image: git},
                    {content: 'Poker', link: 'http://greatsilas23.github.io/myPokerTH', image: git}
                ]
            },
            contactUs: {
                content: 'CONTACT US',
                description: [
                    {content: 'Instagram', link: 'http://instagram.com/silas.n_', image: instagram},
                    {content: 'Facebook', link: 'http://instagram.com/silas.dopelimitlesity', image: facebook}
                ]
            }
        }
    }
    handleShowTitle = () => {
        setState({showTitle: true})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowTopMenu = () => {
        setState({showTitle: false})
        setState({showTopMenu: true})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowAbout = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: true})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowQualifications = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: true})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowWorkExperience = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: true})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowSkills = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: true})
        setState({showProjects: false})
        setState({showContactUs: false})
    }
    handleShowProjects = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: true})
        setState({showContactUs: false})
    }
    handleShowContactUs = () => {
        setState({showTitle: false})
        setState({showTopMenu: false})
        setState({showAbout: false})
        setState({showQualifications: false})
        setState({showWorkExperience: false})
        setState({showSkills: false})
        setState({showProjects: false})
        setState({showContactUs: true})
    }
    render(){
        return(
            <div className="App">
                {this.state.root.map((item) => {
                    <div style={{height: '10vh', width: '100vw'}}><p>{item.content}</p></div>
                })}

	            {this.state.showTitle && <Title handleClick={this.handleShowTitle} titleDescription={this.state.title.description}/>}
	            {this.state.showTopMenu && <TopMenu handleClick={this.handleShowTopMenu} topMenu={this.state.topMenu.description}/>}
	            {this.state.showAbout && <About handleClick={this.handleShowAbout} aboutDescription={this.state.about.description}/>}
	            {this.state.showQualifications && <Qualifications handleClick={this.handleShowQualifications} qualificationsDescription={this.state.about.description}/>}
	            {this.state.WorkExperience && <WorkExperience handleClick={this.handleShowWorkExperience} workExperienceDescription={this.state.workExperience.description}/>}
	            {this.state.showSkills && <Skills handleClick={this.handleShowSkills} skillDescription={this.state.skills.description}/>}
	            {this.state.showProjects && <Projects handleClick={this.handleShowProjects} projectsDescription={this.state.projects.description}/>}
	            {this.state.showContactUs && <ContactUs handleClick={this.handleShowContactUs} contactUsDescription={this.state.contactUs.description}/>}
            </div>
        )
    }
}

export default App
