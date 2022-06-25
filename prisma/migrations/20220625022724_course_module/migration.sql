-- CreateTable
CREATE TABLE "courses_modules" (
    "id_course" TEXT NOT NULL,
    "id_module" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_modules_pkey" PRIMARY KEY ("id_course","id_module")
);

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_id_module_fkey" FOREIGN KEY ("id_module") REFERENCES "modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
