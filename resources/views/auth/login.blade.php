<div class="py-20">


    <form wire:submit.prevent='login' class="form max-w-[300px] mx-auto">

        <h3 class="text-xl font-bold uppercase text-center mb-5 ">Login</h3>

        @error('status')
            <span class="text-red-500 font-semibold">{{ $message }}</span>
        @enderror

        <div class="">
            <input type="text" wire:model.defer='username' placeholder="Username or Email"
                class="input @error('username') ring-red-500 @enderror">
            @error('username')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="password" wire:model.defer='password' placeholder="Password"
                class="input @error('password') ring-red-500 @enderror">
            @error('password')
                <span class="text-red-500 font-semibold">{{ $message }}</span>
            @enderror
        </div>

        <label class="flex items-center gap-5">
            <input type="checkbox" wire:model='remember' />
            <span>Remember Me</span>
        </label>

        <button class="btn">Login</button>

        <a href="{{ route('register') }}">Register</a>
        <a href="{{ route('forgot-password') }}">Forgot Password?</a>

    </form>

</div>
