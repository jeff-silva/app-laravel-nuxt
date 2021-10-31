<?php

namespace App\Http\Controllers;

class OauthProvidersController extends Controller
{

	public function search() {
		return \App\Models\OauthProviders::querySearch();
	}

	public function find($id) {
		return \App\Models\OauthProviders::find($id);
	}

	public function save() {
		return \App\Models\OauthProviders::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\OauthProviders::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\OauthProviders::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\OauthProviders::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\OauthProviders::find($id)->export();
	}
}