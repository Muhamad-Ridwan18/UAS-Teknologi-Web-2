<?php

namespace App\Http\Controllers;

use App\Models\Field;
use Illuminate\Http\Request;
use App\Http\Resources\FieldResource;
use App\Http\Resources\FieldCollection;

class FieldController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fields = FieldResource::collection(Field::latest()->paginate(10));
        $session = session('success');

        return inertia('Fields/Index', [
            'fields' => $fields,
            'session' => $session,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Field/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'length' => 'required',
            'width' => 'required',
            'description' => 'required',
        ]);

        Field::create($request->all());

        return redirect()->route('fields.index')->with('success', 'Field created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(field $field)
    {
        return inertia('Field/show', [
            'field' => $field,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(field $field)
    {
        return inertia('Field/edit', [
            'field' => $field,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Field $field)
    {
        $request->validate([
            'name' => 'required',
            'length' => 'required',
            'width' => 'required',
            'description' => 'required',
        ]);

        $field->update($request->all());

        return redirect()->route('fields.index')->with('success', 'Field updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(field $field)
    {
        $field->delete();

        return redirect()->route('fields.index')->with('success', 'Field deleted successfully.');
    }
}
