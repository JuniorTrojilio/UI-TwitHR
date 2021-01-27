import React from 'react'
import BirdLogo from '../../assets/Pajarito.png'
import { Container, Menu, Body, Navigator, Box, Banner, User, Content, Info, Aside } from './styles' 
import { 
  HiOutlineViewGrid, 
  HiOutlineUsers, 
  HiOutlineChartPie, 
  HiOutlineCalendar, 
  HiOutlineCog, 
  HiOutlineArrowRight,
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineBell
 } from 'react-icons/hi'
import { BsClipboardData } from 'react-icons/bs'
import { ReactComponent as Premium } from '../../assets/Premium.svg'
import { ReactComponent as Notifications } from '../../assets/notifications.svg'

const Home: React.FC = () => {
    return (
      <Container>
        <Menu>
          <Box>
            <img src={BirdLogo} alt="Bird" width={50}/>
            <h1>TwitHR</h1>
          </Box>
          <Navigator>
            <div className="select">
              <HiOutlineViewGrid size={20}/>            
              <li>Dashboard</li>
            </div>
            <div>
              <HiOutlineUsers size={20}/> 
              <li>Recruitment</li>
            </div>
            <div>
              <BsClipboardData size={20}/> 
              <li>Onboarding</li>
            </div>
            <div>
              <HiOutlineChartPie size={20}/> 
              <li>Reports</li>
            </div>
            <div>
              <HiOutlineCalendar size={20}/> 
              <li>Calendar</li>
            </div>
            <div>
              <HiOutlineCog size={20}/> 
              <li>Settings</li>
            </div>
          </Navigator>
          <Banner>
            <div>
              <p>Use our Premium Features Now!</p>
              <HiOutlineArrowRight size={20}/>
              <div className="svg">
                <Premium />  
              </div>      
            </div>            
          </Banner>
        </Menu>
        <Body>
          <header>
            <h2>Dashboard</h2>
            <div>
            <HiOutlineSearch size={28}/>
            <HiOutlineMail size={28}/>
            <div className="notification">
              <HiOutlineBell size={28}/>
            </div>

              <div>
                <strong>Mr. Junior</strong>
                <User>
                  <img src="https://scontent.fmgf4-2.fna.fbcdn.net/v/t1.0-9/43056097_1904004516350184_1585493529575030784_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Gw2JOp8cJQgAX9vEqE8&_nc_ht=scontent.fmgf4-2.fna&oh=a548ea845a90f94ab70ce27d99f61d91&oe=60344CE0" alt="perfil"/>
                </User>
              </div>
            </div>
          </header>
          <Content>
            <Info>
              <div className="layer">
                <div>
                <strong>Hello, Mr. Junior!</strong>
                <p>Today you have 9 new applications.<br/>
                  Also you need hire ROR Developer, React JS
                  Developer.
                </p>
                <button>Read more</button>
                </div>
                <Notifications width={200}/>
              </div>
            </Info>
            <Aside>
            </Aside>
          </Content>
        </Body>
      </Container>
  )
}

export default Home