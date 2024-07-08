import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateField({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', length: '', width: '', description: '' });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('fields.store'), {
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
                            <label htmlFor="length" className="col-form-label">Length:</label>
                            <input type="text" className="form-control" name='length' value={data.length} onChange={onChange} id="length"/>
                            {errors && <div className='text-danger mt-1'>{errors.length}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="width" className="col-form-label">Width:</label>
                            <input type="text" className="form-control" name='width' value={data.width} onChange={onChange} id="width"/>
                            {errors && <div className='text-danger mt-1'>{errors.width}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="col-form-label">Description:</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={onChange} id="description"/>
                            {errors && <div className='text-danger mt-1'>{errors.description}</div>}
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
