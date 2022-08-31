<div class="py-20">
    <form wire:submit.prevent='change' class="form w-[300px] mx-auto">
        <h3 class="text-2xl font-bold">Change Password</h3>

        <div class="">
            <input type="email" wire:model.defer='data.email' placeholder="Email Address"
                class="input @error('data.email') ring-red-500 @enderror">
            @error('data.email')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="password" wire:model.defer='data.password' placeholder="Password"
                class="input @error('data.password') ring-red-500 @enderror">
            @error('data.password')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="password" wire:model.defer='data.password_confirmation'
                placeholder="password Confirmation"
                class="input @error('password') ring-red-500 @enderror">
            @error('password')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <button class="btn">Reset Password</button>

    </form>
</div>
