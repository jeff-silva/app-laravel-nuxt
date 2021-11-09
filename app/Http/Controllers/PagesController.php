<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => [
                'page',
            ],
        ]);
    }

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

	public function remove() {
		return \App\Models\Pages::search()->remove();
	}

	public function clone($id) {
		return \App\Models\Pages::find($id)->clone();
	}

	public function export() {
		return \App\Models\Pages::search()->export();
	}

	public function page() {
		return \App\Models\Pages::where([
			'slug' => request('slug', ''),
			'status' => 'publish',
		])->first();
	}
}