
// import React from 'react'
// import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";


// const NavBar = (props) => {
//     const { loginWithRedirect, isAuthenticated, user } = useAuth0();
//     const { logout } = useAuth0();


//     return (
//         <div>
//             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">Taza Khabar</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li  className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
//                         </ul>

                        //     <div>
                        //     <select  style={{ width:'100px', height:'30px'}} value={props.cname} onChange={(e) =>{ props.setCname(e.target.value); }}>
                        //     <option value="in">India</option>
                        //     <option value="us">America</option>
                        //     <option value="au">Australia</option>
                        //     <option value="gb">Great britain</option>
                        //     <option value="eg">Egypt</option>
                        //     <option value="ae">United Arab Emirates</option>
                        //     <option value="ar">Argentina</option>
                        //     <option value="at">Austria</option>
                        //     <option value="be">Belgium</option>
                        //     <option value="bg">Bulgaria</option>
                        //     <option value="br">Brazil</option>
                        //     <option value="ca">Canada</option>
                        //     <option value="ch">Switzerland</option>
                        //     <option value="cn">China</option>
                        //     <option value="co">Colombia</option>
                        //     <option value="cu">Cuba</option>
                        //     <option value="cz">Czechia</option>
                        //     <option value="de">Germany</option>
                        //     <option value="fr">France</option>
                        //     <option value="gr">Greece</option>
                        //     <option value="hk">Hong Kong</option>
                        //     <option value="hu">Hungary</option>
                        //     <option value="id">Indonesia</option>
                        //     <option value="ie">Ireland</option>
                        //     <option value="il">Israel</option>
                        //     <option value="it">Italy</option>
                        //     <option value="jp">Japan</option>
                        //     <option value="kr">Korea</option>
                        //     <option value="lt">	Lithuania</option>
                        //     <option value="lv">Latvia</option>
                        //     <option value="ma">Morocco</option>
                        //     <option value="mx">Maxico</option>
                        //     <option value="my">Malaysia</option>
                        //     <option value="ng">Nigeria</option>
                        //     <option value="nl">Netherlands</option>
                        //     <option value="no">Norway</option>
                        //     <option value="nz">New Zealand</option>
                        //     <option value="ph">Philippines</option>
                        //     <option value="pl">Poland</option>
                        //     <option value="pt">Portugal</option>
                        //     <option value="ro">Romania</option>
                        //     <option value="rs">Serbia</option>
                        //     <option value="ru">Russian Federation</option>
                        //     <option value="sa">Saudi Arabia</option>
                        //     <option value="se">Sweden</option>
                        //     <option value="sg">Singapore</option>
                        //     <option value="si">Slovenia</option>
                        //     <option value="sk">Slovakia</option>
                        //     <option value="th">Thailand</option>
                        //     <option value="tr">Türkiye</option>
                        //     <option value="tw">Taiwan</option>
                        //     <option value="ua">Ukraine</option>
                        //     <option value="ve">Venezuela</option>
                        //     <option value="za">South Africa</option>

                        //     </select>
                        //    </div>
//                            {
//                             isAuthenticated && (
//                                 <div>
//                                 <img style={{borderRadius:'60%'}} className='mx-2' src={user.picture} alt={user.name}  width="30" height="30" />
                                   
//                                 </div>
//                                 )
//                            }
//                            {
//                             isAuthenticated ? <button style={{ width:'100px' , height:'30px'}} class=" btn-outline-success mx-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//                             Log Out
//                             </button> : <button style={{ width:'100px' , height:'30px'}} class=" btn-outline-success mx-2" onClick={() => loginWithRedirect()}>Log In</button>
//                            }
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )

// }

// export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = (props) => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Taza Khabar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center ">
            <div>
                            <select  style={{ width:'100px', height:'30px'}} value={props.cname} onChange={(e) =>{ props.setCname(e.target.value); }}>
                            <option value="in">India</option>
                            <option value="us">America</option>
                            <option value="au">Australia</option>
                            <option value="gb">Great britain</option>
                            <option value="eg">Egypt</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="be">Belgium</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="ch">Switzerland</option>
                            <option value="cn">China</option>
                            <option value="co">Colombia</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">Czechia</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="gr">Greece</option>
                            <option value="hk">Hong Kong</option>
                            <option value="hu">Hungary</option>
                            <option value="id">Indonesia</option>
                            <option value="ie">Ireland</option>
                            <option value="il">Israel</option>
                            <option value="it">Italy</option>
                            <option value="jp">Japan</option>
                            <option value="kr">Korea</option>
                            <option value="lt">	Lithuania</option>
                            <option value="lv">Latvia</option>
                            <option value="ma">Morocco</option>
                            <option value="mx">Maxico</option>
                            <option value="my">Malaysia</option>
                            <option value="ng">Nigeria</option>
                            <option value="nl">Netherlands</option>
                            <option value="no">Norway</option>
                            <option value="nz">New Zealand</option>
                            <option value="ph">Philippines</option>
                            <option value="pl">Poland</option>
                            <option value="pt">Portugal</option>
                            <option value="ro">Romania</option>
                            <option value="rs">Serbia</option>
                            <option value="ru">Russian Federation</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="se">Sweden</option>
                            <option value="sg">Singapore</option>
                            <option value="si">Slovenia</option>
                            <option value="sk">Slovakia</option>
                            <option value="th">Thailand</option>
                            <option value="tr">Türkiye</option>
                            <option value="tw">Taiwan</option>
                            <option value="ua">Ukraine</option>
                            <option value="ve">Venezuela</option>
                            <option value="za">South Africa</option>

                            </select>
                           </div>
              {isAuthenticated && (
                <div className="d-flex align-items-center">
                  <img
                    style={{ borderRadius: '50%' }}
                    className="mx-2"
                    src={user.picture}
                    alt={user.name}
                    width="30"
                    height="30"
                  />
                  <button
                    style={{ width: '100px', height: '30px' }}
                    className="btn btn-outline-success mx-2"
                    onClick={() =>
                      logout({ logoutParams: { returnTo: window.location.origin } })
                    }
                  >
                    Log Out
                  </button>
                </div>
              )}
              {!isAuthenticated && (
                <button
                  style={{ width: '100px', height: '30px' }}
                  className="btn btn-outline-success mx-2"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
