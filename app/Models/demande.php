<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class demande extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'annee',
        'semestre',
    ];
    public function etudiants()
    {
        return $this->belongsToMany(etudiant::class, 'demande_etudiants', 'demande_id', 'etudiant_numcarte');
    }
    public function infomentions()
    {
        return $this->belongsTo(infomention::class, 'demande_infomentions');
    }
}
