CREATE TABLE "patients" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "phone" text NOT NULL,
  "email" text NOT NULL,
  "birth_date" timestamp,
  "gender" text,
  "height" float,
  "weight" float
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "id_patient" int NOT NULL,
  "date" timestamp NOT NULL
);

CREATE TABLE "notes_schedule" (
  "id" SERIAL PRIMARY KEY,
  "id_patient" int NOT NULL,
  "id_schedule" int NOT NULL,
  "text" text
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("id_patient") REFERENCES "patients" ("id");

ALTER TABLE "notes_schedule" ADD FOREIGN KEY ("id_schedule") REFERENCES "schedules" ("id");

ALTER TABLE "notes_schedule" ADD FOREIGN KEY ("id_patient") REFERENCES "patients" ("id");
