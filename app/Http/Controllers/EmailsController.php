<?php

namespace App\Http\Controllers;

class EmailsController extends Controller
{

	public function __construct() {
		$this->model = new \App\Models\Emails;
		$this->middleware('auth:api', [
			'except' => [],
		]);
	}

}