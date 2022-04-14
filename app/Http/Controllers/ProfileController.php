<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::withTrashed()->get();

        return $users;
    }

    /**
     * Get authenticated profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function me()
    {
        $user = auth()->user()->load(['profile']);

        return $user;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id)
                    ->load(['profile']);
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
        //
    }

    public function disable($id)
    {
        User::find($id)->delete();

        $user = User::withTrashed()->find($id)->load(['']);

        //Mail::to($user)->send(new UserDeactivate($user->profile));

        return $user;
    }

    public function enable($id)
    {
        User::withTrashed()->find($id)->restore();

        $user = User::withTrashed()->find($id)->load(['']);

        //Mail::to($user)->send(new UserReactivate($user->profile));

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::withTrashed()->find($id)->load(['']);

        $deleted = $user->forceDelete($id);

        //Mail::to($user)->send(new UserDelete($user->profile));

        return $deleted;
    }
}