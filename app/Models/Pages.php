<?php

namespace App\Models;

class Pages extends \Illuminate\Database\Eloquent\Model
{
	use \Illuminate\Database\Eloquent\Factories\HasFactory;
	use \App\Traits\Model;

	public $fillable = ['id', 'name', 'slug', 'content', 'owner', 'created_at', 'updated_at', 'deleted_at'];


	public function getContentAttribute($value)
	{
		$value = is_array($value)? $value: json_decode($value, true);
		return is_array($value)? $value: (object) [];
	}


	public function owner()
	{
		return $this->hasOne(User::class, 'id', 'owner');
	}


	public function owners()
	{
		return $this->hasMany(\App\Models\User::class, 'id', 'owner');
	}
}
