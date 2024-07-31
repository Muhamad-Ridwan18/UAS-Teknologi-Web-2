import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import CreateStudent from '../../Components/Dashboard/Student/CreateStudent';
import EditStudent from '../../Components/Dashboard/Student/EditStudent';
import { Inertia } from '@inertiajs/inertia';


export default function Index(props) {
    const { data: students, meta } = props.students;

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

    const destroyStudent = () => {
        Inertia.delete(
            route('students.destroy', state.id), 
            { onSuccess: () => destroyCloseTrigger() }
        );
    };

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Create New Student"> 
                    <CreateStudent close={addCloseTrigger} />
                </Dialog>

                <Dialog trigger={updateTrigger} title={`Update Student: ${state.name}`}> 
                    <EditStudent model={state} close={updateCloseTrigger} />
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Stident: ${state.name}`}>
                    <p>Are you sure you want to delete this Student?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-gradient-secondary" onClick={destroyCloseTrigger}>Close</button>
                        <button type="button" className="btn bg-gradient-danger" onClick={destroyStudent}>Delete</button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">                            
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Student Table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={addDialogHandler} type="button" className="btn bg-gradient-success btn-block mb-3">
                                            Create New Student
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0" width="100%">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-centter">#</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">gender</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">birth date</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Address</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students.map((student, index) => (
                                                <tr key={student.id}>
                                                    <td className='text-left'>{meta.from + index}</td>
                                                    <td className='text-left'>
                                                        <h6 className="mb-0 text-sm">{student.name}</h6>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{student.birth_date}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0">{student.gender}</p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <span className="text-xs font-weight-bold">{student.address}</span>
                                                    </td>
                                                    <td className="align-middle text-center" width="10%">
                                                        <div>
                                                            <button type="button" onClick={() => openUpdateDialog(student)} className="btn btn-vimeo btn-icon-only mx-2">
                                                                <span className="btn-inner--icon"><i className="fas fa-pencil-alt"></i></span>
                                                            </button>
                                                            <button type="button" onClick={() => openDestroyDialog(student)} className="btn btn-youtube btn-icon-only">
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

Index.layout = (page) => <Base key={page} children={page} title={"Manage students"} />;
