<?php

namespace App\Http\Controllers;

class OauthProvidersController extends Controller
{

	public function __construct() {
		$this->model = new \App\Models\OauthProviders;
		$this->middleware('auth:api', [
			'except' => [],
		]);
	}
	
}