<?php

namespace App\Http\Controllers;

use App\Models\demande;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;

class DemandeController extends BaseController
{
    public function getAll($type)
    {
        $demande = demande::all();
        if ($type == "mention") {

            $result = $demande->where("type", "validation")->fresh("etudiants");
            return $this->sendReponse($result, 'tous les validations de credit');
        } elseif ($type == "scolarite") {
            $result = $demande->whereIn('type', ["releve", "certificat"])->fresh("etudiants");
            return $this->sendReponse($result, 'tous les demandes sco');
        } else {
            return $this->sendError('not found');
        }
    }
}
