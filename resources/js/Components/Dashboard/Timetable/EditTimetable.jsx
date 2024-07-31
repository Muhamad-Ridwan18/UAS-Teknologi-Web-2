import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function EditTimetable({ model, subjects = [], teachers = [], classes = [], close }) {
    const { data, setData, put, reset, errors } = useForm({
        class_id: model.class_id || '',
        subject_id: model.subject_id || '',
        teacher_id: model.teacher_id || '',
        start_time: model.start_time || '',
        end_time: model.end_time || '',
        day_of_week: model.day_of_week || '',
    });

    useEffect(() => {
        
        setData({
            class_id: model.class_id || '',
            subject_id: model.subject_id || '',
            teacher_id: model.teacher_id || '',
            start_time: model.start_time || '',
            end_time: model.end_time || '',
            day_of_week: model.day_of_week || '',
        });
    }, [model]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('timetables.update', model.id), {
            onSuccess: () => {
                reset();
                close();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="class_id">Class</label>
                <select
                    id="class_id"
                    name="class_id"
                    className="form-control"
                    value={data.class_id}
                    onChange={handleChange}
                >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                        <option key={cls.id} value={cls.id}>
                            {cls.name} -  {cls.grade}
                        </option>
                    ))}
                </select>
                {errors.class_id && <div className="text-danger">{errors.class_id}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="subject_id">Subject</label>
                <select
                    id="subject_id"
                    name="subject_id"
                    className="form-control"
                    value={data.subject_id}
                    onChange={handleChange}
                >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                        <option key={subject.id} value={subject.id} >
                            {subject.name}
                        </option>
                    ))}
                </select>
                {errors.subject_id && <div className="text-danger">{errors.subject_id}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="teacher_id">Teacher</label>
                <select
                    id="teacher_id"
                    name="teacher_id"
                    className="form-control"
                    value={data.teacher_id}
                    onChange={handleChange}
                >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                            {teacher.name}
                        </option>
                    ))}
                </select>
                {errors.teacher_id && <div className="text-danger">{errors.teacher_id}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="start_time">Start Time</label>
                <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    className="form-control"
                    value={data.start_time}
                    onChange={handleChange}
                />
                {errors.start_time && <div className="text-danger">{errors.start_time}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="end_time">End Time</label>
                <input
                    type="time"
                    id="end_time"
                    name="end_time"
                    className="form-control"
                    value={data.end_time}
                    onChange={handleChange}
                />
                {errors.end_time && <div className="text-danger">{errors.end_time}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="day_of_week">Day of Week</label>
                <input
                    type="text"
                    id="day_of_week"
                    name="day_of_week"
                    className="form-control"
                    value={data.day_of_week}
                    onChange={handleChange}
                />
                {errors.day_of_week && <div className="text-danger">{errors.day_of_week}</div>}
            </div>

            <div className="modal-footer">
                <button type="button" className="btn bg-gradient-secondary" onClick={close}>Close</button>
                <button type="submit" className="btn bg-gradient-success">Update</button>
            </div>
        </form>
    );
}
