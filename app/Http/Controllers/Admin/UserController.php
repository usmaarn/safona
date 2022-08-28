<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Index', [
            'users' => User::all(),
        ]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Admin/User/Create');
    }

    public function store(Request $request)
    {
    }

    public function show(User $user)
    {
    }

    public function edit(User $user)
    {
    }


    public function update(Request $request, User $user)
    {
    }


    public function delete(User $user)
    {
    }
}