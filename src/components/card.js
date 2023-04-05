function Card(props) {
    return (
        <div className="card">
        <div className="card-body">
            <div className="d-flex align-items-center pe-4">
                <div className="avatar">
                    <div className="avatar-title rounded bg-primary bg-gradient">
                        <i className="fa-solid fa-chart-pie"></i>
                    </div>
                </div>
            </div>
            <div className="flex-grow-1"><p className="text-muted mb-1">{props.name}</p><h4 className="mb-0">{props.value}</h4></div>
            <div className="flex-shrink-0 align-self-end ms-2"><div className="badge rounded-pill font-size-13 badge-soft-success">{props.percentage} </div></div>
        </div>
    </div>
    )
  }
  export default Card