<div class="py-28">
    <div class="md:w-1/3 mx-auto space-y-5 md:text-lg">
        @if (session()->has('message'))
            <p class="text-green-600">
                Email Verification Link sent to your email:<b>{{ $email }}</b>,
                please check your mail for verification link
            </p>
            <button wire:click='send' class="px-10 py-3 rounded-full bg-green-600 text-white">
                Resend Link
            </button>
        @else
            <p>
                Your email:<b>{{ $email }}</b> has not been verified yet,
                click the button below to send email verification link
            </p>
            <button wire:click='send' class="px-10 py-3 rounded-full bg-green-600 text-white">
                Send Link
            </button>
        @endif
    </div>
</div>
