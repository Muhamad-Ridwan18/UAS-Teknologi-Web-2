import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateStudent({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', birth_date: '', gender: '', address: '' });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('students.store'), {
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
                            <label htmlFor="birth_date" className="col-form-label">Birth Date:</label>
                            <input type="date" className="form-control" name='birth_date' value={data.birth_date} onChange={onChange} id="birth_date"/>
                            {errors && <div className='text-danger mt-1'>{errors.length}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender" className="col-form-label">Gender:</label>
                            <select 
                                className="form-control" 
                                name='gender' 
                                value={data.gender} 
                                onChange={onChange} 
                                id="gender"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <div className='text-danger mt-1'>{errors.gender}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="col-form-label">address:</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={onChange} id="address"/>
                            {errors && <div className='text-danger mt-1'>{errors.address}</div>}
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
