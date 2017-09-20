<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected function validateLogin(User $user)
    {
        $valid = in_array($user->role, ['admin', 'user', 'superadmin', 'tester']);
        if (!$valid) {
            app('auth')->logout();
        }
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $response = [
            'success' => false,
            'message' => 'no login'
        ];

        $result = app('auth')->attempt([
            'username' => $request->input('username'),
            'password' => $request->input('password')
        ]);

        if ($result) {
            $this->validateLogin(app('auth')->user());
            $response['success'] = true;
            $response['message'] = 'Can login';
        }

        //set the session_id into users table
        $session_id = $request->session()->getId();
        app('db')->table('users')
            ->where('username',$request->input('username'))
            ->update(['session_id' => $session_id]);


        return response()->json($response);
    }
}
