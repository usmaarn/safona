<div class="">

    <h1 class="text-xl font-black col-span-2 mb-5">Categories</h1>

    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody class="">
            @foreach ($categories as $category)
            <tr>
                <td>{{ $category->id }}</td>
                <td>{{ $category->name }}</td>
                <td>{{ $category->slug }}</td>
                <td>
                    <button class="text-blue-500" wire:click='edit({{ $category->id }})'>edit</button>
                    <button class="text-red-500">delete</button>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    @if ($selected)
    <div class="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center">
        <div class="bg-white rounded-lg min-w-[300px] max-w-[700px]">
            <div class="p-5 border-b">
                <h3>Update Category</h3>
                <i class="bi bi-close"></i>
            </div>
            <div class="p-5">
                <form wire:submit.prevent='update' class="flex flex-col gap-3">

                    <div class="flex-">
                        <label class="block">Name</label>
                        <input type="text" placeholder="name" wire:model='selected.name'
                            class="px-3 py-3 rounded-lg border w-full" />
                        @error($name)
                        <p class="text-sm text-red-600">{{ $message }}</span>
                            @enderror
                    </div>

                    <div class="flex-">
                        <label class="block">slug</label>
                        <input type="text" placeholder="name" wire:model='selected.slug'
                            class="px-3 py-3 rounded-lg border w-full" />
                        @error($name)
                        <p class="text-sm text-red-600">{{ $message }}</span>
                            @enderror
                    </div>

                    <button class="px-5 py-3 bg-zinc-800 hover:bg-zinc-600
                                text-white rounded-lg shadow font-bold">
                        Update
                    </button>

                </form>
            </div>
        </div>
    </div>
    @endif

    <div class="">
        <h1 class="text-xl font-black col-span-2 mb-5">Categories</h1>

        <form wire:submit.prevent='create' class="p-5 bg-white rounded-xl shadow flex flex-col gap-3">

            <h1 class="py-3 font-bold">New Category</h1>

            <div class="flex-">
                <label class="block">Name</label>
                <input type="text" placeholder="name" wire:model='name' class="px-3 py-3 rounded-lg border w-full" />
                @error($name)
                <p class="text-sm text-red-600">{{ $message }}</span>
                    @enderror
            </div>

            <div class="flex-">
                <label class="block">slug</label>
                <input type="text" placeholder="name" wire:model='slug' class="px-3 py-3 rounded-lg border w-full" />
                @error($name)
                <p class="text-sm text-red-600">{{ $message }}</span>
                    @enderror
            </div>

            <button class="px-5 py-3 bg-zinc-800 hover:bg-zinc-600
                text-white rounded-lg shadow font-bold">
                Add Category
            </button>

        </form>
    </div>

</div>
