<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTimeline extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'depth',
        'rih',
        'drill',
        'circulate',
        'poh',
        'casing',
        'wh_work',
        'total'
    ];

    public function project ()
    {
        return $this->belongsTo(Project::class);
    }
}