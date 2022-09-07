<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Support\Facades\Password;
use Livewire\Component;

class ForgotPassword extends Component
{

    public $email;

    public function send()
    {
        $this->validate(['email' => 'required|email']);
        $status = Password::sendResetLink([
            'email' => $this->email
        ]);

        return $status === Password::RESET_LINK_SENT
            ? session()->put('status',  __($status))
            : $this->addError('email', __($status));
    }

    public function render()
    {
        return view('auth.forgot-password');
    }
}