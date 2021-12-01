<?php

/* Este arquivo é gerado, NÃO EXITE-O DIRETAMENTE
Para gerá-lo, execute "php artisan app:make-routes"
ou "php artisan app:dev" para gerar todos os arquivos. */

\App\Http\Controllers\AddressesController::router();
\App\Http\Controllers\EmailsController::router();
\App\Http\Controllers\FailedJobsController::router();
\App\Http\Controllers\FilesController::router();
\App\Http\Controllers\MigrationsController::router();
\App\Http\Controllers\OauthProvidersController::router();
\App\Http\Controllers\PasswordResetsController::router();
\App\Http\Controllers\SettingsController::router();
\App\Http\Controllers\UsersController::router();
\App\Http\Controllers\UsersNotificationsController::router();

return [
	'test' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['test', 'App\Http\Controllers\AppController@test'],
	],
	'login' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['login', 'App\Http\Controllers\AppController@login'],
	],
	'logout' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['logout', 'App\Http\Controllers\AppController@logout'],
	],
	'refresh' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['refresh', 'App\Http\Controllers\AppController@refresh'],
	],
	'me' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['me', 'App\Http\Controllers\AppController@me'],
	],
	'register' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['register', 'App\Http\Controllers\AppController@register'],
	],
	'endpoints' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['endpoints', 'App\Http\Controllers\AppController@endpoints'],
	],
	'password-reset-start' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-reset-start', 'App\Http\Controllers\AppController@passwordResetStart'],
	],
	'password-reset-change' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-reset-change', 'App\Http\Controllers\AppController@passwordResetChange'],
	],
	'email-test' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['email-test', 'App\Http\Controllers\AppController@emailTest'],
	],
	'emails-templates' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['emails-templates', 'App\Http\Controllers\AppController@emailsTemplates'],
	],
	'upload' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['upload', 'App\Http\Controllers\AppController@upload'],
	],
	'addresses_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['addresses/search', 'App\Http\Controllers\AddressesController@search'],
	],
	'addresses_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['addresses/find/{id}', 'App\Http\Controllers\AddressesController@find'],
	],
	'addresses_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['addresses/save', 'App\Http\Controllers\AddressesController@save'],
	],
	'addresses_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['addresses/valid', 'App\Http\Controllers\AddressesController@valid'],
	],
	'addresses_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['addresses/remove', 'App\Http\Controllers\AddressesController@remove'],
	],
	'addresses_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['addresses/clone/{id}', 'App\Http\Controllers\AddressesController@clone'],
	],
	'addresses_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['addresses/import', 'App\Http\Controllers\AddressesController@import'],
	],
	'addresses_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['addresses/export', 'App\Http\Controllers\AddressesController@export'],
	],
	'emails_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['emails/search', 'App\Http\Controllers\EmailsController@search'],
	],
	'emails_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['emails/find/{id}', 'App\Http\Controllers\EmailsController@find'],
	],
	'emails_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['emails/save', 'App\Http\Controllers\EmailsController@save'],
	],
	'emails_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['emails/valid', 'App\Http\Controllers\EmailsController@valid'],
	],
	'emails_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['emails/remove', 'App\Http\Controllers\EmailsController@remove'],
	],
	'emails_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['emails/clone/{id}', 'App\Http\Controllers\EmailsController@clone'],
	],
	'emails_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['emails/import', 'App\Http\Controllers\EmailsController@import'],
	],
	'emails_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['emails/export', 'App\Http\Controllers\EmailsController@export'],
	],
	'failed_jobs_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['failed-jobs/search', 'App\Http\Controllers\FailedJobsController@search'],
	],
	'failed_jobs_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['failed-jobs/find/{id}', 'App\Http\Controllers\FailedJobsController@find'],
	],
	'failed_jobs_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['failed-jobs/save', 'App\Http\Controllers\FailedJobsController@save'],
	],
	'failed_jobs_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['failed-jobs/valid', 'App\Http\Controllers\FailedJobsController@valid'],
	],
	'failed_jobs_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['failed-jobs/remove', 'App\Http\Controllers\FailedJobsController@remove'],
	],
	'failed_jobs_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['failed-jobs/clone/{id}', 'App\Http\Controllers\FailedJobsController@clone'],
	],
	'failed_jobs_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['failed-jobs/import', 'App\Http\Controllers\FailedJobsController@import'],
	],
	'failed_jobs_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['failed-jobs/export', 'App\Http\Controllers\FailedJobsController@export'],
	],
	'files_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['files/search', 'App\Http\Controllers\FilesController@search'],
	],
	'files_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['files/find/{id}', 'App\Http\Controllers\FilesController@find'],
	],
	'files_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['files/save', 'App\Http\Controllers\FilesController@save'],
	],
	'files_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['files/valid', 'App\Http\Controllers\FilesController@valid'],
	],
	'files_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['files/remove', 'App\Http\Controllers\FilesController@remove'],
	],
	'files_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['files/clone/{id}', 'App\Http\Controllers\FilesController@clone'],
	],
	'files_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['files/import', 'App\Http\Controllers\FilesController@import'],
	],
	'files_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['files/export', 'App\Http\Controllers\FilesController@export'],
	],
	'migrations_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['migrations/search', 'App\Http\Controllers\MigrationsController@search'],
	],
	'migrations_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['migrations/find/{id}', 'App\Http\Controllers\MigrationsController@find'],
	],
	'migrations_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['migrations/save', 'App\Http\Controllers\MigrationsController@save'],
	],
	'migrations_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['migrations/valid', 'App\Http\Controllers\MigrationsController@valid'],
	],
	'migrations_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['migrations/remove', 'App\Http\Controllers\MigrationsController@remove'],
	],
	'migrations_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['migrations/clone/{id}', 'App\Http\Controllers\MigrationsController@clone'],
	],
	'migrations_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['migrations/import', 'App\Http\Controllers\MigrationsController@import'],
	],
	'migrations_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['migrations/export', 'App\Http\Controllers\MigrationsController@export'],
	],
	'oauth_providers_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['oauth-providers/search', 'App\Http\Controllers\OauthProvidersController@search'],
	],
	'oauth_providers_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['oauth-providers/find/{id}', 'App\Http\Controllers\OauthProvidersController@find'],
	],
	'oauth_providers_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['oauth-providers/save', 'App\Http\Controllers\OauthProvidersController@save'],
	],
	'oauth_providers_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['oauth-providers/valid', 'App\Http\Controllers\OauthProvidersController@valid'],
	],
	'oauth_providers_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['oauth-providers/remove', 'App\Http\Controllers\OauthProvidersController@remove'],
	],
	'oauth_providers_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['oauth-providers/clone/{id}', 'App\Http\Controllers\OauthProvidersController@clone'],
	],
	'oauth_providers_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['oauth-providers/import', 'App\Http\Controllers\OauthProvidersController@import'],
	],
	'oauth_providers_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['oauth-providers/export', 'App\Http\Controllers\OauthProvidersController@export'],
	],
	'password_resets_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['password-resets/search', 'App\Http\Controllers\PasswordResetsController@search'],
	],
	'password_resets_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['password-resets/find/{id}', 'App\Http\Controllers\PasswordResetsController@find'],
	],
	'password_resets_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-resets/save', 'App\Http\Controllers\PasswordResetsController@save'],
	],
	'password_resets_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-resets/valid', 'App\Http\Controllers\PasswordResetsController@valid'],
	],
	'password_resets_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-resets/remove', 'App\Http\Controllers\PasswordResetsController@remove'],
	],
	'password_resets_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-resets/clone/{id}', 'App\Http\Controllers\PasswordResetsController@clone'],
	],
	'password_resets_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['password-resets/import', 'App\Http\Controllers\PasswordResetsController@import'],
	],
	'password_resets_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['password-resets/export', 'App\Http\Controllers\PasswordResetsController@export'],
	],
	'settings_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['settings/search', 'App\Http\Controllers\SettingsController@search'],
	],
	'settings_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['settings/find/{id}', 'App\Http\Controllers\SettingsController@find'],
	],
	'settings_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['settings/save', 'App\Http\Controllers\SettingsController@save'],
	],
	'settings_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['settings/valid', 'App\Http\Controllers\SettingsController@valid'],
	],
	'settings_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['settings/remove', 'App\Http\Controllers\SettingsController@remove'],
	],
	'settings_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['settings/clone/{id}', 'App\Http\Controllers\SettingsController@clone'],
	],
	'settings_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['settings/import', 'App\Http\Controllers\SettingsController@import'],
	],
	'settings_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['settings/export', 'App\Http\Controllers\SettingsController@export'],
	],
	'users_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users/search', 'App\Http\Controllers\UsersController@search'],
	],
	'users_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users/find/{id}', 'App\Http\Controllers\UsersController@find'],
	],
	'users_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users/save', 'App\Http\Controllers\UsersController@save'],
	],
	'users_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users/valid', 'App\Http\Controllers\UsersController@valid'],
	],
	'users_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users/remove', 'App\Http\Controllers\UsersController@remove'],
	],
	'users_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users/clone/{id}', 'App\Http\Controllers\UsersController@clone'],
	],
	'users_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users/import', 'App\Http\Controllers\UsersController@import'],
	],
	'users_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users/export', 'App\Http\Controllers\UsersController@export'],
	],
	'users_notifications_search' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users-notifications/search', 'App\Http\Controllers\UsersNotificationsController@search'],
	],
	'users_notifications_find' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users-notifications/find/{id}', 'App\Http\Controllers\UsersNotificationsController@find'],
	],
	'users_notifications_save' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users-notifications/save', 'App\Http\Controllers\UsersNotificationsController@save'],
	],
	'users_notifications_valid' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users-notifications/valid', 'App\Http\Controllers\UsersNotificationsController@valid'],
	],
	'users_notifications_remove' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users-notifications/remove', 'App\Http\Controllers\UsersNotificationsController@remove'],
	],
	'users_notifications_clone' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users-notifications/clone/{id}', 'App\Http\Controllers\UsersNotificationsController@clone'],
	],
	'users_notifications_import' => [
		'call' => ['Illuminate\Support\Facades\Route', 'post'],
		'params' => ['users-notifications/import', 'App\Http\Controllers\UsersNotificationsController@import'],
	],
	'users_notifications_export' => [
		'call' => ['Illuminate\Support\Facades\Route', 'get'],
		'params' => ['users-notifications/export', 'App\Http\Controllers\UsersNotificationsController@export'],
	],
];