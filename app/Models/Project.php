<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'client',
        'well_cost',
        'operating_time',
        'well_cost_summary'
    ];

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function project_meta ()
    {
        return $this->hasMany(Projectmeta::class);
    }

    public function project_timeline ()
    {
        return $this->hasMany(ProjectTimeline::class);
    }

    public function project_cost ()
    {
        return $this->hasMany(ProjectCost::class);
    }
}