<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variablemeta extends Model
{
    use HasFactory;

    protected $fillable = [
        'meta_key',
        'meta_value',
    ];

    public function variable ()
    {
        return $this->belongsTo(Variable::class);
    }
}