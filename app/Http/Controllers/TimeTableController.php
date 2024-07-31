<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TimetableResource;
use App\Http\Resources\TimetableCollection;
use App\Http\Resources\TeacherResource;
use App\Http\Resources\TeacherCollection;
use App\Http\Resources\SubjectResource;
use App\Http\Resources\SubjectCollection;
use App\Http\Resources\ClassResource;
use App\Http\Resources\ClassCollection;
use App\Models\Timetable;
use App\Models\ClassModel; 
use App\Models\Subject;
use App\Models\Teacher;

class TimetableController extends Controller
{
    public function index()
    {
        $timetables = TimetableResource::collection(Timetable::with(['class', 'subject', 'teacher'])->latest()->paginate(10));
        $session = session('success');

        $subjects = SubjectResource::collection(Subject::all());
        $teachers = TeacherResource::collection(Teacher::all());
        $classes = ClassResource::collection(ClassModel::all());

        // dd($timetables, $subjects, $teachers, $classes);
        return inertia('Timetables/Index', [
            'timetables' => $timetables,
            'subjects' => $subjects,
            'teachers' => $teachers,
            'classes' => $classes,
            'session' => $session,
        ]);
    }

    

    public function store(Request $request)
    {
        $request->validate([
            'class_id' => 'required|exists:classes,id',
            'subject_id' => 'required|exists:subjects,id',
            'teacher_id' => 'required|exists:teachers,id',
            'start_time' => 'required',
            'end_time' => 'required|after:start_time',
            'day_of_week' => 'required|string',
        ]);

        Timetable::create($request->all());

        return redirect()->route('timetables.index')->with('success', 'Timetable created successfully.');
    }


    public function update(Request $request, Timetable $timetable)
    {
        $request->validate([
            'class_id' => 'required|exists:classes,id',
            'subject_id' => 'required|exists:subjects,id',
            'teacher_id' => 'required|exists:teachers,id',
            'start_time' => 'required',
            'end_time' => 'required|after:start_time',
            'day_of_week' => 'required|string',
        ]);

        $timetable->update($request->all());

        return redirect()->route('timetables.index')->with('success', 'Timetable updated successfully.');
    }

    public function destroy(Timetable $timetable)
    {
        $timetable->delete();

        return redirect()->route('timetables.index')->with('success', 'Timetable deleted successfully.');
    }
}
