<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;

class Login extends Component
{
    public $username;
    public $password;
    public $remember = false;

    protected $rules = [
        'username' => ['required', 'string', 'min:3', 'max:50'],
        'password' => ['required', 'string', 'min:8'],
    ];

    public function login()
    {
        $validated = $this->validate();
        $user = User::where('username', $this->username)
            ->orWhere('email', $this->username)->first();
        if (!$user) {
            return $this->addError('status', 'User with username/email does not exist.');
        }

        if (Hash::check($this->password, $user->password)) {
            Auth::login($user, $this->remember);
            return redirect('/');
        }

        return $this->addError('status', 'Incorrect Password.');
    }

    public function render()
    {
        return view('auth.login');
    }
}