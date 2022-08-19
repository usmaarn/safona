<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $validated['username'])
            ->orWhere('username', $validated['username'])->first();

        if (!$user) {
            return back()->withErrors([
                'username' => 'Incorrect Username or Email Address',
            ]);
        }

        $hashCheck = Hash::check($validated['password'], $user->password);

        if ($hashCheck) {
            Auth::login($user, $request->input('remember'));
            $request->session()->regenerate();
            return redirect()->intended('/');
        }

        return back()->withErrors([
            'password' => 'Incorrect Password!',
        ]);
    }
}
