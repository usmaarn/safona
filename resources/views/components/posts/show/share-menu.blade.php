<div class="text-3xl space-x-5 text-zinc-500">
    <a href="#">
        <i class="bi bi-facebook"></i>
    </a>
    <a href="https://wa.me/?text={{ route('post.show', $slug) }}">
        <i class="bi bi-whatsapp"></i>
    </a>
    {{-- https://twitter.com/intent/tweet? --}}
    <a href="https://twitter.com/share?url={{ route('post.show', $slug) }}">
        <i class="bi bi-twitter"></i>
    </a>
    <a href="#">
        <i class="bi bi-linkedin"></i>
    </a>
    <button>
        <i class="bi bi-box-arrow-up-right"></i>
    </button>
</div>
