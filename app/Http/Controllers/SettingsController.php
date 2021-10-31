<?php

namespace App\Http\Controllers;

class SettingsController extends Controller
{

	public function search() {
		return \App\Models::querySearch();
	}

	public function find($id) {
		return \App\Models::find($id);
	}

	public function save() {
		return \App\Models::fill(request()->all())->save();
	}

	public function delete($id) {
		return \App\Models::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models::find($id)->clone();
	}

	public function export($id) {
		return \App\Models::find($id)->export();
	}
}