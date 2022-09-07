<nav class="navbar h-[70px] border-b bg-white px-5 sm:px-0">

    <div class="wrapper max-w-[1090px] mx-auto flex items-center justify-between gap-5 h-full relative">
        <a href="/" class="text-xl font-black">Safona <span class="hidden sm:inline">Media</span></a>

        <ul class="navmenu hidden md:flex items-center gap-5">
            <li><a href="{{ route('post.cat', 'news') }}">News</a></li>
            <li><a href="{{ route('post.cat', 'politics') }}">Politics</a></li>
            <li><a href="{{ route('post.cat', 'campus') }}">Campus</a></li>
            <li><a href="{{ route('post.cat', 'business') }}">Business</a></li>
            <li><a href="{{ route('post.cat', 'more') }}">Sports</a></li>
            <li class="relative" x-data={open:false} @mouseover='open=true' @mouseout='open=false'>
                <a class="cursor-pointer">
                    More <i class="bi bi-chevron-down"></i>
                </a>
                <div x-cloak x-show="open"
                    class="absolute w-[500px] top-full p-5 bg-white rounded-lg shadow-lg border z-[999] left-1/2 -translate-x-1/2">
                    <div class="grid grid-cols-3 gap-5">
                        <ul>
                            <li class="font-bold">World</li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                        </ul>
                        <ul>
                            <li class="font-bold">World</li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                        </ul>

                        <ul>
                            <li class="font-bold">World</li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                        </ul>
                        <ul>
                            <li class="font-bold">World</li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                            <li><a href="#">Russia Ukraine</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>

        <div class="flex items-center gap-5">

            <div class="" x-data={open:false}>
                <button class="text-sm text-xl" @click="open=true">
                    <i class="bi bi-search"></i>
                </button>
                <form action="{{ route('search') }}" x-show="open"
                    class="absolute w-full h-full top-0 left-0 px-5 py-3 bg-white flex items-center gap-5">
                    <a href="/" class="text-xl font-black">Safona <span class="hidden sm:inline">Media</span></a>
                    <input type="text" name="q" placeholder="search safona..."
                        class="flex-grow bg-zinc-100 px-5 py-3 rounded-full outline-none">
                    <button @click="open=false" type="button" class="text-xl">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </form>
            </div>

            @auth
            <div class="relative" x-data={open:false}>
                <button class="text-4xl" @click='open=true'>
                    <i class="bi bi-person-circle"></i>
                </button>
                <div x-show="open" @click.outside="open=false"
                    class="absolute top-full p-3 bg-white z-[999] border rounded-lg right-0">
                    <a href="{{ route('admin.home') }}"
                        class="flex itels-center gap-3 py-1 px-3 rounded-lg hover:bg-zinc-100">
                        <i class="bi bi-speedometer2 text-xl"></i>
                        <span>Admin Panel</span>
                    </a>
                    <a href="#" class="flex itels-center gap-3 py-1 px-3 rounded-lg hover:bg-zinc-100">
                        <i class="bi bi-person-fill text-xl"></i>
                        <span>Profile</span>
                    </a>
                    <a href="#" class="flex itels-center gap-3 py-1 px-3 rounded-lg hover:bg-zinc-100">
                        <i class="bi bi-gear-fill text-xl"></i>
                        <span>Settings</span>
                    </a>
                    <livewire:auth.logout />
                </div>
            </div>
            @else
            <a class="btn" href="{{ route('login') }}">Login</a>
            @endauth
        </div>
    </div>

</nav>
