function Verticalsidebar() {
    return (
        <>
            <div className="navbar-brand-box">
                <a aria-current="page" href="/" class="router-link-active router-link-exact-active logo logo-dark">
                    <span class="logo-sm">

                    </span>
                    <span class="logo-lg">

                    </span>
                </a>
            </div>
            <button type="button" class="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger">
                <span class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            <div data-simplebar="init" class="sidebar-menu-scroll">
                <div class="simplebar-wrapper" style="margin: 0px;">
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset">
                            <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
<div className="simplebar-content p-0">
    <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">

            </li>
        </ul>
    </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Verticalsidebar