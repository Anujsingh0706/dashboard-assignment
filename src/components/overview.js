function Overview(props) {
    return (
        <div className="">
            <div className="">
                <div className="d-flex ">
                    <div className="flex-grow-1">
                        <h5 className="card-title mb-3">{props.cardtitle}</h5>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="dropdown">
                            <a className="dropdown-toggle text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fw-semibold">{props.sorts}</span>
                                <span class="text-muted">{props.dropdown}<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">Yearly</a>
                                <a className="dropdown-item" href="#">Monthly</a>
                                <a className="dropdown-item" href="#">Weekly</a>
                                <a className="dropdown-item" href="#">Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overview