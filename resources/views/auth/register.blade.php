<div class="">


    <form wire:submit.prevent='register' class="form max-w-[300px]">

        <h3 class="text-xl font-bold uppercase text-center mb-5 ">Register</h3>

        @error('status')
            <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
        @enderror

        <div class="grid sm:grid-cols-2 gap-5">
            <div class="">
                <input type="text" wire:model.defer='firstname' placeholder="First Name"
                    class="input @error('firstname') ring-red-500 @enderror">
                @error('firstname')
                    <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
                @enderror
            </div>

            <div class="">
                <input type="text" wire:model.defer='lastname' placeholder="Last Name"
                    class="input @error('lastname') ring-red-500 @enderror">
                @error('lastname')
                    <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
                @enderror
            </div>
        </div>

        <div class="">
            <input type="text" wire:model.defer='username' placeholder="Username"
                class="input @error('username') ring-red-500 @enderror">
            @error('username')
                <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="email" wire:model.defer='email' placeholder="Email Address"
                class="input @error('email') ring-red-500 @enderror">
            @error('email')
                <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="password" wire:model.defer='password' placeholder="Password"
                class="input @error('password') ring-red-500 @enderror">
            @error('password')
                <span class="text-red-500 font-semibold text-sm">{{ $message }}</span>
            @enderror
        </div>

        <div class="">
            <input type="password" wire:model.defer='password_confirmation'
                placeholder="Password_confirmation"
                class="input @error('password_confirmation') ring-red-500 @enderror">
        </div>

        <label class="">
            <div class="flex items-center gap-5">
                <input type="checkbox" wire:model='terms' />
                <span>Accept Terms & Conditions</span>
            </div>
            @error('terms')
                <p class="text-red-500 font-semibold text-sm">{{ $message }}</p>
            @enderror
        </label>

        <button class="btn">Register</button>

        <a href="{{ route('login') }}">Login</a>

    </form>

</div>
