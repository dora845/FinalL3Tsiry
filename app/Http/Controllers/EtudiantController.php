<?php

namespace App\Http\Controllers;

use App\Models\demande;
use App\Models\etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EtudiantController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postDemande(Request $request)
    {
        $etudiant = new etudiant();
        $demande = new demande();
        try {
            $validateUser = Validator::make($request->all(), [
                'email' => 'required|email',
                'numcarte' => 'required',
                'birthdate' => 'date|before:now',
                'mentions' => 'required|exists:infomentions,mentions',
                'parcours' => 'required|exists:infomentions,parcours',
                'niveau' => 'required|exists:infomentions,niveau',
                'type' => 'required',
            ]);
            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors(),
                ], 401);
            };

            $etudiant->numcarte = $request->numcarte;

            $demande->type = $request->type;
            $demande->annee = $request->annee;
            $demande->semestre = $request->semestre;

            etudiant::updateOrCreate(["numcarte" => $request->numcarte], [
                'numcarte' => $request->numcarte,
                'firstname' => $request->firstname,
                'name' => $request->name,
                'birthplace' => $request->birthplace,
                'birthdate' => $request->birthdate,
                'email' => $request->email,
            ]);
            // $etudiant->save();
            // if () {
            $etudiant->demandes()->save($demande);
            return response()->json([
                'status' => true,
                'message' => 'demande envoye',
            ], 200);
            // }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
