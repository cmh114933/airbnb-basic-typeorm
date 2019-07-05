import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTags1562307988133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" ("id" int NOT NULL IDENTITY(1,1), "first_name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties_tags" ("tag_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_0039f58ecbac69887fc3acaae38" PRIMARY KEY ("tag_id", "property_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_23c6bef3a45883fc85afa2477e" ON "properties_tags" ("tag_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b70000a624e1f0ab245318ef70" ON "properties_tags" ("property_id") `);
        await queryRunner.query(`ALTER TABLE "properties_tags" ADD CONSTRAINT "FK_23c6bef3a45883fc85afa2477e0" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties_tags" ADD CONSTRAINT "FK_b70000a624e1f0ab245318ef709" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "properties_tags" DROP CONSTRAINT "FK_b70000a624e1f0ab245318ef709"`);
        await queryRunner.query(`ALTER TABLE "properties_tags" DROP CONSTRAINT "FK_23c6bef3a45883fc85afa2477e0"`);
        await queryRunner.query(`DROP INDEX "IDX_b70000a624e1f0ab245318ef70" ON "properties_tags"`);
        await queryRunner.query(`DROP INDEX "IDX_23c6bef3a45883fc85afa2477e" ON "properties_tags"`);
        await queryRunner.query(`DROP TABLE "properties_tags"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
