<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password as FacadesPassword;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class ResetPassword extends Component
{
    public $data;
    // public $email;
    // public $password;
    // public $password_confirmation;

    public function mount($token)
    {
        $this->data['token'] = $token;
    }

    protected function rules()
    {
        return [
            'data.token' => 'required',
            'data.email' => 'required|email',
            'data.password' => [
                'required', 'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ];
    }

    public function change()
    {
        $validated = $this->validate();

        $status = FacadesPassword::reset(
            $this->data,
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();
                event(new PasswordReset($user));
            }
        );

        return $status === FacadesPassword::PASSWORD_RESET
            ? redirect()->route('login')->with('status', __($status))
            : $this->addError('email', [__($status)]);
    }

    public function render()
    {
        return view('auth.reset-password');
    }
}