<?php

namespace App\Http\Controllers;

use App\Models\Rig;
use Illuminate\Http\Request;

class RigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Rig::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'mob' => 'required|numeric',
            'demob' => 'required|numeric',
            'day_rate' => 'required|numeric',
            'solid_control_eqpt' => 'required|numeric',
            'extra_catering' => 'required|numeric',
            'marine_spread' => 'required|numeric',
            'additional_marine_spread' => 'required|numeric',
            'diesel_usage' => 'required|numeric',
            'water' => 'required|numeric'
        ]);

        $rig = Rig::create($fields);

        return $rig;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Rig::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rig = Rig::find($id);

        $rig->update($request->all());

        $rig->refresh();

        return $rig;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rig = Rig::find($id);

        return $rig->delete();
    }
}