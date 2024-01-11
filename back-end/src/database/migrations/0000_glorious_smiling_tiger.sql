CREATE TABLE IF NOT EXISTS `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nickname` text(50) NOT NULL,
	`connection_id` text(150),
	`ip_address` text(16)
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `users_connection_id_unique` ON `users` (`connection_id`);