<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{

    public function notice()
    {
        return view('auth.verify-email');
    }


    public function verify(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return redirect('/');
    }

    public function send(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('message', 'Email Verification Sent Successfully');
    }

    public function form()
    {
        return view('auth.email-verification-notification');
    }
}