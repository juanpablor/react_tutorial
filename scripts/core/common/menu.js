/** @jsx React.DOM */

var React = require('React');

var Menu = React.createClass({
  render: function() {

  	var divStyle = {
  		display: 'none'
  	}
    var dashboardMenu = "dashboard-menu-open"

    return (
         <nav id="dashboard-menu" className="dashboard-menu">
            <ul className='leftSide'>
                <li className='logoBox'></li>
                <li className='sideNav'>
                    <p>
                        <svg className="icon_dashboards">
                            <path d="M6,9H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C7,9.4,6.6,9,6,9z M5,14H2v-3h3V14z M15,9h-5   c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z M14,14h-3v-3h3V14z M15,0h-5C9.4,0,9,0.4,9,1v5   c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z M14,5h-3V2h3V5z M6,0H1C0.4,0,0,0.4,0,1v5c0,0.6,0.4,1,1,1h5   c0.6,0,1-0.4,1-1V1C7,0.4,6.6,0,6,0z M5,5H2V2h3V5z"/>
                        </svg>
                        Dashboards
                    </p>
                    <ul>
                        <li page-id="9d507e71-7a73-49ce-a99a-854d16186f25"  className="pageButton">
                        <svg  className="line" viewBox="0 0 21 40">
                        <g>
                            <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                            <circle cx="19" cy="39.5" r="2"></circle>
                        </g>
                        </svg>
                        <span>Today</span>
                        <svg  className="favorite favorited" viewBox="0 0 14.6 15.2">
                            <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                        </svg>
                        </li>
                        <li page-id="624c7c33-4c68-4394-97e4-1b16560d7fa1"  className="pageButton current">
                            <svg  className="line" viewBox="0 0 21 40">
                                <g>
                                    <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                                    <circle cx="19" cy="39.5" r="2"></circle>
                                </g>
                            </svg>
                            <span>This Week</span>
                            <svg  className="favorite" viewBox="0 0 14.6 15.2">
                                <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                            </svg>
                        </li>
                        <li page-id="a7d376fb-1d0d-4b14-a53d-7e7bb2649a01"  className="pageButton">
                            <svg  className="line" viewBox="0 0 21 40">
                                <g>
                                    <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                                    <circle cx="19" cy="39.5" r="2"></circle>
                                </g>
                            </svg>
                            <span>This Month</span>
                            <svg  className="favorite" viewBox="0 0 14.6 15.2">
                                <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                            </svg>
                        </li>
                        <li page-id="6d3ff962-009c-4f6a-976e-2cd20f59e0b2"  className="pageButton">
                            <svg  className="line" viewBox="0 0 21 40">
                                <g>
                                    <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                                    <circle cx="19" cy="39.5" r="2"></circle>
                                </g>
                            </svg>
                            <span>All Time</span>
                            <svg  className="favorite" viewBox="0 0 14.6 15.2">
                                <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                            </svg>
                        </li>
                        <li page-id="3ce463e0-623d-4123-aba2-ae9631c6fcf0"  className="pageButton">
                            <svg  className="line" viewBox="0 0 21 40">
                                <g>
                                    <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                                    <circle cx="19" cy="39.5" r="2"></circle>
                                </g>
                            </svg>
                            <span>Submissions</span>
                            <svg  className="favorite favorited" viewBox="0 0 14.6 15.2">
                                <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                            </svg>
                        </li>
                        <li page-id="d8fab1f9-3a24-49ea-8084-2762adf962b0"  className="pageButton">
                            <svg  className="line" viewBox="0 0 21 40">
                                <g>
                                    <polygon points="1,39 1,0 0,0 0,39 0,39 0,40 21,40 21,39"></polygon>
                                    <circle cx="19" cy="39.5" r="2"></circle>
                                </g>
                            </svg>
                            <span>Productivity</span>
                            <svg  className="favorite favorited" viewBox="0 0 14.6 15.2">
                                <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"></path>
                            </svg>
                        </li>
                    </ul>
                </li>
                <li className="link_users">
                    <a className='link' href="../users">
                        <svg className='icon_users'>
                            <path d="M15,16h-2.2H3.2H1c-0.6,0-1-0.4-1-1v-3c0-1.9,1.6-3.5,4.1-4.3
                                C4,7.5,4,7.2,4,7V4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4v3c0,0.2,0,0.5-0.1,0.7C14.4,8.5,16,10.1,16,12v3C16,15.6,15.6,16,15,16z M10,4
                                c0-1.1-0.9-2-2-2C6.9,2,6,2.9,6,4v3c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2V4z M14,12c0-1.1-1.2-2-2.9-2.5C10.4,10.4,9.3,11,8,11
                                c-1.3,0-2.4-0.6-3.1-1.5C3.2,10,2,10.9,2,12v2h1h0.6H11h1h0.4H14V12z"/>
                        </svg>
                        Users
                    </a>
                    <svg className="favorite" viewBox="0 0 14.6 15.2">
                        <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"/>
                    </svg>
                </li>
                <li className="link_groups">
                    <a className='link' href="../groups">
                        <svg className='icon_groups'>
                            <path d="M15,12h-1h-0.1h-1.4c-0.4-0.8-1.2-1.5-2.2-2H14V9
                                c0-0.6-0.6-1.1-1.4-1.5C12.1,8.4,11.1,9,10,9V7c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1C9.4,2,9,2.4,9,3v1.4c-0.5-0.6-1.2-1-2-1.2V3
                                c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v2.6c1.8,0.7,3,2,3,3.4c0,0.2,0,2,0,2C16,11.6,15.6,12,15,12z M9,7v2.6c1.8,0.7,3,2,3,3.4
                                c0,0.2,0,2,0,2c0,0.6-0.4,1-1,1h-1H9.9H2.1H2H1c-0.6,0-1-0.4-1-1c0,0,0-1.8,0-2c0-1.5,1.2-2.8,3-3.4V7c0-1.7,1.3-3,3-3
                                C7.7,4,9,5.3,9,7z M3.4,11.5C2.6,11.9,2,12.4,2,13v1h8v-1c0-0.6-0.6-1.1-1.4-1.5C8.1,12.4,7.1,13,6,13S3.9,12.4,3.4,11.5z M7,7
                                c0-0.6-0.4-1-1-1S5,6.4,5,7v3c0,0.6,0.4,1,1,1s1-0.4,1-1V7z"/>
                        </svg>
                        Groups
                    </a>
                    <svg className="favorite" viewBox="0 0 14.6 15.2">
                        <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"/>
                    </svg>
                </li>
                <li className="logout_wrap">
                    <a className='link' href='#'>
                        <svg className='icon_logout'>
                            <path d="M15,0H8C7.4,0,7,0.4,7,1c0,0.6,0.4,1,1,1h6v12H8c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V1   C16,0.4,15.6,0,15,0z M7,12l4-4L7,4v3H1C0.4,7,0,7.4,0,8c0,0.6,0.4,1,1,1h6V12z"/>
                        </svg>
                        Logout
                    </a>
                    <svg className="favorite" viewBox="0 0 14.6 15.2">
                        <path d="M9.8,5.6l4.5,0c0.2,0,0.3,0.2,0.2,0.4L11,9.5  c-0.1,0.1-0.1,0.1-0.1,0.2l1.8,5.2c0.1,0.2-0.1,0.4-0.3,0.3l-4.9-3c-0.1,0-0.2,0-0.2,0l-5.1,3c-0.2,0.1-0.4-0.1-0.3-0.3l1.8-5.2  c0-0.1,0-0.2-0.1-0.2L0.1,6c-0.1-0.1,0-0.4,0.2-0.4l4.6,0C4.9,5.6,5,5.5,5,5.4l2.1-5.3C7.2,0,7.5,0,7.5,0.1l2.1,5.3  C9.6,5.5,9.7,5.6,9.8,5.6z"/>
                    </svg>
                </li>
            </ul>
            <ul className='topSide'>
                <li className='left'>
                    <ul>
                        <li>
                            <a href="#" className="dashboard-menu-trigger"><span>Menu</span></a>
                        </li>
                        <li className="lockPage icon_lock" style={divStyle}></li>
                        <li className="dashboardDropDown"><span>Default</span><i className="arrow"></i>

                            <ul>
                        <li className="dashboardDropDown"><span>item1</span></li>
                        <li className="dashboardDropDown"><span>item2</span></li>
                            </ul>
                        </li>

                        <li className='toggleUpdateLi'>
                            <span className='toggleUpdate' data-placement="bottom" title="Pause Auto Updating">
                                <span className='circleIcon'>
                                    <svg className="icon_wifi">
                                        <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M15.9,6L14,7.9c-0.2,0.2-0.4,0.2-0.6,0L11.6,6
                                        c-0.2-0.3-0.1-0.4,0.1-0.5h1.7C12.9,2.9,10.7,1,8,1C5.9,1,4.1,2.2,3.2,3.9L2.2,3.5C3.3,1.4,5.5,0,8,0c3.2,0,5.9,2.4,6.4,5.5h1.4
                                        C16,5.7,16.1,5.9,15.9,6z M2.5,5.6l1.9,1.9C4.6,7.6,4.5,7.8,4.3,8H2.7c0.7,2.3,2.8,4,5.3,4c1.9,0,3.6-1,4.6-2.5l0.9,0.4
                                        C12.4,11.8,10.3,13,8,13c-3.1,0-5.6-2.1-6.3-5H0.2C0,7.8-0.1,7.8,0.1,7.5L2,5.6C2.1,5.4,2.4,5.4,2.5,5.6z"/>
                                    </svg>
                                </span>
                            </span>
                        </li>
                        <li id="sharePage" style={divStyle}><span>item1</span></li>
                        <li id="addPage" style={divStyle}><span>item2</span></li>
                    </ul>
                </li>
                <li className="right">
                    <ul>
                        <li className="fav_users">
                            <a className="link" href="../users">
                                <svg className="icon_users">
                                    <path d="M15,16h-2.2H3.2H1c-0.6,0-1-0.4-1-1v-3c0-1.9,1.6-3.5,4.1-4.3
                                        C4,7.5,4,7.2,4,7V4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4v3c0,0.2,0,0.5-0.1,0.7C14.4,8.5,16,10.1,16,12v3C16,15.6,15.6,16,15,16z M10,4
                                        c0-1.1-0.9-2-2-2C6.9,2,6,2.9,6,4v3c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2V4z M14,12c0-1.1-1.2-2-2.9-2.5C10.4,10.4,9.3,11,8,11
                                        c-1.3,0-2.4-0.6-3.1-1.5C3.2,10,2,10.9,2,12v2h1h0.6H11h1h0.4H14V12z"></path>
                                </svg>
                             Users
                            </a>
                        </li>
                        <li className="fav_groups">
                            <a className="link" href="../groups">
                                <svg className="icon_groups">
                                    <path d="M15,12h-1h-0.1h-1.4c-0.4-0.8-1.2-1.5-2.2-2H14V9
                                        c0-0.6-0.6-1.1-1.4-1.5C12.1,8.4,11.1,9,10,9V7c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1C9.4,2,9,2.4,9,3v1.4c-0.5-0.6-1.2-1-2-1.2V3
                                        c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v2.6c1.8,0.7,3,2,3,3.4c0,0.2,0,2,0,2C16,11.6,15.6,12,15,12z M9,7v2.6c1.8,0.7,3,2,3,3.4
                                        c0,0.2,0,2,0,2c0,0.6-0.4,1-1,1h-1H9.9H2.1H2H1c-0.6,0-1-0.4-1-1c0,0,0-1.8,0-2c0-1.5,1.2-2.8,3-3.4V7c0-1.7,1.3-3,3-3
                                        C7.7,4,9,5.3,9,7z M3.4,11.5C2.6,11.9,2,12.4,2,13v1h8v-1c0-0.6-0.6-1.1-1.4-1.5C8.1,12.4,7.1,13,6,13S3.9,12.4,3.4,11.5z M7,7
                                        c0-0.6-0.4-1-1-1S5,6.4,5,7v3c0,0.6,0.4,1,1,1s1-0.4,1-1V7z"></path>
                                </svg>
                            Groups                                
                            </a>          
                        </li>
                    </ul>
                </li>
            </ul> 
        </nav>
    );
  }
});
module.exports = Menu;