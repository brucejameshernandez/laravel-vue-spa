<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $response = [
            'success' => false,
            'message' => trans('auth.failed')
        ];

        return response()->json($response);
    }
}
