import React from "react"
import Card from "./card"
import Sidebar from "./sidebar"
import Overview from "./overview"
import Ordertable from "./ordertable"
import Ordertable2 from "./ordertable2"
import Topproducts from "./topproduct"

export default function Dashboard() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-4">
                                <Card name="revenue" value="$21,456" percentage="+ 2.65%" />
                            </div>
                            <div className="col-lg-4">
                                <Card name="Orders" value="5,643" percentage="- 0.82%" />
                            </div>
                            <div className="col-lg-4">
                                <Card name="Customers" value="45,254" percentage="- 1.04%" />
                            </div>
                        </div>
                        <div className="card d-block">
                            <div className="card-body d-block pb-0">
                                <Overview cardtitle="Overview" dropdown="Yearly" sort="Sort By:" />
                            </div>
                            <div className="row px-4">
                                <div className="col-lg-3">
                                    <div className="mt-3 mb-3">
                                        <p className="text-muted mb-1">This Month</p>
                                        <div className="d-flex flex-wrap align-items-center gap-2">
                                            <h2 className="mb-0">$24,568</h2>
                                            <div className="badge rounded-pill font-size-13 badge-soft-success"> + 2.65% </div>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <Ordertable tablename="Orders" tablevalue="5,643" />
                                        </div>
                                        <div className="col-lg-6">
                                            <Ordertable2 tablename="Sales" tablevalue="16,273" />
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <Ordertable tablename="Order value" tablevalue="12.03 %" />
                                        </div>
                                        <div className="col-lg-6">
                                            <Ordertable2 tablename="Customers" tablevalue="21,456" />
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <Ordertable tablename="Income" tablevalue="$35,652" />
                                        </div>
                                        <div className="col-lg-6">
                                            <Ordertable2 tablename="Expenses" tablevalue="$12,248" />
                                        </div>
                                    </div>


                                </div>
                                <div className="col-lg-9">
                                    chart
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body d-block">
                                        <Overview cardtitle="User Activity" dropdown="weekly" />
                                      
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                            <div className="card">
                                    <div className="card-body d-block">
                                <Overview cardtitle="Order Status" dropdown="weekly" />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="card">
                                    <div className="card-body d-block">
                                <Overview cardtitle="Top Product" dropdown="Monthly" />
                                <Topproducts numeric="#1" para="Polo blue T-shirt" price="$ 25.4" value="3.82k" />
                                <Topproducts numeric="#2" para="Hoodie for men" price="$ 24.5" value="3.14k" />
                                <Topproducts numeric="#3" para="Red color Cap" price="$ 22.5" value="2.84k" />
                                <Topproducts numeric="#4" para="Pocket T-shirt" price="$ 21.5" value="2.06k" />
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}