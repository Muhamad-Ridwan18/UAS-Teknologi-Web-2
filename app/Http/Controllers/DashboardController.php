<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\ClassModel;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // get the count students
        $students = Student::count();
        $teachers = Teacher::count();
        $subjects = Subject::count();
        $classModels = ClassModel::count();

        return inertia('Dashboard', [
            'subjects' => $subjects,
            'students' => $students,
            'teachers' => $teachers,
            'classModels' => $classModels
        ]);
    }
}
