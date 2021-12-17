<?php

namespace App\Http\Controllers;

class UsersController extends Controller
{

	public function __construct() {
		$this->model = new \App\Models\User;
		$this->middleware('auth:api', [
			'except' => [],
		]);
	}

}