<?php

namespace App\Http\Controllers;

class AddressesController extends Controller
{

	public function __construct() {
		$this->model = new \App\Models\Addresses;
		$this->middleware('auth:api', [
			'except' => [],
		]);
	}

}