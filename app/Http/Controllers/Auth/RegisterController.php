<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'firstname' => ['required', 'alpha', 'min:3', 'max:10'],
            'lastname' => ['required', 'alpha', 'min:3', 'max:10'],
            'username' => ['required', 'alpha_num', 'unique:users'],
            'email' => ['required', 'string', 'email', 'unique:users'],
            'password' => [
                'required', 'string', 'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(3)
            ],
            'terms' => ['required', 'accepted']
        ]);

        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);

        return redirect()->route('login');
    }
}
