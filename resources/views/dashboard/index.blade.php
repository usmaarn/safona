<div class="grid grid-cols-[300px_auto]">
    @include('components.dashboard.sidenav')
    <div class="">
        <nav class="flex items-center h-[70px] bg-white border-b justify-between">
            <div class="ml-auto">
                @include('auth.logout')
            </div>
        </nav>
    </div>
</div>
