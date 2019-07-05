import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCommunity1562309149376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "community" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_cae794115a383328e8923de4193" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "communities_users" ("community_id" int NOT NULL, "user_id" int NOT NULL, CONSTRAINT "PK_1dee3ffab1fa818865540f0815a" PRIMARY KEY ("community_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ce9c4cfcc2a21b5bb4edcbe093" ON "communities_users" ("community_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_66f790e2576a0fafcf46019a1d" ON "communities_users" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "communities_users" ADD CONSTRAINT "FK_ce9c4cfcc2a21b5bb4edcbe0939" FOREIGN KEY ("community_id") REFERENCES "community"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "communities_users" ADD CONSTRAINT "FK_66f790e2576a0fafcf46019a1dc" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "communities_users" DROP CONSTRAINT "FK_66f790e2576a0fafcf46019a1dc"`);
        await queryRunner.query(`ALTER TABLE "communities_users" DROP CONSTRAINT "FK_ce9c4cfcc2a21b5bb4edcbe0939"`);
        await queryRunner.query(`DROP INDEX "IDX_66f790e2576a0fafcf46019a1d" ON "communities_users"`);
        await queryRunner.query(`DROP INDEX "IDX_ce9c4cfcc2a21b5bb4edcbe093" ON "communities_users"`);
        await queryRunner.query(`DROP TABLE "communities_users"`);
        await queryRunner.query(`DROP TABLE "community"`);
    }

}
