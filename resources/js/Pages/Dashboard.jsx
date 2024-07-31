import React from 'react'
import Base from '../Layouts/Base'

export default function Dashboard({subjects, students, teachers, classModels }) {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Student</p>
                                <h5 className="font-weight-bolder">
                                {students}
                                </h5>
                                {/* <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+55%</span>
                                since yesterday
                                </p> */}
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Teacher</p>
                                <h5 className="font-weight-bolder">
                                {teachers}
                                </h5>
                                {/* <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+3%</span>
                                since last week
                                </p> */}
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Subject</p>
                                <h5 className="font-weight-bolder">
                                {subjects}
                                </h5>
                                {/* <p className="mb-0">
                                <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                since last quarter
                                </p> */}
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Class</p>
                                <h5 className="font-weight-bolder">
                                {classModels}
                                </h5>
                                {/* <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                                </p> */}
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                            </div>
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

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"}/>
