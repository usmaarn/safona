<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class Register extends Component
{
    public $firstname;
    public $lastname;
    public $username;
    public $email;
    public $password;
    public $password_confirmation;
    public $terms;

    protected function rules()
    {
        return
            [
                'firstname' => ['required', 'alpha', 'min:3', 'max:25'],
                'lastname' => ['required', 'alpha', 'min:3', 'max:25'],
                'username' => ['required', 'alpha_dash', 'unique:users', 'min:5', 'max:50'],
                'email' => ['required', 'email', 'unique:users'],
                'password' => [
                    'required', 'string', 'confirmed',
                    Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(3)
                ],
                'terms' => ['accepted']
            ];
    }

    public function register()
    {
        $validatedData = $this->validate();
        $user = User::create($validatedData);
        event(new Registered($user));
        Auth::login($user);
        return redirect('/');
    }

    public function render()
    {
        return view('auth.register')->layout('layouts.auth');
    }
}