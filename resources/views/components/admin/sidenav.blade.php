<div class="sidenav">
    <div class="md:sticky top-0 left-0">
        <a href="/" class="block p-5 h-[70px] border-b text-xl font-bold">
            Safona Media
        </a>
        <div class="p-5">
            <a href="{{ route('admin.home') }}" class="nav-item">Dashboard</a>
            <a href="{{ route('admin.posts') }}" class="nav-item">Posts</a>
            <a href="{{ route('admin.categories') }}" class="nav-item">Categories</a>
            <a href="{{ route('admin.tags') }}" class="nav-item">Tags</a>
            <a href="{{ route('admin.home') }}" class="nav-item">Comments</a>
            <a href="{{ route('admin.home') }}" class="nav-item">Settings</a>
            <a href="{{ route('admin.home') }}" class="nav-item">Profile</a>
            <livewire:auth.logout />
        </div>
    </div>
</div>
