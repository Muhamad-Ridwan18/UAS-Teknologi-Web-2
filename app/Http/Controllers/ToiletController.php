<?php

namespace App\Http\Controllers;

use App\Models\toilet;
use Illuminate\Http\Request;

class ToiletController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $toilets = Toilet::all();
        $session = session('success');

        return inertia('Toilet/index', [
            'toilets' => $toilets,
            'session' => $session,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Toilet/create');
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
            'floor_location' => 'required',
            'description' => 'required',
        ]);

        Toilet::create($request->all());

        return redirect()->route('toilets.index')->with('success', 'Toilet created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(toilet $toilet)
    {
        return inertia('Toilet/show', [
            'toilet' => $toilet,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(toilet $toilet)
    {
        return inertia('Toilet/edit', [
            'toilet' => $toilet,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, toilet $toilet)
    {
        $request->validate([
            'name' => 'required',
            'length' => 'required',
            'width' => 'required',
            'floor_location' => 'required',
            'description' => 'required',
        ]);

        $toilet->update($request->all());

        return redirect()->route('toilets.index')->with('success', 'Toilet updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(toilet $toilet)
    {
        $toilet->delete();

        return redirect()->route('toilets.index')->with('success', 'Toilet deleted successfully.');
    }
}
