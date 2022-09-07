@extends('layouts.master')


@section('content')
<div class="bg-zinc-100 grid grid-cols-[250px_auto]">
    @include('components.admin.sidenav')
    <div class="">
        <nav class="flex items-center h-[70px] bg-white border-b justify-between">
            <div class="ml-auto">
                <livewire:auth.logout />
            </div>
        </nav>

        <div class="p-5">
            {{ $slot }}
        </div>
    </div>
</div>
@endsection
