<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class infomention extends Model
{
    use HasFactory;
    protected $fillable = [
        "mentions",
        "parcours",
        "niveau",
    ];
    public function demandes()
    {
        return $this->belongsToMany(demande::class, 'demande_infomentions');
    }
}
