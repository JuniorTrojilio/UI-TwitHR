import React from 'react'
import BirdLogo from '../../assets/Pajarito.png'
import {
  Container,
  Menu,
  Body,
  Navigator,
  Box,
  Banner,
  User,
  Content,
  Info,
  Aside,
  Table
} from './styles'
import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineChartPie,
  HiOutlineCalendar,
  HiOutlineCog,
  HiOutlineArrowRight,
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineBell,
  HiDotsHorizontal,
  HiPhone,
  HiMail,
  HiChatAlt
} from 'react-icons/hi'
import { BsClipboardData } from 'react-icons/bs'
import { ReactComponent as Premium } from '../../assets/Premium.svg'
import { ReactComponent as Notifications } from '../../assets/notifications.svg'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Box>
          <img src={BirdLogo} alt="Bird" width={50} />
          <h1>TwitHR</h1>
        </Box>
        <Navigator>
          <div className="select">
            <HiOutlineViewGrid size={20} />
            <li>Dashboard</li>
          </div>
          <div>
            <HiOutlineUsers size={20} />
            <li>Recruitment</li>
          </div>
          <div>
            <BsClipboardData size={20} />
            <li>Onboarding</li>
          </div>
          <div>
            <HiOutlineChartPie size={20} />
            <li>Reports</li>
          </div>
          <div>
            <HiOutlineCalendar size={20} />
            <li>Calendar</li>
          </div>
          <div>
            <HiOutlineCog size={20} />
            <li>Settings</li>
          </div>
        </Navigator>
        <Banner>
          <div>
            <p>Use our Premium Features Now!</p>
            <HiOutlineArrowRight size={20} />
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
            <HiOutlineSearch size={28} />
            <HiOutlineMail size={28} />
            <div className="notification">
              <HiOutlineBell size={28} />
            </div>

            <div>
              <strong>Mr. Junior</strong>
              <User>
                <img src="https://scontent.fmgf4-2.fna.fbcdn.net/v/t1.0-9/43056097_1904004516350184_1585493529575030784_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Gw2JOp8cJQgAX9vEqE8&_nc_ht=scontent.fmgf4-2.fna&oh=a548ea845a90f94ab70ce27d99f61d91&oe=60344CE0" alt="perfil" />
              </User>
            </div>
          </div>
        </header>
        <Content>
          <Info>
            <div className="layer">
              <div>
                <strong>Hello, Mr. Junior!</strong>
                <p>Today you have 9 new applications.<br />
                  Also you need hire ROR Developer, React JS
                  Developer.
                </p>
                <button>Read more</button>
              </div>
              <Notifications width={200} />
            </div>
            <div className="title">
              <strong>Recruitment Progress</strong>
              <button type="button">View All</button>
            </div>
            <Table>
              <div className="tableTitle">
                <strong>Full Name</strong>
                <strong>Designation</strong>
                <strong>Status</strong>
              </div>
              <div className="cards">
                <div className="perfil">
                  <img src="https://mulherlider.com.br/blog/wp-content/uploads/2016/05/foto-perfil-quadrara.png" alt="" />
                  <p>Mary G. Schuelke</p>
                </div>
                <div className="designation">
                  <div className="tag-red">
                    <p>Project Manager</p>
                  </div>
                </div>
                <div className="status">
                  <div className="situation-red" />
                  <p>Tech Interview</p>
                  <HiDotsHorizontal size={30} />
                </div>
              </div>
              <div className="cards">
                <div className="perfil">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAkpaOoSBkLRoq5iOQD9idXGMm-6dZg2BMw&usqp=CAU" alt="" />
                  <p>Lawrence A. Mason</p>
                </div>
                <div className="designation">
                  <div className="tag-yellow">
                    <p>For Developer</p>
                  </div>
                </div>
                <div className="status">
                  <div className="situation-yellow" />
                  <p>Task</p>
                  <HiDotsHorizontal size={30} />
                </div>
              </div>
              <div className="cards">
                <div className="perfil">
                  <img src="https://i.pinimg.com/originals/0e/69/de/0e69deb2cad588a17e4c12cdd688c230.jpg" alt="" />
                  <p>Jimmy C. Wilson</p>
                </div>
                <div className="designation">
                  <div className="tag-purple">
                    <p>React JS Developer</p>
                  </div>
                </div>
                <div className="status">
                  <div className="situation-purple" />
                  <p>Resume Interview</p>
                  <HiDotsHorizontal size={30} />
                </div>
              </div>
              <div className="cards">
                <div className="perfil">
                  <img src="https://mh.adv.br/wp-content/uploads/2018/10/Caroline_Silva_MH_0206_RT-PERFIL.jpg" alt="" />
                  <p>Vivian J. Joseph</p>
                </div>
                <div className="designation">
                  <div className="tag-green">
                    <p>Node JS Developer</p>
                  </div>
                </div>
                <div className="status">
                  <div className="situation-green" />
                  <p>Final Interview</p>
                  <HiDotsHorizontal size={30} />
                </div>
              </div>
            </Table>
          </Info>
          <Aside>
            <div className="calendarTitle">
              <strong>Ocbtober, 2020</strong>
              <div>
                <button><FaLongArrowAltLeft size={22} /></button>
                <button><FaLongArrowAltRight size={22} /></button>
              </div>
            </div>
            <div className="period">
              <div>
                <p>From</p>
                <p>15.10.20</p>
              </div>
              <div>
                <p>To</p>
                <p>15.10.20</p>
              </div>
            </div>
            <div className="calendar">
              <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
              </ul>
              <ul className="days">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li><span className="active">10</span></li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li><span className="activeYellow">18</span></li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
              </ul>
            </div>
            <div className="information">
              <div className="naming">
                <img src="https://scontent.fmgf4-2.fna.fbcdn.net/v/t1.0-9/43056097_1904004516350184_1585493529575030784_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Gw2JOp8cJQgAX9vEqE8&_nc_ht=scontent.fmgf4-2.fna&oh=a548ea845a90f94ab70ce27d99f61d91&oe=60344CE0" alt="Mr. Junior"/>
                <strong>Mr Junior</strong>
                <p>Sr. HR Manager</p>
              </div>
              <div className="bar">
                <div className="icon">
                  <HiPhone size={24}/>
                </div>
                <div className="icon">
                  <HiMail size={24}/>
                </div>
                <div className="icon">
                  <HiChatAlt size={24}/>
                </div>
              </div>
              <hr/>
              <div className="company">
                <div className="field">
                  <strong>Company</strong>
                  <strong>Joining Date</strong>
                  <strong>Projects</strong>
                </div>
                <div className="response">
                  <p>FoxHr Pvt. Ltd.</p>
                  <p>01/08/2018</p>
                  <p>34 Active</p>
                </div>
              </div>
            </div>
          </Aside>
        </Content>
      </Body>
    </Container>
  )
}

export default Home