<?php

namespace App\Http\Controllers;

class EmailsController extends Controller
{

	public function search() {
		return \App\Models\Emails::querySearch();
	}

	public function find($id) {
		return \App\Models\Emails::find($id);
	}

	public function save() {
		return \App\Models\Emails::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\Emails::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\Emails::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\Emails::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\Emails::find($id)->export();
	}
}