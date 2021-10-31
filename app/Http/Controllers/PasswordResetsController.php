<?php

namespace App\Http\Controllers;

class PasswordResetsController extends Controller
{

	public function search() {
		return \App\Models\PasswordResets::querySearch();
	}

	public function find($id) {
		return \App\Models\PasswordResets::find($id);
	}

	public function save() {
		return \App\Models\PasswordResets::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\PasswordResets::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\PasswordResets::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\PasswordResets::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\PasswordResets::find($id)->export();
	}
}