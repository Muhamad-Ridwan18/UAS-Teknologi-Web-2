<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\ClassModel;
use App\Models\Timetable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'address' => 'jl. Admin 1',
            'email_verified_at' => now(),
            'remember_token' => \Illuminate\Support\Str::random(10),
        ]);

        Student::create([
            'name' => 'Wahyu',
            'gender' => 'male',
            'address' => 'Student 1 Address',
            'birth_date' => '1990-01-01',
        ]);

        Student::create([
            'name' => 'Aceh',
            'gender' => 'female',
            'address' => 'Student 2 Address',
            'birth_date' => '1990-01-01',
        ]);

        Teacher::create([
            'name' => 'Baharuddin',
            'gender' => 'male',
            'address' => 'Teacher 1 Address',
            'birth_date' => '1990-01-01',
        ]);

        Teacher::create([
            'name' => 'Daffa',
            'gender' => 'male',
            'address' => 'Teacher 2 Address',
            'birth_date' => '1990-01-01',
        ]);

        Subject::create([
            'name' => 'Pendidikan Karakter',
            'code' => 'PK',
        ]);

        Subject::create([
            'name' => 'Bahasa Indonesia',
            'code' => 'BI',
        ]);

        Subject::create([
            'name' => 'Matematika',
            'code' => 'MTK',
        ]);

        ClassModel::create([
            'name' => 'XII RPL ',
            'grade' => '1',
        ]);

        ClassModel::create([
            'name' => 'XII TKJ ',
            'grade' => '2',
        ]);

        ClassModel::create([
            'name' => 'XII MM ',
            'grade' => '3',
        ]);

        Timetable::create([
            'subject_id' => 1,
            'class_id' => 1,
            'teacher_id' => 1,
            'start_time' => '08:00:00',
            'end_time' => '10:00:00',
            'day_of_week' => 'Monday',
        ]);

        Timetable::create([
            'subject_id' => 2,
            'class_id' => 1,
            'teacher_id' => 1,
            'start_time' => '10:00:00',
            'end_time' => '12:00:00',
            'day_of_week' => 'Monday',
        ]);

        Timetable::create([
            'subject_id' => 3,
            'class_id' => 1,
            'teacher_id' => 1,
            'start_time' => '12:00:00',
            'end_time' => '14:00:00',
            'day_of_week' => 'Monday',
        ]);

    }
}
