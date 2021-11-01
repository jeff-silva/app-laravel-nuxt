<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{

	public function search() {
		return \App\Models\Pages::search()->paginate(request('per_page', 10));
	}

	public function find($id) {
		return \App\Models\Pages::find($id);
	}

	public function save() {
		return (new \App\Models\Pages)->store(request()->all());
	}

	public function valid() {
		return \App\Models\Pages::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Pages::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Pages::find($id)->clone();
	}

	public function export() {
		return \App\Models\Pages::search()->export();
	}
}