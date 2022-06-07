<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();

        $projects = Project::whereBelongsTo($user)->paginate(25);

        return $projects;
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
        $user = auth()->user();

        $fields = $request->validate([
            'name' => 'required|string', 
            'description' => 'string',
            'client' => 'required|string'
        ]);

        $fields['well_cost'] = '0.00';
        $fields['operating_time'] = '0';

        $project = $user->projects()->create($fields);

        $metas = $request->except(['name', 'description', 'client', 'timeline']);

        $timeline = $request->input('timeline');

        foreach ($metas as $key => $value) {
            # code...
            $project->project_meta()->create([
                'meta_key' => $key,
                'meta_value' => json_encode($value) 
            ]);
        }

        foreach($timeline as $key => $value){
            if(!isset($value['total'])){
                $total = $value['rih'] + $value['drill'] + $value['circulate'] + $value['poh'] + $value['casing'] + $value['wh_work'];

                $value['total'] = $total;
            }
            
            $project->project_timeline()->create($value);
        }

        return $project->load(['project_meta']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Project::find($id)->load(['project_meta', 'project_timeline']);
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
        $project = Project::find($id);

        $project->update($request->all());

        $project->refresh()->load(['project_meta']);

        return $project;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);

        return $project->delete();
    }
}