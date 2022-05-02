<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rig extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'mob',
        'demob',
        'day_rate',
        'solid_control_eqpt',
        'extra_catering',
        'marine_spread',
        'additional_marine_spread',
        'diesel_usage',
        'water',
        'rig_up',
        'well_depth'
    ];
}