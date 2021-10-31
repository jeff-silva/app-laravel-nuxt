<?php

namespace App\Http\Controllers;

class MigrationsController extends Controller
{

	public function search() {
		return \App\Models\Migrations::querySearch();
	}

	public function find($id) {
		return \App\Models\Migrations::find($id);
	}

	public function save() {
		return \App\Models\Migrations::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\Migrations::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Migrations::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Migrations::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\Migrations::find($id)->export();
	}
}