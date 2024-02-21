import React, { useEffect, useState } from 'react';

const SideNav = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  useEffect(() => {
    const isFluid = JSON.parse(localStorage.getItem('isFluid') || 'false');
    if (isFluid) {
      const container = document.querySelector<HTMLElement>('[data-layout]');
      if (container) {
        container.classList.remove('container');
        container.classList.add('container-fluid');
      }
    }
    
    const navbarStyle = localStorage.getItem('navbarStyle');
    if (navbarStyle && navbarStyle !== 'transparent') {
      const navbar = document.querySelector<HTMLElement>('.navbar-vertical');
      if (navbar) {
        navbar.classList.add(`navbar-${navbarStyle}`);
      }
    }
  }, []);

  function handleToggle(){
    setIsToggleOn( Boolean(JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed') || 'false')));

    let result = !isToggleOn;

    localStorage.setItem('isNavbarVerticalCollapsed', result.toString());

  }

  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
      <div className="d-flex align-items-center">
        <div className="toggle-icon-wrapper">
          <button onClick={handleToggle}
            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Toggle Navigation"
          >
            <span className="navbar-toggle-icon"><span className="toggle-line"></span></span>
          </button>
        </div>
        <a className="navbar-brand" href="index.html">
          <div className="d-flex align-items-center ">
            <img className="me-2" src="~/Falcon/assets/img/icons/spot-illustrations/IAM.png" alt="" width="190" />
            <span className="font-sans-serif"><label></label></span>
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content scrollbar">
          <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
            <li className="nav-item">
              <a className="nav-link" href="#dashboard" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dashboard">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon"><span className="fas fa-chart-pie"></span></span>
                  <span className="nav-link-text ps-1">Dashboard</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">Reference</div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <a className="nav-link" href="app/calendar.html" role="button">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon"><span className="fas fa-calendar-alt"></span></span>
                  <span className="nav-link-text ps-1">Account</span>
                </div>
              </a>
              <a className="nav-link" href="app/chat.html" role="button">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon"><span className="fas fa-comments"></span></span>
                  <span className="nav-link-text ps-1">Notification</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideNav