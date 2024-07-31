import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import CreateTimetable from '../../Components/Dashboard/Timetable/CreateTimetable';
import EditTimetable from '../../Components/Dashboard/Timetable/EditTimetable';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {
    const { data: timetables, meta } = props.timetables;
    const { data: teachers } = props.teachers;
    const { data: subjects } = props.subjects;
    const { data: classes } = props.classes;
    const [state, setState] = useState({});
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] = useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog();

    const openUpdateDialog = (field) => {
        setState(field);
        updateDialogHandler();
    };

    const openDestroyDialog = (field) => {
        setState(field);
        destroyDialogHandler();        
    };

    const destroyTimetable = () => {
        Inertia.delete(
            route('timetables.destroy', state.id), 
            { onSuccess: () => destroyCloseTrigger() }
        );
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        return `${hours}:${minutes}`;
      };

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Create New Timetable"> 
                    <CreateTimetable subjects={subjects} teachers={teachers} classes={classes} close={addCloseTrigger} />
                </Dialog>

                <Dialog trigger={updateTrigger} title={`Update Timetable`}> 
                    <EditTimetable model={state} subjects={subjects} teachers={teachers} classes={classes} close={updateCloseTrigger} />
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Timetable: ${state.id}`}>
                    <p>Are you sure you want to delete this timetable?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-gradient-secondary" onClick={destroyCloseTrigger}>Close</button>
                        <button type="button" className="btn bg-gradient-danger" onClick={destroyTimetable}>Delete</button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">                            
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Timetable Table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={addDialogHandler} type="button" className="btn bg-gradient-success btn-block mb-3">
                                            Create New Timetable
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0" width="100%">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">#</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Class</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Subject</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Teacher</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Start Time</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">End Time</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Day of Week</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {timetables.map((timetable, index) => (
                                                <tr key={timetable.id}>
                                                    <td className='text-center'>{meta.from + index}</td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{timetable.class.name} - {timetable.class.grade}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{timetable.subject.name}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{timetable.teacher.name}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{formatTime(timetable.start_time)}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{formatTime(timetable.end_time)}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{timetable.day_of_week}</p>
                                                    </td>
                                                    <td className="align-middle text-center" width="10%">
                                                        <div>
                                                            <button type="button" onClick={() => openUpdateDialog(timetable)} className="btn btn-vimeo btn-icon-only mx-2">
                                                                <span className="btn-inner--icon"><i className="fas fa-pencil-alt"></i></span>
                                                            </button>
                                                            <button type="button" onClick={() => openDestroyDialog(timetable)} className="btn btn-youtube btn-icon-only">
                                                                <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        { meta && meta.links && meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link
                                    as="button"
                                    className={`${link.active ? 'bg-info' : 'btn bg-gradient-secondary text-white'} page-link`}
                                    href={link.url || ''}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

Index.layout = (page) => <Base key={page} children={page} title={"Manage Timetables"} />;
