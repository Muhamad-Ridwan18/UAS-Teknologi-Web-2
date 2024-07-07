<?php

namespace App\Http\Controllers;

use App\Models\Laboratorium;
use Illuminate\Http\Request;

class LaboratoriumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $laboratoriums = Laboratorium::all();
        $session = session('success');

        return inertia('Laboratoriums/index', [
            'laboratoriums' => $laboratoriums,
            'session' => $session,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Laboratoriums/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'floor' => 'required',
        ]);

        Laboratorium::create($request->all());

        return redirect()->route('laboratoriums.index')->with('success', 'Laboratorium created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Laboratorium $laboratorium)
    {
        return inertia('Laboratoriums/show', [
            'laboratorium' => $laboratorium,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Laboratorium $laboratorium)
    {
        return inertia('Laboratoriums/edit', [
            'laboratorium' => $laboratorium,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Laboratorium $laboratorium)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'floor' => 'required',
        ]);

        $laboratorium->update($request->all());

        return redirect()->route('laboratoriums.index')->with('success', 'Laboratorium updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Laboratorium $laboratorium)
    {
        $laboratorium->delete();

        return redirect()->route('laboratoriums.index')->with('success', 'Laboratorium deleted successfully.');
    }
}
