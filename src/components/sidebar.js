import pic from "../components/images/background.jpg"
import img from "../components/images/avatar-1.cc3a697a.jpg"
function Sidebar() {
    return (
        <div className="user-sidebar">
                            <div className="card">
                                <div className="card-body-1 p-0">
                                    <div className="user-profile-img">
                                        <img src={pic} alt="pic" className="profile-img profile-foreground-img rounded-top" />
                                        <div className="overlay-content rounded-top">
                                            <div className="">
                                                <div className="user-nav p-3">
                                                    <div className="d-flex justify-content-end">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pic-midle">
                                        <div className="text-center">
                                            <img src={img} alt="img" className="avatar-xl rounded-circle img-thumbnail" />
                                            <div className="mt-3"><h5 className="mb-1">Jennifer Bennett</h5><p className="text-muted">Product Designer</p></div>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="row text-center pb-3">
                                            <div className="col-6 border-end">
                                                <div className="p-1"><h5 className="mb-1">1,269</h5><p className="text-muted mb-0">Products</p></div>
                                            </div>
                                            <div className="col-6"><div className="p-1"><h5 className="mb-1">5.2k</h5><p className="text-muted mb-0">Followers</p></div></div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="mb-4">
                                        <div className="d-flex align-items-start px-3">
                                            <div className="flex-grow-1"><h5 className="card-title mb-3">Earning</h5></div>
                                            <div className="">
                                                <a href="#">
                                                    <i className="fa-solid fa-circle-info"></i>   </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className="mb-4">
                                    <h5 className="card-title mb-3 px-3">
                                        Recent Activites
                                    </h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-2 px-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                        <div className="text-center">
                                                            <h5 className="mb-0">12</h5>
                                                            <div>Sep</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 pt-2 text-muted">
                                                    <p className="mb-0"> Responded to need “Volunteer Activities" </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2 px-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                        <div className="text-center">
                                                            <h5 className="mb-0">11</h5>
                                                            <div>Sep</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 pt-2 text-muted">
                                                    <p className="mb-0"> Everyone realizes would be desirable...<a href="#">  Read More</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2 px-4">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                        <div className="text-center">
                                                            <h5 className="mb-0">10</h5>
                                                            <div>Sep</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 pt-2 text-muted">
                                                    <p className="mb-0"> Joined the group “Boardsmanship Forum”</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    )
  }
  export default Sidebar