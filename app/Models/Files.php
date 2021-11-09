<?php

namespace App\Models;

class Files extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'name',
		'slug',
		'mime',
		'ext',
		'size',
		'folder',
		'url',
		'base64',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	protected $hidden = [
		'base64',
	];

	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}
}