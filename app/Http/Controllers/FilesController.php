<?php

namespace App\Http\Controllers;

class FilesController extends Controller
{

	public function search() {
		return \App\Models\Files::search()->paginate(request('per_page', 10));
	}

	public function find($id) {
		return \App\Models\Files::find($id);
	}

	public function save() {
		return (new \App\Models\Files)->store(request()->all());
	}

	public function valid() {
		return \App\Models\Files::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Files::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Files::find($id)->clone();
	}

	public function export() {
		return \App\Models\Files::search()->export();
	}
}