import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateLaboratorium({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', description: '', floor: '', });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('laboratoriums.store'), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="col-form-label">description:</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={onChange} id="description"/>
                            {errors && <div className='text-danger mt-1'>{errors.description}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="floor" className="col-form-label">Floor:</label>
                            <input type="floor" className="form-control" name='floor' value={data.floor} onChange={onChange} id="floor"/>
                            {errors && <div className='text-danger mt-1'>{errors.floor}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>

    )
}
