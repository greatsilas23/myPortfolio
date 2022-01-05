import React, { Component } from 'react'
import '../App.css'
import menu from '../res/menu.png'
import MyPortfolio from './MyPortfolio.js'
import AboutAgristores from './AboutAgristores.js'
import MyForm from './MyForm.js'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        num1: 0,
        num2: 0,
        sum: 0
    }
    this.showAboutSection = this.showAboutSection.bind(this)
    this.showValuesSection = this.showValuesSection.bind(this)
    this.showExecutivesSection = this.showExecutivesSection.bind(this)
    this.showSideMenu = this.showSideMenu.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.callBackendAPI = this.callBackendAPI.bind(this)
  }
  componentDidMount(){
    this.callBackendAPI()
        .then(res => this.setState({data: res.express}))
        .catch(err => console.log(err))
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend')
    const body = await response.json()
    if(response.status !== 200){
        throw Error(body.message)
    }
    return body
  }
  showSideMenu(){
    console.log(this.state.sideMenuLog)
  }
  showAboutSection(ev){
    console.log(this.state.aboutLog)
    console.log(ev.currentTarget.parentElement.parentElement)
    this.setState({whatIsShowing: ev.currentTarget.parentElement.parentElement.childNodes[1]})
    console.log(this.state.whatIsShowing)
  }
  showValuesSection(){
    console.log(this.state.valuesLog)
  }
  showExecutivesSection(){
    console.log(this.state.executivesLog)
  }
  render() {
    return (
       <div className="App main_background">
          <div className="container">
              <center>
                  <div className="navigationContainer stickyDiv flex_stuff horiz spaceEven">
                      <div className="myTopLinks moveLeft" onClick={this.showSideMenu}>
                          <img className="changeColor" src={menu} width="26" height="26" alt="menu"/>
                      </div>
                  </div>
                  <div id="informationSection" className="portfolio_text">
                      <div className="flex_stuff horiz positionAtTop spaceEven">
                          <div className="myTopLinks underlineStuff defaultUnderline"><h3>Portfolio</h3></div>
                          <div className="myTopLinks underlineStuff" onClick={this.showAboutSection}><h3>About</h3></div>
                          <div className="myTopLinks underlineStuff" onClick={this.showValuesSection}><h3>Values</h3></div>
                          <div className="myTopLinks underlineStuff" onClick={this.showExecutivesSection}><h3>Excutives</h3></div>
                      </div>
                      <div id="whatIsShowing">
                            <form action="/" method="post">
                                <label htmlFor="num1">First Number</label><br/>
                                <input id="num1" type="text"  name="num1" placeholder = "First Number" onChange={(event) => this.state.num1.setState(event.currentTarget.value)}/><br/>
                                <label htmlFor="num2">Second Number</label><br/>
                                <input id="num2" type="text" name="num2" placeholder = "Second Number"/><br/>
                                <input type="submit" name="submit" value="Calculate"/>
                            </form>
                      </div>
                      <div>
                        <table style={{border: 'solid 2px white', borderCollapse: 'collapse'}}>
                            <tr>
                                <th>NUM1</th>
                                <th>NUM2</th>
                                <th>RESULT</th>
                            </tr>
                            <tr>

                            </tr>
                        </table>
                      </div>
                      <center>
                          <div className="bottomLinkContainer positionAtBottom flex_stuff horiz center_stuff">
                            <div className="bottomLink" style={{backgroundColor: 'white'}}></div>
                            <div className="bottomLink"></div>
                            <div className="bottomLink"></div>
                            <div className="bottomLink"></div>
                          </div>
                      </center>
                  </div>
              </center>
          </div>
       </div>
    );
  }
}

export default App;
