<div class="py-20">
    <form wire:submit.prevent='send' class="form w-[300px] mx-auto">
        <h3 class="text-2xl font-bold">Forgot Password</h3>

        @if (session()->has('status'))
            <p class="text-green-500">{{ session('status') }}</p>
        @else
            <p>Enter email below to reset your password</p>
        @endif

        <div class="">
            <input type="email" wire:model.defer='email' placeholder="Email Address"
                class="input @error('email') ring-red-500 @enderror">
            @error('email')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <button class="btn">Reset Password</button>
    </form>
</div>
