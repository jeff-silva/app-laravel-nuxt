<?php

$database = env('DB_DATABASE');

// \DB::select('SET FOREIGN_KEY_CHECKS=0;');
// \DB::select('SET GLOBAL FOREIGN_KEY_CHECKS=0;');


// Create table failed_jobs
\DB::select("CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column failed_jobs.id
\Schema::hasColumn('failed_jobs', 'id')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column failed_jobs.uuid
\Schema::hasColumn('failed_jobs', 'uuid')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.connection
\Schema::hasColumn('failed_jobs', 'connection')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `connection` text COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `connection` text COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.queue
\Schema::hasColumn('failed_jobs', 'queue')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `queue` text COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `queue` text COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.payload
\Schema::hasColumn('failed_jobs', 'payload')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.exception
\Schema::hasColumn('failed_jobs', 'exception')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.failed_at
\Schema::hasColumn('failed_jobs', 'failed_at')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP");


// Create table life_person
\DB::select("CREATE TABLE IF NOT EXISTS `life_person` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` enum('female','female-trans','male','male-trans') COLLATE utf8_unicode_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `money` decimal(10,2) DEFAULT NULL,
  `is_dead` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column life_person.id
\Schema::hasColumn('life_person', 'id')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column life_person.name
\Schema::hasColumn('life_person', 'name')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column life_person.gender
\Schema::hasColumn('life_person', 'gender')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `gender` enum('female','female-trans','male','male-trans') COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `gender` enum('female','female-trans','male','male-trans') COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column life_person.age
\Schema::hasColumn('life_person', 'age')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `age` int(11) DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `age` int(11) DEFAULT NULL");


// Create/Update column life_person.money
\Schema::hasColumn('life_person', 'money')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `money` decimal(10,2) DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `money` decimal(10,2) DEFAULT NULL");


// Create/Update column life_person.is_dead
\Schema::hasColumn('life_person', 'is_dead')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `is_dead` int(1) DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `is_dead` int(1) DEFAULT NULL");


// Create/Update column life_person.created_at
\Schema::hasColumn('life_person', 'created_at')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create/Update column life_person.updated_at
\Schema::hasColumn('life_person', 'updated_at')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create/Update column life_person.deleted_at
\Schema::hasColumn('life_person', 'deleted_at')?
	\DB::select("ALTER TABLE life_person MODIFY COLUMN `deleted_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person ADD COLUMN `deleted_at` datetime DEFAULT NULL");


// Create table life_person_interactions
\DB::select("CREATE TABLE IF NOT EXISTS `life_person_interactions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_from` bigint(20) unsigned DEFAULT NULL,
  `person_to` bigint(20) unsigned DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column life_person_interactions.id
\Schema::hasColumn('life_person_interactions', 'id')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column life_person_interactions.name
\Schema::hasColumn('life_person_interactions', 'name')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column life_person_interactions.person_from
\Schema::hasColumn('life_person_interactions', 'person_from')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `person_from` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `person_from` bigint(20) unsigned DEFAULT NULL");


// Create/Update column life_person_interactions.person_to
\Schema::hasColumn('life_person_interactions', 'person_to')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `person_to` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `person_to` bigint(20) unsigned DEFAULT NULL");


// Create/Update column life_person_interactions.type
\Schema::hasColumn('life_person_interactions', 'type')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column life_person_interactions.description
\Schema::hasColumn('life_person_interactions', 'description')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column life_person_interactions.created_at
\Schema::hasColumn('life_person_interactions', 'created_at')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create/Update column life_person_interactions.updated_at
\Schema::hasColumn('life_person_interactions', 'updated_at')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create/Update column life_person_interactions.deleted_at
\Schema::hasColumn('life_person_interactions', 'deleted_at')?
	\DB::select("ALTER TABLE life_person_interactions MODIFY COLUMN `deleted_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE life_person_interactions ADD COLUMN `deleted_at` datetime DEFAULT NULL");


// Create table migrations
\DB::select("CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column migrations.id
\Schema::hasColumn('migrations', 'id')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column migrations.migration
\Schema::hasColumn('migrations', 'migration')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column migrations.batch
\Schema::hasColumn('migrations', 'batch')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `batch` int(11) NOT NULL"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `batch` int(11) NOT NULL");


// Create table password_resets
\DB::select("CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column password_resets.email
\Schema::hasColumn('password_resets', 'email')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column password_resets.token
\Schema::hasColumn('password_resets', 'token')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column password_resets.created_at
\Schema::hasColumn('password_resets', 'created_at')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create table personal_access_tokens
\DB::select("CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column personal_access_tokens.id
\Schema::hasColumn('personal_access_tokens', 'id')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column personal_access_tokens.tokenable_type
\Schema::hasColumn('personal_access_tokens', 'tokenable_type')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.tokenable_id
\Schema::hasColumn('personal_access_tokens', 'tokenable_id')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `tokenable_id` bigint(20) unsigned NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `tokenable_id` bigint(20) unsigned NOT NULL");


// Create/Update column personal_access_tokens.name
\Schema::hasColumn('personal_access_tokens', 'name')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.token
\Schema::hasColumn('personal_access_tokens', 'token')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.abilities
\Schema::hasColumn('personal_access_tokens', 'abilities')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `abilities` text COLLATE utf8mb4_unicode_ci"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `abilities` text COLLATE utf8mb4_unicode_ci");


// Create/Update column personal_access_tokens.last_used_at
\Schema::hasColumn('personal_access_tokens', 'last_used_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `last_used_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `last_used_at` timestamp NULL DEFAULT NULL");


// Create/Update column personal_access_tokens.created_at
\Schema::hasColumn('personal_access_tokens', 'created_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create/Update column personal_access_tokens.updated_at
\Schema::hasColumn('personal_access_tokens', 'updated_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `updated_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `updated_at` timestamp NULL DEFAULT NULL");


// Create table users
\DB::select("CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column users.id
\Schema::hasColumn('users', 'id')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE users ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column users.name
\Schema::hasColumn('users', 'name')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column users.email
\Schema::hasColumn('users', 'email')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column users.email_verified_at
\Schema::hasColumn('users', 'email_verified_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `email_verified_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `email_verified_at` timestamp NULL DEFAULT NULL");


// Create/Update column users.password
\Schema::hasColumn('users', 'password')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column users.remember_token
\Schema::hasColumn('users', 'remember_token')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL");


// Create/Update column users.created_at
\Schema::hasColumn('users', 'created_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create/Update column users.updated_at
\Schema::hasColumn('users', 'updated_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `updated_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `updated_at` timestamp NULL DEFAULT NULL");