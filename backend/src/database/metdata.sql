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
  "date" timestamp NOT NULL,
  "notes" text
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("id_patient") REFERENCES "patients" ("id");