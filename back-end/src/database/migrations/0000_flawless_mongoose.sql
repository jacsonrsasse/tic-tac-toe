CREATE TABLE `users` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`nickname` text(50) NOT NULL,
	`connection_id` text(150),
	`ip_address` text(16)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_connection_id_unique` ON `users` (`connection_id`);