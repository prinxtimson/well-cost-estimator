<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectCost extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sub_title',
        'unit',
        'unit_cost',
        'quantity',
        'total'
    ];

    public function project ()
    {
        return $this->belongsTo(Project::class);
    }
}