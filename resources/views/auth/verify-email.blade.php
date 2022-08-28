@extends('layouts.auth')


@section('content')

    <form action="{{ route('verification.send') }}" class="form max-w-[300px]" method="POST">
        @csrf

        @if (session()->has('message'))
            <h3 class="text-success">
                Email verification link sent to
                <b>{{ auth()->user()->email }}</b>
                check your email for confirmation
            </h3>
            <button class="btn w-full">Resend verification link</button>
        @else
            <h3>
                You have not verified your email address yet
                click on the button below to send verification link to
                <b>{{ auth()->user()->email }}</b>
            </h3>
            <button class="btn w-full">Send verification link</button>
        @endif

    </form>
@endsection
