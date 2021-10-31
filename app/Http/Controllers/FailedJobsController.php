<?php

namespace App\Http\Controllers;

class FailedJobsController extends Controller
{

	public function search() {
		return \App\Models\FailedJobs::querySearch();
	}

	public function find($id) {
		return \App\Models\FailedJobs::find($id);
	}

	public function save() {
		return \App\Models\FailedJobs::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\FailedJobs::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\FailedJobs::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\FailedJobs::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\FailedJobs::find($id)->export();
	}
}