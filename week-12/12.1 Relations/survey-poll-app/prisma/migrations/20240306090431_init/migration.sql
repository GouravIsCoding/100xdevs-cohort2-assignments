-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_surveuId_fkey";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveuId_fkey" FOREIGN KEY ("surveuId") REFERENCES "Survey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
