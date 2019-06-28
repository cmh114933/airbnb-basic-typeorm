import {MigrationInterface, QueryRunner} from "typeorm";

export class AirBnBV11561688208696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "rating" int NOT NULL, "remark" nvarchar(255) NOT NULL, "property_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" int NOT NULL IDENTITY(1,1), "address" nvarchar(255) NOT NULL, "numRooms" int NOT NULL, "price" int NOT NULL, "allowSmoking" bit NOT NULL, "maxGuestNum" int NOT NULL, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" int NOT NULL IDENTITY(1,1), "amount" int NOT NULL, "status" nvarchar(255) NOT NULL, "paymentMethod" nvarchar(255) NOT NULL, "bookingId" int, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" int NOT NULL IDENTITY(1,1), "checkInDate" date NOT NULL, "checkOutDate" date NOT NULL, "totalPrice" int NOT NULL, "remarks" nvarchar(255) NOT NULL, "numGuest" int NOT NULL, "user_id" int, "property_id" int, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_5738278c92c15e1ec9d27e3a098" FOREIGN KEY ("bookingId") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_5738278c92c15e1ec9d27e3a098"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
