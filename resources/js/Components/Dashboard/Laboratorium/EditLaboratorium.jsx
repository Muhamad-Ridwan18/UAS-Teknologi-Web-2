import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditLaboratorium({close, model}) {

    const { data, setData, put, reset, errors } = useForm({
        name: model.name || '',
        length: model.length || '',
        width: model.width || '',
        description: model.description || ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('fields.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    useEffect(() => {
        setData({...data,
            name: model.name || '',
            capacity: model.capacity || '',
            floor: model.floor || '',
        });
    }, [model]);

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
                            <label htmlFor="capacity" className="col-form-label">capacity:</label>
                            <input type="text" className="form-control" name='capacity' value={data.capacity} onChange={onChange} id="capacity"/>
                            {errors && <div className='text-danger mt-1'>{errors.capacity}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="floor" className="col-form-label">floor:</label>
                            <input type="text" className="form-control" name='floor' value={data.floor} onChange={onChange} id="floor"/>
                            {errors && <div className='text-danger mt-1'>{errors.floor}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Update</button>
                </div>
            </form>
        </>

    )
}
