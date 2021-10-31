<?php

namespace App\Http\Controllers;

class UsersController extends Controller
{

	public function search() {
		return \App\Models\Users::querySearch();
	}

	public function find($id) {
		return \App\Models\Users::find($id);
	}

	public function save() {
		return \App\Models\Users::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\Users::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Users::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Users::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\Users::find($id)->export();
	}
}