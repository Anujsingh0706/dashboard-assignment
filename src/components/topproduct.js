function Topproducts(props) {
    return (
        <div className="simplebar-content p-0">
            <ul className="list-unstyled mb-0">
                <li className="px-3 py-4">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                                <div className="avatar-title bg-gradient rounded-1">
                                    {props.numeric}
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-muted mb-1 text-truncate"> {props.para} </p>
                            <div className="fw-semibold font-size-15">{props.price}</div>
                        </div>
                        <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded-2 text-center"> {props.value} </h5>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Topproducts