<?php

namespace App\Http\Controllers;

class UsersNotificationsController extends Controller
{

	public function search() {
		return \App\Models\UsersNotifications::querySearch();
	}

	public function find($id) {
		return \App\Models\UsersNotifications::find($id);
	}

	public function save() {
		return \App\Models\UsersNotifications::fill(request()->all())->save();
	}

	public function valid() {
		return \App\Models\UsersNotifications::new()->validate(request()->all());
	}

	public function delete($id) {
		return \App\Models\UsersNotifications::find($id)->remove();
	}

	public function clone($id) {
		return \App\Models\UsersNotifications::find($id)->clone();
	}

	public function export($id) {
		return \App\Models\UsersNotifications::find($id)->export();
	}
}