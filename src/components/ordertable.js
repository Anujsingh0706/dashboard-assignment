function Ordertable(props) {
    return (
        <div className="border-bottom border-end p-3 h-100">
            <p className="text-muted text-truncate mb-1">{props.tablename}</p>
            <h5 className="text-truncate mb-0">{props.tablevalue}</h5>
        </div>
    )
}
export default Ordertable