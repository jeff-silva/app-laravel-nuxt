<?php

namespace App\Http\Controllers;

class UsersNotificationsController extends Controller
{

	public function __construct() {
		$this->model = new \App\Models\UsersNotifications;
		$this->middleware('auth:api', [
			'except' => [],
		]);
	}

}