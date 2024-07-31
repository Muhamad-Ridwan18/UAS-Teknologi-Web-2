import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateTimetable({ subjects = [], teachers = [], classes = [], close }) {
    const [form, setForm] = useState({
        class_id: '',
        subject_id: '',
        teacher_id: '',
        start_time: '',
        end_time: '',
        day_of_week: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('timetables.store'), form, {
            onSuccess: () => {
                setForm({
                    class_id: '',
                    subject_id: '',
                    teacher_id: '',
                    start_time: '',
                    end_time: '',
                    day_of_week: '',
                });
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
                    value={form.class_id}
                    onChange={handleChange}
                >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                        <option key={cls.id} value={cls.id}>{cls.name} - {cls.grade}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="subject_id">Subject</label>
                <select
                    id="subject_id"
                    name="subject_id"
                    className="form-control"
                    value={form.subject_id}
                    onChange={handleChange}
                >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="teacher_id">Teacher</label>
                <select
                    id="teacher_id"
                    name="teacher_id"
                    className="form-control"
                    value={form.teacher_id}
                    onChange={handleChange}
                >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="start_time">Start Time</label>
                <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    className="form-control"
                    value={form.start_time}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="end_time">End Time</label>
                <input
                    type="time"
                    id="end_time"
                    name="end_time"
                    className="form-control"
                    value={form.end_time}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="day_of_week">Day of Week</label>
                <input
                    type="text"
                    id="day_of_week"
                    name="day_of_week"
                    className="form-control"
                    value={form.day_of_week}
                    onChange={handleChange}
                />
            </div>

            <div className="modal-footer">
                <button type="button" className="btn bg-gradient-secondary" onClick={close}>Close</button>
                <button type="submit" className="btn bg-gradient-success">Save</button>
            </div>
        </form>
    );
}
