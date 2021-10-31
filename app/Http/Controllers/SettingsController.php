<?php

namespace App\Http\Controllers;

class SettingsController extends Controller
{

	public function search() {
		return \App\Models\Settings::querySearch();
	}

	public function find($id) {
		return \App\Models\Settings::find($id);
	}

	public function save() {
		return \App\Models\Settings::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\Settings::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Settings::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Settings::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\Settings::find($id)->export();
	}
}