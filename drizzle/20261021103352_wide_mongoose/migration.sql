CREATE TABLE "todos" (
	"id" serial PRIMARY KEY,
	"title" varchar(225) NOT NULL,
	"body" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"done" boolean DEFAULT false
);
