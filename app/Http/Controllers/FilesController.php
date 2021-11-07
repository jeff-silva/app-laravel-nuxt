<?php

namespace App\Http\Controllers;

class FilesController extends Controller
{

	public function __construct() {
		$this->middleware('auth:api', [
			'except' => ['file'],
		]);
	}

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

	public function upload() {
		if (request()->hasFile('file') AND $file = request()->file('file')) {
			$data['name'] = $file->getClientOriginalName();
			$data['slug'] = uniqid() .'.'. $file->extension();
			$data['mime'] = $file->getMimeType();
			$data['ext'] = $file->extension();
			$data['size'] = $file->getSize();
			$data['url'] = "/api/file/{$data['slug']}";
			$data['base64'] =  "data:{$data['mime']};base64,". base64_encode(file_get_contents($file));
			return \App\Models\Files::create($data);
		}

		return false;
	}

	public function file($slug) {
		if ($file = \App\Models\Files::where('slug', $slug)->first()) {
			$content = explode(',', $file->base64);
			$content = base64_decode($content[1]);

			return response($content)
                ->withHeaders([
                    'Content-Type' => $file->mime,
                    // 'Cache-Control' => 'no-store, no-cache',
                    // 'Content-Disposition' => 'attachment; filename="logs.txt',
                ]);
		}

		return false;
	}
}