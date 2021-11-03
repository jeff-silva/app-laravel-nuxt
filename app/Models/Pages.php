<?php

namespace App\Models;

class Pages extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'slug',
		'name',
		'status',
		'content',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}

	public function getContentAttribute($value) {
		if (is_string($value)) {
			$value = json_decode($value, true);
		}

		if (! is_array($value)) {
			return ['elements'=>''];
		}
		
		return $value;
	}
}