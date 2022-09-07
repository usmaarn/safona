<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Http\Request;
use Livewire\Component;
use PhpParser\Node\Stmt\If_;

class EmailNotice extends Component
{

    public $email;

    public function mount()
    {
        if (auth()->user()->email_verified_at) {
            return redirect()->home();
        }

        $this->email = auth()->user()->email;
    }

    public function send(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('message', 'Email Verification Sent Successfully');
    }

    public function render()
    {
        return view('auth.email-notice');;
    }
}