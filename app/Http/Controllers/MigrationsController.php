<?php

namespace App\Http\Controllers;

class MigrationsController extends Controller
{

	public function search() {
		return \App\Models\Migrations::search()->paginate(request('per_page', 10));
	}

	public function find($id) {
		return \App\Models\Migrations::find($id);
	}

	public function save() {
		return (new \App\Models\Migrations)->store(request()->all());
	}

	public function valid() {
		return \App\Models\Migrations::new()->validate(request()->all());
	}

	public function remove() {
		return \App\Models\Migrations::search()->remove();
	}

	public function clone($id) {
		return \App\Models\Migrations::find($id)->clone();
	}

	public function export() {
		return \App\Models\Migrations::search()->export();
	}

	public function delete($id) {
		return \App\Models\Migrations::search()->remove();
	}
}