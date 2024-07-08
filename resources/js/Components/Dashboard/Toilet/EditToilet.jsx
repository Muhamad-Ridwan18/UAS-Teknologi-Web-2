import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditToilet({ close, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name || '',
        length: model.length || '',
        width: model.width || '',
        floor_location: model.floor_location || '',
        description: model.description || '',
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('toilets.update', model.id), {
            data,
            onSuccess: () => {
                reset(),
                close()
            },
        });
    }

    useEffect(() => {
        setData({
            name: model.name || '',
            length: model.length || '',
            width: model.width || '',
            floor_location: model.floor_location || '',
            description: model.description || '',
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name" />
                        {errors.name && <div className='text-danger mt-1'>{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="length" className="col-form-label">Length:</label>
                        <input type="text" className="form-control" name='length' value={data.length} onChange={onChange} id="length" />
                        {errors.length && <div className='text-danger mt-1'>{errors.length}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="width" className="col-form-label">Width:</label>
                        <input type="text" className="form-control" name='width' value={data.width} onChange={onChange} id="width" />
                        {errors.width && <div className='text-danger mt-1'>{errors.width}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="floor_location" className="col-form-label">floor_location:</label>
                        <input type="text" className="form-control" name='floor_location' value={data.floor_location} onChange={onChange} id="floor_location" />
                        {errors.floor_location && <div className='text-danger mt-1'>{errors.floor_location}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-form-label">Description:</label>
                        <input type="text" className="form-control" name='description' value={data.description} onChange={onChange} id="description" />
                        {errors.description && <div className='text-danger mt-1'>{errors.description}</div>}
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
